import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';
import { RegistrationService, ValidationService } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reject } from 'q';

@Component({
    selector: 'register',
    styleUrls: [ './registration.component.less' ],
    // make sure control-messages.component is created and referenced in app.module.ts when using this template
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
    public signUpForm: FormGroup;
    public signupError: string;
    constructor(private fb: FormBuilder,  private registration: RegistrationService) {
        // create the form's validators.
        // nb: synchronous validators (including custom - see emailValidator) get grouped together
        // extra validators, for example one testing two fields, come after the group declaration.
        // theoretically, you could also declare asynchronous validators here. I did not get that to work.
        this.signUpForm = fb.group({
            'name': ['', Validators.required],
            'email': ['', [Validators.required, ValidationService.emailValidator]],
            'password': ['', [Validators.required, Validators.minLength(8)]],
            'password-confirmation': ['', [Validators.required, Validators.minLength(8)]],
            'telephone': ['']
        }, {validator: this.matchingPasswords('password', 'password-confirmation')});
    }

    public ngOnInit() {

    }

    // this is where you'd have the form actually do something, like call your registration service
    // (ideally after you've made doubly sure that the form is valid)
    public signUp() {
        return true;
    }

    // get the desired control and check that it's valid (in this case, passes the "emailValidator" test
    // so we're not sending known bad values to the web service
    public checkUserName() {
        let control = this.signUpForm.controls['email'];
        if (control.valid) {
            let uNameVerify = control.value;
            // call your remote service. this can be asynchronous because
            // it will set the error message when the result finally returns.
            // adding this error also disables the signup button, because adding an error to the control
            // invalidates its parent's form.
            this.registration.checkUserName(uNameVerify).subscribe(
                (data) => {
                    // if the service returns a value when the username is matched, add the form error here
                    control.setErrors({ checkUser: true });
                },
                (error) => {
                    if (error.status !== 404) {
                        // returned an error that is not "not found" - this should mean username is taken
                        // this is another strategy for checking validity of a username
                        control.setErrors({ checkUser: true });
                    }
                }
            );
        }
    }

    // pass both controls to this method, add the new error to the form this way:
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
