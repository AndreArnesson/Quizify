import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ApiFetchService} from '../services/api-fetch.service';
import {QuizService} from '../services/quiz.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-play-page',
    templateUrl: './play-page.component.html',
    styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {
    isShow = false;
    song: any;
    hideBtnText = 'Hide answer';
    private popularity = 100;
    private genreSeeds: any;
    correct = 0;
    wrong = 0;
    streak = 0;
    playerAnswer : string = "";
    playerStreak = 0;

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
        this.playerAnswer = "";
        const token: { access_token?: string } = await this.api.generateToken();
        const genreList = this.genreSeeds;
        this.popularity = +this.popularity + popular;
        const newTrack = await this.api.generateRecommendation(token.access_token, genreList, this.popularity.toString(), '1');
        newTrack.tracks.forEach(track => {
            this.song = {
                url: this.transform('https://open.spotify.com/embed/track/' + track.id),
                title: track.name,
                artist: track.artists[0].name
            };
        });
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

    checkAnswer(answer: any){
        
        const song = this.song.title.toLowerCase().split('-')[0].trim();
        if(answer.toLowerCase() === song){
            this.playerAnswer = "rätt svar"
            this.playerStreak++;
        }else{
            this.playerAnswer = "fel svar"
            this.playerStreak =0;
        }
        
        

    }

}
