import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template:
        //Vem fan skriver inline html i angular? Den personen behöver spirituell hjälp. Ring mig vid besvär, vi kan ta ett samtal om saker och ting. Se vad som orsakar felet där inne.
        `
        <div>
            <header>
                <nav class="navbar" style="background-color: rgba(0,0,0,0.15); font-weight:700">
                    <div class="container-fluid" style="max-width: 1150px">
                        <a class="navbar-brand text-white">Spotify Song Quiz</a>
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
