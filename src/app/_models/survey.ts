import { Question } from './question';

export class Survey {
    constructor(
        public id: number,
        public name: string,
        public questions?: Question[]
    ) { }
}