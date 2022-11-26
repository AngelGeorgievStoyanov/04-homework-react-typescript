import { Comment, CommentStatus } from "../model/comment"
import { CommentListener } from "../shared/common-types";
import './CommentItem.css'


interface CommentItemProps {
    comment: Comment;
    onDeleteComment: CommentListener;
    onEditComment: CommentListener
}


export default function CommentItem({ comment,onDeleteComment,onEditComment }: CommentItemProps) {


    function handleEdit(event: React.MouseEvent) {
        console.log(event.target, comment)
        onEditComment(comment)
    }


    function handleDelete(event: React.MouseEvent) {
        onDeleteComment(comment)
    }

    return (


        <section className="CommentItem">
            <span className="CommentItem-id">{comment.id}
                <span className="CommentItem-title">{comment.title}</span>
            </span>
            <p className="CommentItem-content"  id="CommentItem-content">{comment.content}</p>
            <span className="CommentItem-timeCreated"><h4>Time created</h4> {comment.timeCreation}</span>
            <span>
                <label htmlFor="CommentItem-status">Status Active</label>
                <input type="radio" id="CommentItem-status" name="CommentItem-status" defaultChecked value={CommentStatus.Active} />
                <label htmlFor="CommentItem-status">Status Suspend</label>

                <input type="radio" id="CommentItem-status" name="CommentItem-status" value={CommentStatus.Suspended} />

            </span>

            <button className="CommentItem-button" onClick={handleEdit} >Edit</button>
            <button className="CommentItem-button" onClick={handleDelete} >Delete</button>


        </section>
    )


}