import { Comment } from "../model/comment";


export type IdType = number | undefined;

export interface Indentifiable {
    id: IdType
}


export interface CommentListener {
    (comment: Comment): void;
}

export type Optional<T> = T | undefined