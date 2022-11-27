import React, { Component } from "react";
import { Comment } from "../model/comment";
import { CommentListener, Optional } from "../shared/common-types";
import { toIsoDate } from "../shared/uils";

import './CommentInput.css'


interface CommentInputProps {
    comment: Optional<Comment>;
    onCommentSubmit: CommentListener
}

interface CommentInputState {
    title: string;
    content: string;
    status: string;
    timeCreation: string
}

export default class CommentInput extends Component<CommentInputProps, CommentInputState> {
    state: Readonly<CommentInputState> = {
        title: this.props.comment?.title || '',
        content: this.props.comment?.content || '',
        status: this.props.comment?.status.toString() || '',
        timeCreation: this.props.comment?.timeCreation || ''
    }

    handeleCommentSubmit = (event: React.FormEvent) => {
        event.preventDefault();
       
        this.props.onCommentSubmit(
            new Comment(
                this.state.title,
                this.state.content,
                parseInt(this.state.status),
                toIsoDate(new Date()),
                false,
                this.props.comment?.id
            )


        )




    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const fieldName = event.target.name;
        this.setState({ [fieldName]: event.target.value } as unknown as CommentInputState);



    }
    render() {
        return (
            <form className="CommentInput" onSubmit={this.handeleCommentSubmit}>
                <label htmlFor='id'>ID</label>
                <input type='text' id='id' name='id' defaultValue={this.props.comment?.id || ''} disabled />
                <label htmlFor='title'>Title : </label>
                <input type='text' id='title' name='title' value={this.state.title}
                    onChange={this.handleChange} />
                <input type='text' id='id' name='id' value={this.props.comment?.id || ''} disabled />
                <label htmlFor='content'>Content : </label>
                <textarea id='content' name='content' value={this.state.content} cols={19} rows={5}
                    onChange={this.handleChange} ></textarea>
               
                <button className='CommentInput-button-submit' type='submit'>Submit</button>


            </form>

        )
    }
}