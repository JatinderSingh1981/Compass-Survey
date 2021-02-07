import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { HeaderTitleService, SurveyService } from '@appservices';
import { Survey } from '@appmodels';
import { Observable, Subscription } from 'rxjs';

@Component({ templateUrl: 'survey.component.html' })
export class SurveyComponent implements OnInit, OnDestroy {
    readonly pageTitle: string = 'Surveys Page';
    surveys!: Observable<Survey[]>;
    private subscriptions: Subscription;

    constructor(private surveyService: SurveyService,
        private headerTitleService: HeaderTitleService) {
        this.subscriptions = new Subscription();
    }

    ngOnInit() {
        this.headerTitleService.setTitle(this.pageTitle);
        this.getSurveys();
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.subscriptions.unsubscribe();

    }
    getSurveys() {
        this.subscriptions.add(this.surveyService.getAll()
            .pipe(first())
            .subscribe(users => this.surveys = users));
    }

}