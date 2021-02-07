import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Survey } from '@models/index';

const baseUrl = `${environment.surveyApiUrl}`;

@Injectable({ providedIn: 'root' })
export class SurveyService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Survey[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Survey>(`${baseUrl}/${id}`);
    }

    
}