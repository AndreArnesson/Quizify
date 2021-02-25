import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-form',
    template: `
        <div>
            <div>
                <h3>Start a new quiz</h3>
            </div>
            <div>
                <form [formGroup]="form" novalidate>
                    <div class="form-group">
                        <h6><b>Genre</b></h6>
                        <input type="checkbox"/>
                    </div>
                    <h6><b>Eras</b></h6>
                    <div *ngFor="let data of Data; let i=index">
                        <label>
                            <input type="checkbox" [value]="data.value" />
                            {{data.name}}
                        </label>
                    </div>
                    <div class="form-group">
                        <h6><b>Difficulty</b></h6>
                        <select></select>
                    </div>
                    <input class="btn btn-primary col-md-12" type="submit" value="Start quiz"/>
                </form>
            </div>
        </div>`
})
export class FormComponent implements OnInit {

    Data: Array<any> = [
        {name: '50s', value: 1950},
        {name: '60s', value: 1960},
        {name: '70s', value: 1970},
        {name: '80s', value: 1980},
        {name: '90s', value: 1990},
        {name: '2000s', value: 2000},
        {name: '2010s', value: 2010},
        {name: 'Modern', value: 2020}
    ];

    form: FormGroup;

    genres = ['Pop', 'Hip Hop', 'Rap', 'Rock', 'Classical', 'Punk']; // should be fetched from Spotify API

    submitted = false;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            checkArray: this.fb.array([])
        });
    }

    /*onCheckboxChange(e) {
        const checkArray: FormArray = this.form.get('checkArray') as FormArray;

        if (e.target.checked) {
            checkArray.push(new FormControl(e.target.value));
        } else {
            let i: number = 0;
            checkArray.controls.forEach((item: FormControl) => {
                if (item.value == e.target.value) {
                    checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }

    onSubmit() {
    }*/

    ngOnInit(): void {
    }

}
