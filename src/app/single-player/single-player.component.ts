import { Component, Injector, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { PlayPageComponent } from '../play-page/play-page.component';

@Component({
    selector: 'app-single-player',
    templateUrl: './single-player.component.html',
    styleUrls: ['./single-player.component.css']
})
export class SinglePlayerComponent implements OnInit {

    playerAnswer: string = '';
    playerStreak: number = 0;
    parentComponent: any;


    constructor(private quiz: QuizService, private injector: Injector) {
        this.parentComponent = this.injector.get(PlayPageComponent);
    }

    ngOnInit(): void {
        this.parentComponent.hideAnswer();
    }

    checkAnswer(answer: any): void {
        let song = this.quiz.getSong();
        const songName = song.title.toLowerCase().split('-')[0].split('(')[0].trim();

        if (answer.toLowerCase() === songName) {
            this.playerAnswer = 'Correct';
            this.playerStreak++;
            setTimeout(() => { this.parentComponent.changeDif(-3) }, 2000);
        } else {
            this.playerAnswer = 'Incorrect';
            this.playerStreak = 0;
            this.parentComponent.isShow = false;
            setTimeout(() => this.parentComponent.isShow = true, 1900);
            setTimeout(() => { this.parentComponent.changeDif(3) }, 2000);
        }
        setTimeout(() => this.playerAnswer = '', 1900);
    }

}
