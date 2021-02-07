import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Question } from '@models/index';

const baseUrl = `${environment.questionApiUrl}`;

@Injectable({ providedIn: 'root' })
export class QuestionService {
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<Survey[]>(baseUrl);
    // }

    getQuestionBySurveyId(id: number) {
        return this.http.get<Question[]>(`${baseUrl}/${id}`);
    }

    
}