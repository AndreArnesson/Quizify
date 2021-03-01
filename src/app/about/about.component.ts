import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
        <div style="font-weight: 700; font-size: 30px;">
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
