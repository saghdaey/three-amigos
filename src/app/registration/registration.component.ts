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
    public basicInfoForm: FormGroup;
    public userType: String;
    constructor(private fb: FormBuilder,  private registration: RegistrationService, private globals: Globals) {
    }

    public ngOnInit() {
    }

    public displayBasicInfoForm():void{
        this.basicInfoForm = this.fb.group({
            'first_name': ['', Validators.required],
            'last_name': ['', Validators.required],
            'email': ['', [Validators.required, ValidationService.emailValidator]],
            'telephone': [''],
            'zipcode': ['', Validators.required],
            'password': ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    public signUp() {
        let user_info=this.basicInfoForm.value;
        user_info["type"]=this.userType;
        this.globals.setUser(user_info);
        //navigate to next screen
        return true;
    }

    assignUserType(value):void{
        this.userType=value;;
        this.displayBasicInfoForm();
    }


}
