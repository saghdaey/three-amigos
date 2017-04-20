import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
    // see control-messages.component.ts: this is where we're setting the error message collection
    public static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            required: 'Required',
            invalidCreditCard: 'Is invalid credit card number',
            invalidEmailAddress: 'Invalid email address',
            invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            minlength: `Minimum length ${validatorValue.requiredLength}`,
            checkUser: 'Username must be unique'
        };

        return config[validatorName];
    }
    public static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { invalidEmailAddress: true };
        }
    }
}
