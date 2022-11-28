import { Comment, CommentStatus } from "../model/comment"
import { CommentListener } from "../shared/common-types";
import './CommentItem.css'


interface CommentItemProps {
    comment: Comment;
    onDeleteComment: CommentListener;
    onEditComment: CommentListener
}


export default function CommentItem({ comment, onDeleteComment, onEditComment }: CommentItemProps) {


    // function handleEdit(event: React.MouseEvent) {
    //     console.log(event.target, comment)
    //     onEditComment(comment)
    // }


    function handleDelete(event: React.MouseEvent) {
        onDeleteComment(comment)
    }

    return (


        <section className="CommentItem">

            <h3 className="CommentItem-title">Title: {comment.title}</h3>

            <p className="CommentItem-content" id="CommentItem-content">Content: {comment.content}</p>
            <span className="CommentItem-timeCreated"><h4>Time created</h4> {comment.timeCreation}</span>
            {comment.timeEdited !==undefined ? <span className="CommentItem-timeCreated"><h4>Time last edited</h4> {comment.timeEdited}</span> : ''}
            <span>
                <label htmlFor="CommentItem-status">Status Active</label>
                <input type="radio" name={'CommentItem-status-' + comment.id} defaultChecked value={CommentStatus.Active} />
                <label htmlFor="CommentItem-status">Status Suspend</label>
                <input type="radio" name={'CommentItem-status-' + comment.id} value={CommentStatus.Suspended} />

            </span>

            <button className="CommentItem-button" onClick={() => onEditComment(comment)} >Edit</button>
            <button className="CommentItem-button" onClick={handleDelete} >Delete</button>


        </section>
    )


}