import {Component, OnInit} from '@angular/core';
import { QuizService } from '../services/quiz.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-form',
    template: `
        <div>
            <div>
                <h3>Start a new quiz</h3>
            </div>
            <div>
                <form #form="ngForm" (change)="onChange(form)" (ngSubmit)="onSubmit(form)" novalidate>
                    <h6><b>Genres</b></h6>
                    <div #genresGroup="ngModelGroup" ngModelGroup="genres" class="row form-group">
                        <div class="col-3" *ngFor="let item of genres; let i=index">
                            <label>
                                <input type="checkbox"
                                       ngModel name="{{item.value}}" [value]="item.value"
                                />
                                {{item.name}}
                            </label>
                        </div>
                    </div>
                    <h6><b>Decades</b></h6>
                    <div ngModelGroup="decades" class="row">
                        <div class="col-3" *ngFor="let item of decades; let i=index">
                            <label>
                                <input type="checkbox"
                                       ngModel name="{{item.value}}" [value]="item.value"
                                />
                                {{item.name}}
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <h6><b>Difficulty*</b></h6>
                        <select ngModel name="difficulty" #difficulty="ngModel" required>
                            <option *ngFor="let dif of difficulties" [value]="dif.value">{{dif.name}}</option>
                        </select>
                        <div class="alert alert-danger" *ngIf="difficulty.touched && !difficulty.valid">Please choose a difficulty.</div>
                    </div>
                    <input class="btn btn-primary col-md-12" type="submit" value="Start quiz"/>
                </form>
            </div>
        </div>`
})
export class FormComponent implements OnInit {

    decades: Array<any> = [
        {name: '50s', value: 1950},
        {name: '60s', value: 1960},
        {name: '70s', value: 1970},
        {name: '80s', value: 1980},
        {name: '90s', value: 1990},
        {name: '2000s', value: 2000},
        {name: '2010s', value: 2010},
        {name: 'Modern', value: 2020}
    ];

    genres: Array<any> = [
        {name: 'Pop', value: 'pop'},
        {name: 'Hip hop', value: 'hip-hop'},
        {name: 'Rap', value: 'rap'},
        {name: 'Rock\'n\'roll', value: 'rock-n-roll'},
        {name: 'Punk', value: 'punk'},
        {name: 'Metal', value: 'metal'},
        {name: 'EDM', value: 'edm'},
        {name: 'Reggae', value: 'reggae'},
        {name: 'Country', value: 'country'},
        {name: 'Jazz', value: 'jazz'},
        {name: 'Classical', value: 'classical'}
    ];

    difficulties: Array<any> = [
        {name: 'Mainstream hits (80)', value: 80},
        {name: 'Radio mix (60)', value: 60},
        {name: 'Pretentious underground (30)', value: 30},
        {name: 'What? (0)', value: 0}
    ];

    constructor(private router: Router, private quizService: QuizService) {
    }

    ngOnInit(): void {
    }

    onChange(form: any): void {
        console.log(form.value);
    }

    onSubmit(form: any): void {
        if (form.valid) {
            const quizParams = form.value;
            this.quizService.setQuizParameters(quizParams);
            this.router.navigateByUrl('/play');
        } else {
            alert('Choose difficulty.');
        }

    }

}
