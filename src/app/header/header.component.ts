import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <div>
        <header>
          <nav class="navbar" style="background-color: black">
            <div class="container col-md-8.5">
              <a class="navbar-brand text-white">Music quiz place</a>
              <ul class="nav">
                  <li class="navbar-item"><a class="nav-link text-white" routerLink="/quiz">Quiz</a></li>
                  <li class="navbar-item"><a class="nav-link text-white" href="/">Boop</a></li>
                  <li class="navbar-item"><a class="nav-link text-white" routerLink="/about">About</a></li>
                </ul>
            </div>
          </nav>
        </header>
      </div>
      `

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
