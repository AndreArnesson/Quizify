import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-checkbox-group',
    template: `
        <div class="row">
            <div class="col-3" *ngFor="let item of data[0]; let i=index">
                <label formArrayName="{{data[1]}}">
                    <input type="checkbox" formControlName="{{i}}" [value]="item.value"/>
                    {{item.name}}
                </label>
            </div>
        </div>
    `
})
export class CheckboxGroupComponent implements OnInit {

    @Input() data: Array<any>;

    constructor() {
        this.data = [];
    }

    ngOnInit(): void {
    }

}
