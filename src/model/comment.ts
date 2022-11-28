import { IdType } from "../shared/common-types";
import { toIsoDate } from "../shared/uils";

export enum CommentStatus{
    Active=1, Suspended
}

export class Comment {
    constructor(
        public title:string,
        public content:string,
        public status:  CommentStatus.Active |CommentStatus.Suspended,
        public timeCreation: string=toIsoDate(new Date()),
        public timeEdited:false | string=toIsoDate(new Date()),
        public id?:IdType
    ){}
}