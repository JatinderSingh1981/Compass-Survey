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
    
    //Instead of using the publisher and subscriber method, 
    //I can simply use promise which gives me result just 1 time and that's it. 
    //No overhead of maintaining the subscription and worry about memory leaks
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