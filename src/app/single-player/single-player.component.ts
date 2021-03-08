import {Component, OnInit} from '@angular/core';
import { QuizService} from '../services/quiz.service';

@Component({
    selector: 'app-single-player',
    templateUrl: './single-player.component.html',
    styleUrls: ['./single-player.component.css']
})
export class SinglePlayerComponent implements OnInit {

    song: any;
    correct = 0;
    streak = 0;
    playerAnswer = '';
    playerStreak = 0;

    constructor(private quiz: QuizService) {}

    ngOnInit(): void {
    }

    checkAnswer(answer: any): void {
        this.song = this.quiz.getSong();
        const songName = this.song.title.toLowerCase().split('-')[0].split('(')[0].trim();

        if (answer.toLowerCase() === songName) {
            this.playerAnswer = 'rätt svar';
            this.playerStreak++;
            // setTimeout(() => { this.correctAnswer() }, 2000);
        } else {
            this.playerAnswer = 'fel svar';
            this.playerStreak = 0;
            // setTimeout(() => { this.wrongAnswer() }, 2000);

        }
    }

}
