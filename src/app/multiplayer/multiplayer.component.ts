import {Component, OnInit} from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
    selector: 'app-multiplayer',
    templateUrl: './multiplayer.component.html',
    styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit {

    constructor(private quiz: QuizService) {}
    
    players: any;

    ngOnInit(): void {
        this.players = this.quiz.getQuizParameters().players;
    }

    addPoint(index: any): void {
        this.players[index].points++;
    }

    removePoint(index: any): void {
        if (this.players[index].points > 0) {
            this.players[index].points--;
        }
    }
}
