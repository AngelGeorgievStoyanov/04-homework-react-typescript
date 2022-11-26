import { Component } from "react";
import MOCK_COMMENT from "../model/mock-comments";
import { Comment } from "../model/comment"
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";



interface AppState {
    comments: Comment[]
}


export default class HomeApp extends Component<{}, AppState>{
    state: Readonly<AppState> = {
        comments: MOCK_COMMENT
    }

    nextId = 0

    constructor(props: {}) {
        super(props)
        this.state.comments.forEach(comment => comment.id = ++this.nextId)
    }

    handleTodoSubmit = (comment: Comment) => {
        this.setState(({ comments }) => ({ comments: [...comments, { ...comment, id: ++this.nextId }] }))
    }

    handleDeleteComment = (comment: Comment) => {
        this.setState(({ comments }) => ({ comments: comments.filter(cmt => cmt.id !== comment.id) }))
    }

    handleEditComment(comment: Comment) {
        this.setState(({ comments }) => ({ comments: comments.map(cmt => cmt.id === comment.id ? comment : cmt) }))
    }


    render() {

        return (
            <div className="HomeApp">HOME APP
                <CommentInput comment={undefined} onCommentSubmit={this.handleTodoSubmit} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment} onEditComment={this.handleEditComment} />
            </div>
        )
    }

}