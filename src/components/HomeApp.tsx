import { Component } from "react";
import MOCK_COMMENT from "../model/mock-comments";
import { Comment } from "../model/comment"
import CommentList from "./CommentList";



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

    render() {

        return (
            <div className="HomeApp">HOME APP
                <CommentList comments={this.state.comments} />
            </div>
        )
    }

}