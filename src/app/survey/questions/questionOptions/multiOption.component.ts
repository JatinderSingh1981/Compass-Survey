import { Component, Input } from '@angular/core';
import { SQOption } from 'appmodels';

@Component(
    {
        selector: 'multiOption-component',
        templateUrl: 'multiOption.component.html'
    })
export class MultiOptionComponent {
    private sqOption!: SQOption;

    @Input()
    set selectedOption(selected: SQOption) { this.sqOption = selected; }
    get selectedOption(): SQOption { return this.sqOption; }
}