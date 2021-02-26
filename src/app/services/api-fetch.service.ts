import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecResponse } from '../models/RecResponse'

@Injectable({ providedIn: 'root' })

export class ApiFetchService {
  private client_id: string = 'e0c422cc49a04beaad1e5ca4e505a3b0'
  private client_secret: string = 'c404bba0bbe240d28f11a4a0c426c79b'

  constructor(private http: HttpClient) { }

  async generateToken() {
    let headers = {
      'Authorization': 'Basic ' + btoa(this.client_id + ":" + this.client_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials')
    let body = params.toString()
    return this.http.post('https://accounts.spotify.com/api/token', body, { headers: headers }).toPromise()
  }

  async generateRecommendation(token: any, seedGenres: string[], seedArtists: string[], seedTracks: string[], popularity: string, limit: string) {
    let url = 'https://api.spotify.com/v1/recommendations?'
      + '&seed_genres=' + seedGenres
      + 'seed_artists=' + seedArtists
      + '&seed_tracks=' + seedTracks
      + '&target_popularity=' + popularity
      + '&limit=' + limit
      + '&market=SE';

    let headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    }
    return this.http.get<RecResponse>(url, { headers: headers }).toPromise()
  }
}
