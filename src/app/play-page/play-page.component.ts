import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {
  song = {
    img: "https://placeimg.com/300/300/animals",
    title: "Highway to hell",
    artist: "Acdc",
  };
  isDisabled = false;
  formFilled = true;

  constructor() { }

  ngOnInit(): void {
  }

  newSong() {
    this.song = {
      img: "https://placeimg.com/300/300/any",
      title: "Kinesiska muren",
      artist: "Evert Taube",
    }
    this.isDisabled= false;
  }
  correctAnswer(event: any) {
    console.log(event);
    this.isDisabled = true;
  }
  wrongAnswer(event: any) {
    console.log(event)
    this.isDisabled = true;
  }



}