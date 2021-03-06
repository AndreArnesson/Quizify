import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class QuizService {
    private quizParameters: any;
    private players: any

    constructor() {}

    setQuizParameters(params: any, players : any): void {
        this.quizParameters = params;
        this.players = players;
    }

    getQuizParameters(): any {
        return this.quizParameters;
    }

    getPlayers(): any {
        return this.players;
    }
}
