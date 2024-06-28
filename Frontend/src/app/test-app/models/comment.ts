import { Question } from "./question";

export class Comment {
    commentId!: number;
    commentBody!: string;
    question!: Question;
    constructor() {}
}