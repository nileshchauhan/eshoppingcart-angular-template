import { FormControl } from '@angular/forms';

export class CustomValidator {

    public static validatePassword(control: FormControl) {
        let value = control.value;
        if (value && value.length < 3) {
            return { "message": "Password must be atleast 6 characters" };
        }
        return null;
    }

    public static validateNumber(control: FormControl) {
        let value = control.value;
        if (isNaN(value)) {
            return { "message": "Please enter numeric value" }
        }
    }
}