import Comment from "../comments";
import styles from "./styles.module.css";


interface CommentProps {
    comments: Array<{
        createdAt: string;
        authorName: string;
        content: string;
    }>;
}
    


const CommentList: React.FC<CommentProps> = ({ comments }) => {

  return (
    <div className={styles.commentListWrapper}>
      <div className={styles.commentList}>
        {comments.length === 0 ? (
          <div className={styles.noComments}>No comments posted</div>
        ) : (
          comments.map((comment: any) => (
            <Comment key={comment._id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}

export default CommentList;