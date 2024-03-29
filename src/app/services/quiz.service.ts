import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class QuizService {
    private quizParameters: any;
    private song: any;

    constructor() {}

    setQuizParameters(params: any): void {
        this.quizParameters = params;
    }

    getQuizParameters(): any {
        return this.quizParameters;
    }

    setSong(song: any): void {
        this.song = song;
    }

    getSong(): any {
        return this.song;
    }
}
