import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { mockBackendProvider, ErrorInterceptor } from '@apphelpers';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@shared/header';
import { SurveyComponent } from '@app/survey/survey.component';
import { SurveyModule } from '@app/survey/survey.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        SurveyModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SurveyComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        mockBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
