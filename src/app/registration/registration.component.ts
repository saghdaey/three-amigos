import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';
import { RegistrationService, ValidationService } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reject } from 'q';
import { Globals } from './../globals';

@Component({
    selector: 'register',
    styleUrls: [ './registration.component.less' ],
    // make sure control-messages.component is created and referenced in app.module.ts when using this template
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
    public signUpForm: FormGroup;
    constructor(private fb: FormBuilder,  private registration: RegistrationService, private globals: Globals) {
        this.signUpForm = fb.group({
            'first_name': ['', Validators.required],
            'last_name': ['', Validators.required],
            'email': ['', [Validators.required, ValidationService.emailValidator]],
            'telephone': [''],
            'zipcode': ['', Validators.required],
            'password': ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    public ngOnInit() {
        let user=this.globals.getUser();
        console.log(user);
    }

    public signUp() {
        console.log(this.signUpForm.value);
        return true;
    }

}
