import { Question } from './question';

export class Survey {
    constructor(
        public id: number,
        public surveyTitle: string,
        public questions?: Question[]
    ) { }
}