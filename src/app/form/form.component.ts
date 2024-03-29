import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
    genres: Array<any> = [
        { name: 'POP', value: 'pop' },
        { name: 'HIP HOP', value: 'hip-hop' },
        { name: 'ROCK', value: 'rock-n-roll' },
        { name: 'PUNK', value: 'punk' },
        { name: 'METAL', value: 'metal' },
        { name: 'EDM', value: 'edm' },
        { name: 'MOVIES', value: 'movies' },
        { name: 'COUNTRY', value: 'country' },
        { name: 'JAZZ', value: 'jazz' },
        { name: 'CLASSICAL', value: 'classical' }
    ];

    difficulties: Array<any> = [
        { name: 'Easy (80)', value: 80 },
        { name: 'Medium (60)', value: 60 },
        { name: 'Hard (30)', value: 30 },
        { name: 'Expert (0)', value: 0 }
    ];

    checkedNumber = 0;
    checkedLimit = 5;
    isDisabled = false;
    enoughBoxesTicked = false;
    players = Array<any>();

    constructor(private router: Router, private quizService: QuizService) {
    }

    ngOnInit(): void { }

    onChange(form: any): void {
        let counter = 0;
        for (const [key, value] of Object.entries(form.value.genres)) {
            if ((value === true)) {
                counter++;
            }
        }
        this.enoughBoxesTicked = counter > 0 && counter < 6;
    }

    onClickHandler(event: Event, item: any): void {
        if (item.checked) {
            if (this.checkedNumber + 1 > this.checkedLimit) {
                event.preventDefault();
            } else {
                this.checkedNumber += 1;
            }
        } else {
            this.checkedNumber -= 1;
        }
    }

    onSubmitPlayer(form: any): void {
        if (form.valid) {
            this.players.push({ name: form.value.players, points: 0 });
            form.reset();
        }
    }

    onSubmit(form: any): void {
        if (form.valid) {
            const quizParams = form.value;
            let url = 'play/singleplayer';
            if (this.players.length > 0) {
                quizParams.players = this.players;
                url = 'play/multiplayer';
            }
            this.quizService.setQuizParameters(quizParams);
            this.router.navigateByUrl(url);
        }
    }
}
