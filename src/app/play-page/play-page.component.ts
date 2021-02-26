import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {
  
  isDisabled = false;
  formFilled = true;
  song : any;

  constructor(private sanitizer:DomSanitizer) {
   }

  ngOnInit(): void {
    this.song = {
      url : this.transform("https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3"),
      title: "Highway to hell",
      artist: "Acdc",
    };
  }

  newSong() {
    this.song = {
      url: this.transform("https://open.spotify.com/embed/track/5muJuGZ6vKefxbVHc3y8y8"),
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
  transform(url : any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }



}