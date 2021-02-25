import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
       <div>
          <footer class="footer h-100">
            <p class="text-white">Thank you :)</p>
          </footer>
       </div>
    `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
