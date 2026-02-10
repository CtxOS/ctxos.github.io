# CtxOS Error Codes

All scripts follow standardized exit codes:

| Code | Name | Meaning | Action |
|------|------|---------|--------|
| 0 | EXIT_OK | Success | N/A |
| 1 | EXIT_GENERAL | Generic error | Check logs |
| 2 | EXIT_INVALID_ARG | Bad arguments | Verify syntax |
| 3 | EXIT_NOT_FOUND | Missing file/pkg | Check paths |
| 4 | EXIT_PERMISSION | Need root | Use sudo |
| 5 | EXIT_TIMEOUT | Operation timeout | Try again |
| 6 | EXIT_DEPENDENCY | Missing dependency | Install package |
| 7 | EXIT_CONFIG | Config error | Verify config |
| 8 | EXIT_NETWORK | Network error | Check connectivity |

## Usage Example

```bash
source scripts/lib-errors.sh

set_error_context "my-task"
require_root
require_command "apt-get"

if ! apt-get update; then
    error_exit "$EXIT_NETWORK" "Failed to update package list"
fi
```

## Integration with Existing Scripts

To add error handling to existing scripts:

1. Source the library at the top:
   ```bash
   source scripts/lib-errors.sh
   ```

2. Set context for your operations:
   ```bash
   set_error_context "module-install"
   ```

3. Use helper functions:
   ```bash
   require_command "dpkg"
   require_file "/etc/apt/sources.list"
   ```

4. Use error_exit for failures:
   ```bash
   if ! some_command; then
       error_exit "$EXIT_GENERAL" "Command failed"
   fi
   ```
