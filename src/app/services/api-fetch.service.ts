import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecResponse} from '../models/RecResponse';

@Injectable({providedIn: 'root'})

export class ApiFetchService {
    /*
    ClientID and ClientSecret provided by Spotify Applicaiton
    */
    private clientId = 'e0c422cc49a04beaad1e5ca4e505a3b0';
    private clientSecret = 'c404bba0bbe240d28f11a4a0c426c79b';

    constructor(private http: HttpClient) {}

    /*
    Uses Spotify API to generate token, needed for future authentication
    */
    async generateToken() {
        const headers = {
            Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const params: URLSearchParams = new URLSearchParams();
        params.set('grant_type', 'client_credentials');
        const body = params.toString();
        return this.http.post('https://accounts.spotify.com/api/token', body, { headers }).toPromise();
    }

    /*
    Uses Spotify API to generate tracks based off of seedGenre and popularity
    */
    async generateRecommendation(token: any, seedGenres: string[], popularity: string, limit: string = '1') {
        const url = 'https://api.spotify.com/v1/recommendations?'
            + '&seed_genres=' + seedGenres
            + '&min_popularity=' + popularity
            + '&limit=' + limit
            + '&market=SE';

        const headers = {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json'
        };
        return this.http.get<RecResponse>(url, { headers }).toPromise();
    }
}
