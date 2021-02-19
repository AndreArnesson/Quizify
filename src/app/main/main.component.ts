import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private api: ApiFetchService) {
  }

  ngOnInit() {
    this.api.generateToken().then(res => console.log(res))
  }
}
