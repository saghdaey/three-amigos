import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'needed-services',
    // styleUrls: [ './login.component.less' ],
    templateUrl: './need_services.component.html'
})
export class LoginComponent implements OnInit {
    public neededServices: FormGroup;
    constructor(private fb: FormBuilder) {
        this.neededServices = fb.group({
            'service1': ['', [Validators.required]],
            'service2': ['', [Validators.required]]
        });
    }

    public ngOnInit() {
    }

    public assignNeededServices(){

    }

}
