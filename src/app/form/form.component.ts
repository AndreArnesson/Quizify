import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: '' +
      '<div>\n' +
      '    <div>\n' +
      '        <h3>Start a new quiz</h3>\n' +
      '    </div>\n' +
      '    <div>\n' +
      '        <form>\n' +
      '            <div class="form-group">\n' +
      '                <h6><b>Genre</b></h6>\n' +
      '                <input type="checkbox" />\n' +
      '            </div>\n' +
      '            <div class="form-group">\n' +
      '                <h6><b>Epoque</b></h6>\n' +
      '                <input type="checkbox" />\n' +
      '            </div>\n' +
      '            <div class="form-group">\n' +
      '                <h6><b>Difficulty</b></h6>\n' +
      '                <select></select>\n' +
      '            </div>\n' +
      '            <input class="btn btn-primary col-md-12" type="submit" value="Start quiz"/>\n' +
      '        </form>\n' +
      '    </div>\n' +
      '</div>'
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
