import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from '@app/survey/questions/questionList.component';
const routes: Routes = [
    {
        path: '', component: QuestionListComponent,
        //There are no child routes here
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SurveyRoutingModule { }