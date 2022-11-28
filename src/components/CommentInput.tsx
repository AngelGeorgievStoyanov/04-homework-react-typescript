import React, { Component } from "react";
import { Comment, CommentStatus } from "../model/comment";
import { CommentListener, Optional } from "../shared/common-types";
import { toIsoDate } from "../shared/uils";

import './CommentInput.css'


interface CommentInputProps {
    comment: Optional<Comment>;
    onCommentSubmit: CommentListener
}

interface CommentInputState {
    id: string;
    title: string;
    content: string;
    status: string;
    timeCreation: string;
    timeEdited: string;

}

export default class CommentInput extends Component<CommentInputProps, CommentInputState> {
    state: Readonly<CommentInputState> = {
        id: this.props.comment?.id?.toString() || '',
        title: this.props.comment?.title || '',
        content: this.props.comment?.content || '',
        status: this.props.comment?.status.toString() || '',
        timeCreation: this.props.comment?.timeCreation || '',
        timeEdited: this.props.comment?.timeEdited || ''
    }


    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const fieldName = event.target.name;
        this.setState({ [fieldName]: event.target.value } as unknown as CommentInputState);



    }

    handeleCommentSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(this.state, '===11111===')

        this.props.onCommentSubmit(
            new Comment(
                this.state.title,
                this.state.content,
               this.state.status? parseInt(this.state.status): CommentStatus.Active ,
                this.state.timeCreation ? this.state.timeCreation : toIsoDate(new Date()),
                this.state.timeCreation ? toIsoDate(new Date()) : false,
                this.state.id ? parseInt(this.state.id) : undefined
            )


        )


         this.setState({ id: '', title: '', content: '', status: '', timeCreation: '', timeEdited: '' })
        console.log(this.state, '===2222====')





    }


    handleResetForm=(event:React.FormEvent)=>{
        console.log(this.state)
        event.preventDefault()
        this.setState({ id: '', title: '', content: '', status: '', timeCreation: '', timeEdited: '' })
        console.log(this.state)

    }

    render() {
        return (
            <form className="CommentInput" onSubmit={this.handeleCommentSubmit}>

             

                <label htmlFor='title'>Title : </label>
                <input type='text' id='title' name='title' value={this.state.title}
                    onChange={this.handleChange} />

                <label htmlFor='content'>Content : </label>
                <textarea id='content' name='content' value={this.state.content} cols={19} rows={5}
                    onChange={this.handleChange} ></textarea>


                <button className='CommentInput-button-submit' type='submit'>Submit</button>
                <button className='CommentInput-button-reset' type='reset' onClick={this.handleResetForm}>Reset</button>


            </form>

        )
    }
}