import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from '@angular/router';
import { Globals } from './../globals';;

@Component({
    selector: 'matches',
    styleUrls: [ './matches.less' ],
    templateUrl: './matches.component.html'
})
export class MatchesComponent implements OnInit {
    private matches;
    constructor(private globals: Globals, private router: Router) {
    }

    public ngOnInit() {
        this.matches=[
            {
                firstName:"Peter",
                zipcode:"22202",
                services_offered:"I offer English tutoring and transportation services.",
                about:"I'm Peter and I'm a DMV native. I used to study Arabic in college and studied abroad in Beirut, where I fell in love with Middle Eastern food. I would love the opportunity for a language exchange. I am ashamed at my president's rhetoric on immigrants and I would like to show my neighbors a different USA.",
            }
        ]
    }

}
