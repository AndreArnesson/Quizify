import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class QuizService {
    private quizParameters: any;

    constructor() {}

    setQuizParameters(params: any): void {
        this.quizParameters = params;
    }

    getQuizParameters(): any {
        return this.quizParameters;
    }
}
