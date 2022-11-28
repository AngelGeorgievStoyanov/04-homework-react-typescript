import { Comment } from "../model/comment";
import { Filter } from '../components/HomeApp'

export type IdType = number | undefined;

export interface Indentifiable {
    id: IdType
}


export interface CommentListener {
    (comment: Comment): void;
}

export type Optional<T> = T | undefined


export interface ChangeFilterListener {
    (filter: Filter): void
}