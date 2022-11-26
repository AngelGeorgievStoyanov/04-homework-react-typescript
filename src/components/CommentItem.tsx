import { Comment } from "../model/comment"
import './CommentItem.css'


interface CommentItemProps {
    comment: Comment
}


export default function CommentItem({ comment }: CommentItemProps) {

    return (


        <section className="CommentItem">
            <span className="CommentItem-id">{comment.id}
                <span className="CommentItem-title">{comment.title}</span>
            </span>
            <textarea className="CommentItem-content" name="CommentItem-content" id="" cols={19} rows={5}>{comment.content}</textarea>
            <span className="CommentItem-timeCreated"><h4>Time created</h4> {comment.timeCreation}</span>
        </section>
    )


}