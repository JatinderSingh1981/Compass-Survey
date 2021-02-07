import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { Survey, Question } from '@appmodels';
import { questions, sqOptions, surveys } from './fake-db';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/surveys') && method === 'GET':
                    return getSurveys();
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