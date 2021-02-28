import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiFetchService } from '../services/api-fetch.service'

@Component({
    selector: 'app-play-page',
    templateUrl: './play-page.component.html',
    styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {

    isDisabled = false;
    formFilled = true;
    song: any;
    private poplarity: number = 100

    constructor(private sanitizer: DomSanitizer, private api: ApiFetchService) {
    }

    ngOnInit(): void {
        this.song = {
            url: this.transform('https://open.spotify.com/embed/track/2zYzyRzz6pRmhPzyfMEC8s'),
            title: 'Highway to hell',
            artist: 'Acdc',
        };
    }

    async generateTrack() {
        let token: { access_token?: string } = await this.api.generateToken()
        let genreList = ['rock']
        let artistList = ['LHk2OgyTTyWaYVkm0PWgpQ', 'TNI7WdUPS0umd_cRIe6wtA', 'OF08d3N-RPWrnDNQsnEo_Q']
        let trackList = ['3PzsbWSQdLCKDLxn7YZfkM']
        let newTrack = await this.api.generateRecommendation(token.access_token, genreList, artistList, trackList, this.poplarity.toString(), '1')
        newTrack.tracks.forEach(track => {
            this.song = {
                url: this.transform('https://open.spotify.com/embed/track/' + track.id),
                title: track.name,
                artist: track.artists[0].name
            }
        })
        this.poplarity = (this.poplarity - 10)
        console.log(this.poplarity);

    }

    generateNewParameters() {

    }

    correctAnswer(event: any): void {
        console.log(event);
        this.isDisabled = true;
    }

    wrongAnswer(event: any): void {
        console.log(event);
        this.isDisabled = true;
    }

    transform(url: any): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
