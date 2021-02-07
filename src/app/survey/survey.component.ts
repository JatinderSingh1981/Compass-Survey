import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { HeaderTitleService, SurveyService } from '@services/index';
import { Survey } from '@models/index';

@Component({ templateUrl: 'survey.component.html' })
export class SurveyComponent implements OnInit {
    surveys!: Survey[];

    constructor(private surveyService: SurveyService, private headerTitleService: HeaderTitleService) { }

    ngOnInit() {
        //this.alertService.success('Surveys Page', { keepAfterRouteChange: true, autoClose: false });
        this.headerTitleService.setTitle('Surveys Page');
        this.getSurveys();
    }

    getSurveys() {
        this.surveyService.getAll()
            .pipe(first())
            .subscribe(users => this.surveys = users);
    }

}