import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuestionComponent } from './questions/question.component';
import { QuestionListComponent } from './questions/questionList.component';
import { MultiOptionComponent } from './questions/questionOptions/multiOption.component';

import { SurveyRoutingModule } from './survey-routing.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SurveyRoutingModule
    ],
    declarations: [
        QuestionComponent,
        QuestionListComponent,
        MultiOptionComponent
    ]
})
export class SurveyModule { }