import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { map } from 'rxjs/operators';

import { OptionsService } from './options.service'

@Injectable({
  providedIn: 'root'
})

export class ApiFetchService {

  //ClientID and ClientSecret provided by Client created on developer.spotify.com
  private client_id: string = 'e0c422cc49a04beaad1e5ca4e505a3b0'
  private client_secret: string = 'c404bba0bbe240d28f11a4a0c426c79b'
  //Two most commonly used URLs when quering the Spotify API
  private token_url: string = 'https://accounts.spotify.com/api/token'
  private query_url: string = 'https://api.spotify.com/v1/'
  private token: string = '';

  constructor(private http: HttpClient) { }

  async generateToken() {
    //Spotify API requires Headers: Authorization, Content-Type for token request
    let headers = {
      'Authorization': 'Basic ' + btoa(this.client_id + ":" + this.client_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    //Spotify API requires Data: grant_type for token request
    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials')
    let body = params.toString()
    //Calls angular HTTP POST with url, headers and data from above
    return this.http.post('https://accounts.spotify.com/api/token', body, { headers: headers })
      .toPromise();
  }

  async generateGenre(token: any) {
    //Spotify API requires Headers: Authorization, Content-Type and Accept for genre-request
    let headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    }
    //Calls angular HTTP GET with url and headers from above
    return this.http.get(this.query_url + 'recommendations/available-genre-seeds', { headers: headers })
      .toPromise()
  }

  async generateArtist(token: any) {
    //Spotify API requires Headers: Authorization, Content-Type and Accept for genre-request
    let headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    }
    //Calls angular HTTP GET with url and headers from above
    return this.http.get(this.query_url + 'artists/3eqjTLE0HfPfh78zjh6TqT?si=T7SHFYmJQNyihg0towMHQQ', { headers: headers })
      .toPromise()
  }

  async generateSong(token: any) {
    //Spotify API requires Headers: Authorization, Content-Type and Accept for genre-request
    let headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    }
    //Calls angular HTTP GET with url and headers from above
    return this.http.get(this.query_url + 'tracks/7lPN2DXiMsVn7XUKtOW1CS?si=fbTOTcZcRh291DRWNC3aeQ', { headers: headers })
      .toPromise()
  }

  async generateRecommendation(token: any, seedArtist: string, seedGenre: string, seedSong: string, limit: string, popularity: string) {
    let url = 'reccomendations?'
      + 'seed_artist=' + seedArtist
      + '&seed_genre=' + seedArtist
      + '&seed_song=' + seedSong
      + '&limit=' + limit
      + '&popularity=' + popularity

    let headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    }
    //Calls angular HTTP GET with url and headers from above
    return this.http.get(this.query_url + url, { headers: headers })
      .toPromise()
  }
}
