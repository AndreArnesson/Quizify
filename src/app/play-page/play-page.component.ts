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

  constructor() { }

  ngOnInit(): void {
  }

  newSong() {
    this.song = {
      img: "https://placeimg.com/300/300/animals",
      title: "Kinesiska muren",
      artist: "Evert Taube",
    }


  }
}