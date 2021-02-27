import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pagenotfound',
    template: `
        <div><p>404: Page not found :(</p></div>`
})
export class PageNotFoundComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
