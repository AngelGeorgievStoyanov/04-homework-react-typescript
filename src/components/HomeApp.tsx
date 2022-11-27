import { Component } from "react";
import MOCK_COMMENT from "../model/mock-comments";
import { Comment } from "../model/comment"
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import { Optional } from "../shared/common-types";



interface AppState {
    comments: Comment[];
    editedComment:Optional<Comment>
   
}


export default class HomeApp extends Component<{}, AppState>{
    state: Readonly<AppState> = {
        comments: MOCK_COMMENT,
        editedComment:undefined
       
    }

    nextId = 0

    constructor(props: {}) {
        super(props)
        this.state.comments.forEach(comment => comment.id = ++this.nextId)
    }

    handleTodoSubmit = (comment: Comment) => {
        if(comment.id){
          
            this.setState(({comments})=>({comments: comments.map(cmt=>cmt.id===comment.id ? comment:cmt )}))
        }else{
            this.setState(({ comments }) => ({ comments: [...comments, { ...comment, id: ++this.nextId }] }))

        }
    }

    handleDeleteComment = (comment: Comment) => {
        this.setState(({ comments }) => ({ comments: comments.filter(cmt => cmt.id !== comment.id) }))
    }

    handleEditComment=(comment: Comment)=> {
       this.setState({editedComment:comment})
    }
    

    render() {

        return (
            <div className="HomeApp">HOME APP
                <CommentInput key={this.state.editedComment?.id} comment={this.state.editedComment } onCommentSubmit={this.handleTodoSubmit} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment} onEditComment={this.handleEditComment} />
            </div>
        )
    }

}