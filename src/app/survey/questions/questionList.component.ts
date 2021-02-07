import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { HeaderTitleService, QuestionService } from '@appservices';
import { Question, QuestionType } from '@appmodels';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({ templateUrl: 'questionList.component.html' })
export class QuestionListComponent implements OnInit, OnDestroy {
    readonly pageTitle: string = 'Survey Questions Page';
    questions!: Observable<Question[]>;
    name!: string;
    public QuestionTypeEnum = QuestionType;
    private subscriptions: Subscription;

    constructor(private route: ActivatedRoute,
        private questionService: QuestionService,
        private headerTitleService: HeaderTitleService) { 
            this.subscriptions = new Subscription();
        }

    ngOnInit() {

        this.headerTitleService.setTitle(this.pageTitle);
        let id = this.route.snapshot.params['id'];
        this.name = this.route.snapshot.params['name'];

        if (id && id > 0) {
            this.getQuestionsBySurveyId(id);
        }
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.subscriptions.unsubscribe();

    }
    getQuestionsBySurveyId(id: number) {
        this.subscriptions.add(this.questionService.getQuestionListBySurveyId(id)
            .pipe(first())
            .subscribe(questions => this.questions = questions));
    }

}