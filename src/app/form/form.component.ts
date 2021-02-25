import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-form',
    template: `
        <div>
            <div>
                <h3>Start a new quiz</h3>
            </div>
            <div>
                <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
                    <h6><b>Genres</b></h6>
                    <app-checkbox-group [data]="genres"></app-checkbox-group>
                    <h6><b>Decades</b></h6>
                    <app-checkbox-group [data]="decades"></app-checkbox-group>
                    <div class="form-group">
                        <h6><b>Difficulty</b></h6>
                        <select>
                            <option *ngFor="let dif of difficulties" [value]="dif.value">{{dif.name}}</option>
                        </select>
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
        {name: 'Hip hop', value: 'hiphop'},
        {name: 'Rap', value: 'rap'},
        {name: 'Rock', value: 'rock'},
        {name: 'Punk', value: 'punk'},
        {name: 'Classical', value: 'classic'}
    ];

    difficulties: Array<any> = [
        {name: 'Mainstream hits', value: 1},
        {name: 'Radio mix', value: 2},
        {name: 'Tame Impala', value: 3},
        {name: 'Pretentious underground', value: 4},
        {name: 'What?', value: 5},
    ];

    form: FormGroup;

    submitted = false;

    constructor(private fb: FormBuilder, private router: Router) {
        this.form = this.fb.group({
            checkArray: this.fb.array([])
        });
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.router.navigateByUrl('/play');
    }

}
