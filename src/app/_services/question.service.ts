import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Question } from 'appmodels';
import { Observable } from 'rxjs';

const baseUrl = `${environment.questionApiUrl}`;

@Injectable({ providedIn: 'root' })
export class QuestionService {
    constructor(private http: HttpClient) { }

    getQuestionListBySurveyId(id: number) {
        return this.http.get<Observable<Question[]>>(`${baseUrl}/${id}`);
    }
}