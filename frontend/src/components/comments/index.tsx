import styles from "./styles.module.css";

interface CommentProps {
  comment: {
    createdAt: string;
    authorName: string;
    content: string;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {

  const { authorName, content, createdAt } = comment;

  const date = new Date(createdAt).toDateString();

  return (
    <div className={styles.comment}>
        <div className={styles.commentText}>{content}</div>
        <div className={styles.header}>
            <div className={styles.author}>{authorName}</div>
            <div>comment on </div>
            <div className={styles.date}>{date}</div>
        </div>
    </div>
  );
}

export default Comment;