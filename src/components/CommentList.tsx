import { Comment, CommentStatus } from "../model/comment";
import { CommentListener } from "../shared/common-types";
import CommentItem from "./CommentItem";
import './CommentList.css'
import { Filter, Predicate, same } from "./HomeApp";

type Props = {
    comments: Comment[];
    onDeleteComment: CommentListener;
    onEditComment: CommentListener;
    filter: Filter;
    same: Predicate<CommentStatus>;
    onEditStatus: CommentListener
}



export const CommentList: React.FC<Props> = ({ comments,filter, ...rest }) => {
    const filterList = comments.filter((cmt) => !filter ?true: same(cmt.status,filter))

    return (
        <div>
            <article>

            </article>
            <article className="CommentList">
                {filterList.length > 0 ? filterList.map(comment => (<CommentItem key={comment.id} comment={comment} {...rest} />))
                    : comments.map(comment => (<CommentItem key={comment.id} comment={comment} {...rest} />))}
            </article>
        </div>
    )
};

export default CommentList;