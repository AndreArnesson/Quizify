import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'spotify-api';

    constructor(private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.title = params.name;
        });
    }
}
