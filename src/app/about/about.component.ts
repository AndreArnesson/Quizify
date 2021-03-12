import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
        <div class="title_text">
            About
        </div>
      <p>We do music quiz!</p>
    </div>
  `


})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
