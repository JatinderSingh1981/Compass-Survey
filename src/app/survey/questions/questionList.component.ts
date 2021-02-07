import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { HeaderTitleService, QuestionService } from '@services/index';
import { Question, QuestionType } from '@models/index';
import { ActivatedRoute } from '@angular/router';

@Component({ templateUrl: 'questionList.component.html' })
export class QuestionListComponent implements OnInit {
    questions!: Question[];
    name!: string;
    public QuestionTypeEnum = QuestionType; 
    // id!: number;
    constructor(private route: ActivatedRoute,
        private questionService: QuestionService,
        private headerTitleService: HeaderTitleService) { }

    ngOnInit() {
        //Check if params contain these values
        this.headerTitleService.setTitle('Survey Questions Page');
        let id = this.route.snapshot.params['id'];
        this.name = this.route.snapshot.params['name'];
        if (id > 0) {
            this.getQuestionsBySurveyId(id);
        }
    }

    getQuestionsBySurveyId(id: number) {
        this.questionService.getQuestionBySurveyId(id)
            .pipe(first())
            .subscribe(questions => this.questions = questions);
    }
    // deleteUser(id: string) {
    //     const user = this.users.find(x => x.id === id);
    //     if (!user) return;
    //     user.isDeleting = true;
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    // }
}