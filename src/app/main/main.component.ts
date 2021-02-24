import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private token: String = ''
  private genreList: String = ''

  constructor(private api: ApiFetchService) {
  }

  async ngOnInit() {
    let token: { access_token?: string } = await this.api.generateToken()

    let genre = await this.api.generateGenre(token.access_token)
    let artist = await this.api.generateArtist(token.access_token)
    let song = await this.api.generateSong(token.access_token)

    console.log(genre)
    console.log(artist)
    console.log(song)

    //let recommendation = await this.api.generateRecommendation(token.access_token, artist, genre, song, '10', '100')
  }
}
