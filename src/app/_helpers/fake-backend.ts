import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { QuestionType, Survey, Question, SQOption } from 'appmodels';

let sqOptions: SQOption[] = [
    {
        id: 1,
        questionId: 53,
        text: "1",
        isSelected: false
    },
    {
        id: 2,
        questionId: 53,
        text: "3",
        isSelected: false
    },
    {
        id: 3,
        questionId: 53,
        text: "18",
        isSelected: false
    },

    {
        id: 4,
        questionId: 72,
        text: "one",
        isSelected: false
    },
    {
        id: 5,
        questionId: 72,
        text: "two",
        isSelected: false
    },
    {
        id: 6,
        questionId: 72,
        text: "Three thousand three hundred eighty-seven",
        isSelected: false
    },


    {
        id: 7,
        questionId: 34,
        text: "10°",
        isSelected: false
    },
    {
        id: 8,
        questionId: 34,
        text: "20°",
        isSelected: false
    },
    {
        id: 9,
        questionId: 34,
        text: "30°",
        isSelected: false
    }
]
let questions: Question[] = [
    {
        id: 53,
        surveyId: 1,
        createdBy: "Elisabeth Winters",
        createdDateTime: "Fri, 22 May 2020 01:11:00 GMT",
        title: "How many astronauts landed on the moon?",
        questionType: QuestionType.MultipleChoice,
        //sqOptions: sqOptions,
    },
    {
        id: 72,
        surveyId: 1,
        createdBy: "Maryam O'Ryan",
        createdDateTime: "Tue, 26 May 2020 05:57:52 GMT",
        title: "How many devs does it take to change a lightbulb?",
        subTitle: "This is not a trick question.",
        questionType: QuestionType.MultipleChoice,
        //sqOptions: sqOptions,
    },
    {
        id: 34,
        surveyId: 2,
        createdBy: "Andre Grid",
        createdDateTime: "Thur, 28 May 2020 09:30:00 GMT",
        title: "What is the temp today?",
        subTitle: "We need to send this to the Bureau of Meteorology.",
        questionType: QuestionType.MultipleChoice,
        //sqOptions: sqOptions.filter(x => x.id == id),
    }
];
let surveys: Survey[] = [
    {
        id: 1,
        name: "Survey 1",
        //questions: null // .find(x => x.id == 53)
    },
    {
        id: 2,
        name: "Survey 2",
        //questions: questions

    }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/surveys') && method === 'GET':
                    return getSurveys();
                // case url.match(/\/surveys\/\d+$/) && method === 'GET':
                //     return getSurveyById();
                case url.match(/\/questions\/\d+$/) && method === 'GET':
                    return getQuestionsBySurveyId();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions
        function getSurveys() {
            let _survey = new BehaviorSubject<Survey[]>([]);
            _survey.next(surveys);
            return ok(_survey.asObservable());
        }

        // function getSurveyById() {
        //     let survey = surveys.find(x => x.id === idFromUrl());
        //     return ok(survey);
        // }

        function getQuestionsBySurveyId() {
            let questionList = questions.filter(x => x.surveyId === idFromUrl());
            questionList.forEach(q => {
                q.sqOptions = sqOptions.filter(x => x.questionId === q.id);
            });
            let _question = new BehaviorSubject<Question[]>([]);
            _question.next(questionList);
            return ok(_question.asObservable());
        }

        // helper functions
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(200)); // delay observable to simulate server api call
        }

        function error(message: any) {
            return throwError({ error: { message } })
                .pipe(materialize(), delay(200), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};