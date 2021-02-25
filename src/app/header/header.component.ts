import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '' +
      '<div>\n' +
      '    <header>\n' +
      '        <nav class="navbar" style="background-color: black">\n' +
      '            <div class="container col-md-8.5">\n' +
      '                <a class="navbar-brand text-white" href="/">Music quiz place</a>\n' +
      '                <ul class="nav">\n' +
      '                    <li class="navbar-item"><a class="nav-link text-white" href="/">Quiz</a></li>\n' +
      '                    <li class="navbar-item"><a class="nav-link text-white" href="/">Boop</a></li>\n' +
      '                    <li class="navbar-item"><a class="nav-link text-white" href="/">About</a></li>\n' +
      '                </ul>\n' +
      '            </div>\n' +
      '        </nav>\n' +
      '    </header>\n' +
      '</div>'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
