import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { RegistrationService, ValidationService, LoginService } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    // styleUrls: [ './login.component.less' ],
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    private errorMessage:String;
    constructor(private fb: FormBuilder,  private globals: Globals, private loginService: LoginService, private router: Router) {
        this.loginForm = fb.group({
            'email': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });
    }

    public ngOnInit() {
    }

    public login() {
        this.loginService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(data=>{
            this.globals.setUser(data);
            this.router.navigate(['./matches']);
        });
        return true;
    }

}
