#!/bin/bash
# Sippy — Codex auto-runner (runs on YOUR Mac via launchd). Handles ALL git/GitHub.
# Safe to run often (login / wake / every few hours): if nothing is pending it skips Codex, so it won't burn quota.
set -u
REPO="$HOME/Claude/Projects/sipy"
cd "$REPO" || { echo "$(date) no repo dir $REPO"; exit 1; }
echo "=== $(date) Codex auto-run ==="

# git identity + baseline (so commits never fail on missing identity)
[ -d .git ] || git init -q
git config user.email >/dev/null 2>&1 || git config user.email "codex@sippy.local"
git config user.name  >/dev/null 2>&1 || git config user.name  "Sippy Codex Runner"

# Is there actionable work? TODO/DOING/BLOCKED in STATUS, or any Claude ANSWER waiting to be picked up.
PENDING=0
grep -qiE '\|[[:space:]]*(TODO|DOING|BLOCKED)' bridge/STATUS.md 2>/dev/null && PENDING=1
ls bridge/inbox/*-ANSWER.md >/dev/null 2>&1 && PENDING=1

if [ "$PENDING" = "1" ]; then
  # Codex EDITS FILES ONLY (no git, no network, no outside-folder). Self-heals via PLAYBOOK before blocking.
  codex exec --sandbox workspace-write "Read AGENTS.md, bridge/PLAYBOOK.md, and any bridge/inbox/*-ANSWER.md first. Do the NEXT actionable bridge/inbox task (TODO, or BLOCKED that now has an ANSWER), following the protocol. Before writing any BLOCKED report, try to fix it via bridge/PLAYBOOK.md and continue; only mark BLOCKED for the playbook's escalation list. Edit ONLY within the task's allowed files, inside this folder. Update bridge/STATUS.md, bridge/ACTIVITY.md, and write bridge/outbox/<id>-report.md. Do NOT run git or touch the network."
else
  echo "$(date) nothing pending in STATUS; skipping Codex (saving quota)"
fi

# Runner does git/network (Codex never does). Commit + push whatever changed.
git add -A && git commit -qm "codex+claude sync: $(date +%F' '%T)" 2>/dev/null || true
if ! git push 2>/tmp/sippy_push_err; then
  if grep -qiE 'authenticat|denied|403|401|could not read Username|Permission|fatal: unable to access' /tmp/sippy_push_err; then
    { echo "# PUSH FAILED — needs your GitHub login (once)"; echo; echo "הרצת \`gh auth login\` פעם אחת תפתור. שגיאה:"; echo '```'; cat /tmp/sippy_push_err; echo '```'; } > bridge/outbox/PUSH-AUTH-BLOCKED.md
    echo "$(date) PUSH BLOCKED on auth — wrote bridge/outbox/PUSH-AUTH-BLOCKED.md"
  else
    echo "$(date) push skipped/failed (non-auth): $(cat /tmp/sippy_push_err)"
  fi
else
  rm -f bridge/outbox/PUSH-AUTH-BLOCKED.md 2>/dev/null
fi

ls bridge/outbox/*-BLOCKED.md 2>/dev/null && echo "$(date) NOTE: blockers present (see bridge/outbox)" || true
echo "=== $(date) done ==="
