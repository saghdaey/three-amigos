import { Component, OnInit, Input } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from '@angular/router';
import { Globals } from './../globals';;

@Component({
    selector: 'match-tile',
    // styleUrls: [ './login.component.less' ],
    templateUrl: './matches-tile.component.html'
})
export class MatchesTileComponent implements OnInit {
    @Input() match=null;
    constructor(private globals: Globals, private router: Router) {
    }

    public ngOnInit() {

    }

}
