import { Component } from "react";
import MOCK_COMMENT from "../model/mock-comments";
import { Comment, CommentStatus } from "../model/comment"
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import { Optional } from "../shared/common-types";
import CommentFilter from "./CommentFilterStatus";

export type Predicate<T> = (a: T, b: T)=> boolean


export type Filter = CommentStatus | undefined


export interface AppState {
    comments: Comment[];
    editedComment: Optional<Comment>;
    filter: Filter;

}

export function same<T>(a:T,b:T){return a===b}

export default class HomeApp extends Component<{}, AppState>{
    state: Readonly<AppState> = {
        comments: MOCK_COMMENT,
        editedComment: undefined,
        filter: undefined
    }

    nextId = 0

    constructor(props: {}) {
        super(props)
        this.state.comments.forEach(comment => comment.id = ++this.nextId)
    }

    handleCommentSubmit = (comment: Comment) => {
        if (comment.id) {

            this.setState(({ comments }) => ({ comments: comments.map(cmt => cmt.id === comment.id ? comment : cmt) }))

        } else {
            this.setState(({ comments }) => ({ comments: [...comments, { ...comment, id: ++this.nextId }] }))

        }
    }

    handleDeleteComment = (comment: Comment) => {
        this.setState(({ comments }) => ({ comments: comments.filter(cmt => cmt.id !== comment.id) }))
    }

    handleEditComment = (comment: Comment) => {
        this.setState({ editedComment: comment })

    }

    handleFilter = (filter: Filter) => {
        
       
     this.setState({ filter: filter });
     console.log(this.state)
    }


    render() {

        return (
            <div className="HomeApp">HOME APP
                <CommentInput key={this.state.editedComment?.id} comment={this.state.editedComment} onCommentSubmit={this.handleCommentSubmit} />
                <CommentFilter filter={this.state.filter} onChangeFilter={this.handleFilter} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment} onEditComment={this.handleEditComment} filter={this.state.filter} same={same} onEditStatus={this.handleCommentSubmit} />
            </div>
        )
    }

}