import {Component, OnInit} from '@angular/core';
import {ApiFetchService} from '../services/api-fetch.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    private genreList: string[] = [];
    // private artistList: string[] = [];
    // private trackList: string[] = [];

    constructor(private api: ApiFetchService) {
    }

    async ngOnInit() {
        const token: { access_token?: string } = await this.api.generateToken();
        this.genreList = ['rock'];
        // this.artistList = ['LHk2OgyTTyWaYVkm0PWgpQ', 'TNI7WdUPS0umd_cRIe6wtA', 'OF08d3N-RPWrnDNQsnEo_Q'];
        // this.trackList = ['3PzsbWSQdLCKDLxn7YZfkM'];
        const list = (await this.api.generateRecommendation(token.access_token, this.genreList, '99', '10'));
        list.tracks.forEach(track => {
            console.log(track.id);
            console.log(track.name);
        });
    }
}
