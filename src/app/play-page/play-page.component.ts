import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiFetchService } from '../services/api-fetch.service';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-play-page',
    templateUrl: './play-page.component.html',
    styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {
    isShow = false;
    song: any;
    hideBtnText = 'Hide answer';
    previousSongs: string[] = [];
    private popularity = 100;
    private genreSeeds: any;

    constructor(private sanitizer: DomSanitizer,
        private api: ApiFetchService,
        private quizService: QuizService,
        private router: Router) {
    }

    ngOnInit(): void {
        const quizParams = this.quizService.getQuizParameters();
        if (quizParams) {
            this.popularity = quizParams.difficulty;
            this.genreSeeds = Object.keys(quizParams.genres).filter((genre: string) => quizParams.genres[genre]);
            this.generateTrack(0);
        } else {
            this.router.navigateByUrl('/quiz');
        }
    }

    async generateTrack(popular: number) {

        const token: { access_token?: string } = await this.api.generateToken();
        const genreList = this.genreSeeds;
        this.popularity = +this.popularity + popular;

        const newTrack = await this.api.generateRecommendation(token.access_token, genreList, this.popularity.toString(), '1');
        if (newTrack.tracks.length > 0) {
            newTrack.tracks.forEach(track => {
                if (this.checkIfNotPlayed(track.id)) {
                    this.song = {
                        url: this.transform('https://open.spotify.com/embed/track/' + track.id),
                        title: track.name,
                        artist: track.artists[0].name
                    };
                    this.previousSongs.push(track.id);

                    this.quizService.setSong(this.song);
                } else {
                    this.generateTrack(-3);
                }
            });
        } else {
            this.generateTrack(-3);
        }
    }

    correctAnswer(): void {
        this.generateTrack(-3);
    }

    wrongAnswer(): void {
        this.generateTrack(3);
    }

    transform(url: any): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    hideAnswer(): void {
        this.isShow = !this.isShow;
        this.isShow ? this.hideBtnText = 'Show answer' : this.hideBtnText = 'Hide answer';
    }

    checkIfNotPlayed(song: any) {
        return !this.previousSongs.includes(song);
    }
}
