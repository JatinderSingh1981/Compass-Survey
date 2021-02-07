import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from '@app/survey';
//import { QuestionListComponent } from '@app/survey/questions/questionList.component';
const surveyModule = () => import('@app/survey/survey.module').then(x => x.SurveyModule);
const routes: Routes = [
    { path: '', component: SurveyComponent },
    //{ path: ':id/:name', component: QuestionListComponent },

    //Instead of the following, I can easily uncomment the above line
    //This was not required here since we just have 2 modules 
    //so its not going to make any major impact on the application
    { path: ':id/:name', loadChildren: surveyModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
