import { SQOption } from './sqOption';
import { QuestionType } from './questionType';

export class Question {
    constructor(
        public id: number,
        public surveyId: number,
        public title: string,
        public createdBy: string,
        public createdDateTime: string,
        public questionType: QuestionType,
        public sqOptions?: SQOption[],
        public subTitle?: string
    ) { }
}
