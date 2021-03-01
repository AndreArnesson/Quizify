import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiFetchService } from '../services/api-fetch.service';
import { QuizService} from '../services/quiz.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-play-page',
    templateUrl: './play-page.component.html',
    styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {

    isDisabled = false;
    formFilled = false;
    song: any;
    private popularity = 100;
    private genreSeeds: any;

    constructor(private sanitizer: DomSanitizer,
                private api: ApiFetchService,
                private quizService: QuizService,
                private router: Router) {}

    ngOnInit(): void {
        const quizParams = this.quizService.getQuizParameters();
        if (quizParams) {
            this.formFilled = true;
            this.popularity = quizParams.difficulty;
            this.genreSeeds = Object.keys(quizParams.genres).filter((genre: string) => quizParams.genres[genre]);
            this.generateTrack();
        } else {
            this.router.navigateByUrl('/quiz');
        }
    }

    async generateTrack() {
        const token: { access_token?: string } = await this.api.generateToken();
        const genreList = this.genreSeeds;
        const newTrack = await this.api.generateRecommendation(token.access_token, genreList, this.popularity.toString(), '1');
        newTrack.tracks.forEach(track => {
            this.song = {
                url: this.transform('https://open.spotify.com/embed/track/' + track.id),
                title: track.name,
                artist: track.artists[0].name
            };
        });
        //this.popularity = (this.popularity - 10);
        console.log(this.popularity);

    }

    // generateNewParameters(): void {}

    correctAnswer(event: any): void {
        this.generateTrack();
    }

    wrongAnswer(event: any): void {
        this.generateTrack();
    }

    transform(url: any): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
