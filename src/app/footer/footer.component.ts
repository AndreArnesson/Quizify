import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '' +
      '<div>\n' +
      '    <footer class="footer h-100">\n' +
      '        <p class="text-white">Thank you :)</p>\n' +
      '    </footer>\n' +
      '</div>'
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
