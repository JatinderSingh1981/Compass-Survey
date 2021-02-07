import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { HeaderComponent } from '@shared/header';
import { QuestionComponent } from './questions/question.component';
import { QuestionListComponent } from './questions/questionList.component';
import { MultiOptionComponent } from './questions/questionOptions/multiOption.component';

//import { QuestionsRoutingModule } from './questions-routing.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        //QuestionsRoutingModule
    ],
    declarations: [
        // HeaderComponent,
        QuestionComponent,
        QuestionListComponent,
        MultiOptionComponent
    ]
})
export class QuestionsModule { }