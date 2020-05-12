import {
  ValidationErrors,
  AbstractControl,
  ValidatorFn,
  FormGroup,
} from "@angular/forms";

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get("Password");
  const cpassword = control.get("ConfirmPassword");
  if (password.pristine || cpassword.pristine) {
    return null;
  }
  return password && cpassword && password.value != cpassword.value
    ? { mismatch: true }
    : null;
}
