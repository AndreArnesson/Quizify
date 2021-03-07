import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagenotfound',
    template: `
        <div><p>Du är lika lost som hulken i backen</p></div>
        <img src='../assets/lost.png' width='1000px'>`
})
export class PageNotFoundComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
