import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider, ErrorInterceptor } from '@helpers/index';
import { AppComponent } from './app.component';
import { AlertComponent } from '@shared/alert';
import { HeaderComponent } from '@shared/header';
import { SurveyComponent } from '@app/survey/survey.component';
import { QuestionsModule } from '@app/survey/survey.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        QuestionsModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HeaderComponent,
        SurveyComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
