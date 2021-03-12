import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template:
        `
        <div>
            <header>
                <nav class="navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand">Spotify Song Quiz</a>
                        <ul class="nav">
                            <li class="navbar-item"><a class="nav-link text-white" routerLink="/quiz">New Quiz</a></li>
                            <li class="navbar-item"><a class="nav-link text-white" routerLink="/about">About page</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    `,
    styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }


}
