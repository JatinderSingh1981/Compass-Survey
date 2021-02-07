import { Question, QuestionType, SQOption, Survey } from "appmodels";

export const sqOptions: SQOption[] = [
    {
        id: 1,
        questionId: 53,
        text: "1",
        //isSelected: false
    },
    {
        id: 2,
        questionId: 53,
        text: "3",
        //isSelected: false
    },
    {
        id: 3,
        questionId: 53,
        text: "18",
        //isSelected: false
    },

    {
        id: 4,
        questionId: 72,
        text: "one",
        //isSelected: false
    },
    {
        id: 5,
        questionId: 72,
        text: "two",
        //isSelected: false
    },
    {
        id: 6,
        questionId: 72,
        text: "Three thousand three hundred eighty-seven",
        //isSelected: false
    },


    {
        id: 7,
        questionId: 34,
        text: "10°",
        //isSelected: false
    },
    {
        id: 8,
        questionId: 34,
        text: "20°",
        //isSelected: false
    },
    {
        id: 9,
        questionId: 34,
        text: "30°",
        //isSelected: false
    }
]
export const questions: Question[] = [
    {
        id: 53,
        surveyId: 1,
        createdBy: "Elisabeth Winters",
        createdDateTime: "Fri, 22 May 2020 01:11:00 GMT",
        title: "How many astronauts landed on the moon?",
        questionType: QuestionType.MultipleChoice,
    },
    {
        id: 72,
        surveyId: 1,
        createdBy: "Maryam O'Ryan",
        createdDateTime: "Tue, 26 May 2020 05:57:52 GMT",
        title: "How many devs does it take to change a lightbulb?",
        subTitle: "This is not a trick question.",
        questionType: QuestionType.MultipleChoice,
    },
    {
        id: 34,
        surveyId: 2,
        createdBy: "Andre Grid",
        createdDateTime: "Thur, 28 May 2020 09:30:00 GMT",
        title: "What is the temp today?",
        subTitle: "We need to send this to the Bureau of Meteorology.",
        questionType: QuestionType.MultipleChoice,
    }
];
export const surveys: Survey[] = [
    {
        id: 1,
        name: "Survey 1",
    },
    {
        id: 2,
        name: "Survey 2",
    }
];