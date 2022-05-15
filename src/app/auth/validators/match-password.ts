import {AbstractControl, FormGroup, Validator} from '@angular/forms'
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class MatchPassword implements Validator {
    validate(formgroup: AbstractControl) {
        const { password, passwordConfirmation} = formgroup.value;
        if (password === passwordConfirmation) {
            return null;
        } else {
            return { passwordDontMatch: true};
        }

    }
}
