import { Comment } from "../model/comment";
import CommentItem from "./CommentItem";
import './CommentList.css'

 type Props = { 
    comments:Comment[]
   }



export const CommentList: React.FC<Props> = ({comments, ...rest  }) => {
    console.log({ comments })
    return (
        <article className="CommentList">
            {comments.map(comment =>(<CommentItem key={comment.id} comment={comment}{...rest} />))}
        </article>
    )
};

export default CommentList;