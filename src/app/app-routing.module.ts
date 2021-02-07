import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from '@app/survey';
import { QuestionListComponent } from '@app/survey/questions/questionList.component';
const routes: Routes = [
    { path: '', component: SurveyComponent },
    { path: ':id/:name', component: QuestionListComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
