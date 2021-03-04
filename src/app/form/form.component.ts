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
        { name: 'Pop', value: 'pop' },
        { name: 'Hip hop', value: 'hip-hop' },
        { name: 'Rap', value: 'rap' },
        { name: 'Rock\'n\'roll', value: 'rock-n-roll' },
        { name: 'Punk', value: 'punk' },
        { name: 'Metal', value: 'metal' },
        { name: 'EDM', value: 'edm' },
        { name: 'Reggae', value: 'reggae' },
        { name: 'Country', value: 'country' },
        { name: 'Jazz', value: 'jazz' },
        { name: 'Classical', value: 'classical' }
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

    constructor(private router: Router, private quizService: QuizService) {
    }

    ngOnInit(): void {
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
        //if (form.valid) {
        if (true) {
            const quizParams = form.value;
            this.quizService.setQuizParameters(quizParams);
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
}
