import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: '' +
      '<div>' +
      '<h3>About</h3>' +
      '<p>We do music quiz!</p>' +
      '</div>'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
