import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';
import { RegistrationService, ValidationService } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    // styleUrls: [ './login.component.less' ],
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    constructor(private fb: FormBuilder,  private registration: RegistrationService) {
        this.loginForm = fb.group({
            'email': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });
    }

    public ngOnInit() {
    }

    public login() {
        console.log(this.loginForm.value);
        return true;
    }

}
