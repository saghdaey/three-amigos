import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';
import { RegistrationService, ValidationService } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reject } from 'q';

@Component({
    selector: 'register',
    styleUrls: [ './registration.component.less' ],
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
    public signUpForm: FormGroup;
    public signupError: string;
    constructor(private fb: FormBuilder,  public registration: RegistrationService, public appState: AppState) {
        this.signUpForm = fb.group({
            'name': ['', Validators.required],
            'email': ['', [Validators.required, ValidationService.emailValidator]],
            'password': ['', [Validators.required, Validators.minLength(8)]],
            'password-confirmation': ['', [Validators.required, Validators.minLength(8)]],
            'telephone': ['']
        // }, {validator: this.matchingPasswords('password', 'password-confirmation')});
        }, {validator: this.matchingPasswords('password', 'password-confirmation')});
    }

    public checkUserName() {
        let control = this.signUpForm.controls['email'];
        if (control.valid) {
//            return new Promise((resolve, reject) => {
            let uNameVerify = control.value;
            console.log('email: ' + uNameVerify);
            this.registration.checkUserName(uNameVerify).subscribe(
                (data) => {
                    control.setErrors({ checkUser: true });
                },
                (error) => {
                    if (error.status !== 404) {
                        // returned an error that is not "not found" - this should mean username is taken
                        control.setErrors({ checkUser: true });
                    }
                }
            );
            // });
        }
    }

    public ngOnInit() {

    }

    public signUp() {
        return true;
    }

    private matchingPasswords(password: string, confirm: string) {
        return (group: FormGroup): {[key: string]: any} => {
            let pw = group.controls[password];
            let confirmPw = group.controls[confirm];
            if (pw.value !== confirmPw.value) {
                return { mismatchedPasswords: true };
            }
        };
    }

}
