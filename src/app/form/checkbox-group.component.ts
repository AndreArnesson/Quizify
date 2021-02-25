import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-checkbox-group',
    template: `
        <div class="row">
            <div class="col-4" *ngFor="let item of data; let i=index">
                <label>
                    <input type="checkbox" [value]="item.value"/>
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
