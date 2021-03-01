import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div>
            <header>
                <nav class="navbar" style="background-color: black">
                    <div class="container col-md-12">
                        <a class="navbar-brand text-white">Spotify Song Quiz</a>
                        <ul class="nav">
                            <li class="navbar-item"><a class="nav-link text-white" routerLink="/quiz">New Quiz</a></li>
                            <li class="navbar-item"><a class="nav-link text-white" routerLink="/about">About page</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    `

})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }


}
