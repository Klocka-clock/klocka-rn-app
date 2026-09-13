@RTK.md

## RTK command execution

- Read `RTK.md` before running shell commands in this repository.
- Run shell commands through RTK. Use supported wrappers such as `rtk git status`,
  `rtk rg`, `rtk pnpm`, and `rtk tsc --noEmit` to reduce command output.
- For commands without a supported wrapper, or when exact unfiltered output is
  required, use `rtk proxy <command> [args...]`.
- For compound shell commands, apply RTK to each command where possible; do not
  wrap an entire script in `rtk proxy` when individual RTK filters can be used.
- Use `rtk gain` or `rtk gain --history` to inspect savings. These commands report
  statistics; they do not enable RTK automatically.
