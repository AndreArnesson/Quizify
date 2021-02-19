import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { map } from 'rxjs/operators';

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

  generateToken() {
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
      .toPromise().then(res => JSON.stringify(res))
  }

  printToken() {
    console.log(this.token)
  }

  generateGenre(token: string) {
    //Spotify API requires Headers: Authorization, Content-Type and Accept for genre-request
    let headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
    //Calls angular HTTP GET with url and headers from above
    this.http.get(this.query_url + 'recommendations/available-genre-seeds', { headers: headers })
      .toPromise()
      .then(res => console.log(res))
  }
}
