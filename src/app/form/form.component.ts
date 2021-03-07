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
        { name: 'RAP', value: 'rap' },
        { name: 'ROCK\'N\'ROLL', value: 'rock-n-roll' },
        { name: 'PUNK', value: 'punk' },
        { name: 'METAL', value: 'metal' },
        { name: 'EDM', value: 'edm' },
        { name: 'COUNTRY', value: 'country' },
        { name: 'JAZZ', value: 'jazz' },
        { name: 'CLASSICAL', value: 'classical' }
    ];

    difficulties: Array<any> = [
        { name: 'Mainstream hits (80)', value: 80 },
        { name: 'Radio mix (60)', value: 60 },
        { name: 'Pretentious underground (30)', value: 30 },
        { name: 'What? (0)', value: 0 }
    ];

    checkedNumber: number = 0;
    checkedLimit: number = 5;
    isDisabled: boolean = false;
    enoughBoxesTicked: boolean = false;
    players: any = [{}];

    constructor(private router: Router, private quizService: QuizService) {
    }

    ngOnInit(): void {
        this.players = this.players.filter((value: {}) => Object.keys(value).length !== 0); //fattar inte varför jag ska behöva göra så här
    }

    onChange(form: any): void {
        let counter = 0;
        for (const [key, value] of Object.entries(form.value.genres)) {
            if ((value === true)) {
                counter++;
            }
        }
        this.enoughBoxesTicked = counter > 0 && counter < 6 ? true : false;
    }

    onSubmit(form: any): void {
        if (form.valid) {
            const quizParams = form.value;
            this.quizService.setQuizParameters(quizParams, this.players);
            this.router.navigateByUrl('/play');
        } else {
            alert('Choose difficulty');
        }
    }

    onClickHandler(event: Event, item: any) {
        if (item.checked) {
            if (this.checkedNumber + 1 > this.checkedLimit) {
                event.preventDefault()
            } else {
                this.checkedNumber += 1;
            }
        } else {
            this.checkedNumber -= 1;
        }
    }

    addPlayer(value: any) {
        if (value != "") {
            this.players.push({ name: value, points: 0 })
        }
    }
}
