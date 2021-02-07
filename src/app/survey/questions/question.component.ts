import { Component, Input } from '@angular/core';
import { Question } from '@appmodels';

@Component({
    selector: 'app-question',
    templateUrl: 'question.component.html'
})
export class QuestionComponent {
    private question!: Question;
    private _title!: string;

    @Input()
    set selectedQuestion(selected: Question) { this.question = selected; }
    get selectedQuestion(): Question { return this.question; }

    @Input()
    set title(selected: string) { this._title = selected };
    get title(): string { return this._title };
}