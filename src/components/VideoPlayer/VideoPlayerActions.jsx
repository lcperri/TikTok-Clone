import { Heart } from "../Icons/Heart";
import { Comment } from "../Icons/Comment";
import { Share } from "../Icons/Share";
import styles from './styles.module.css';

export default function VideoPlayerActions ({likes = 2041, comments = 33, shares = 520, hearted = false}) {

    const handleLike = () => {
        window.alert('handleLike')
    }

    const handleComment = () => {
        alert('handleComment')
    }

    const handleShare = () => {
        alert('handleShare')
    }

    return (
        <aside className={styles.actions}>
            <button onClick={handleLike} className={styles.action}>
                <Heart width='45' />
                <span title="like">{likes}</span>
            </button>    
            <button onClick={handleComment} className={styles.action}>
                <Comment width='45'/>
                <span title="comments">{comments}</span>
            </button>
            <button onClick={handleShare} className={styles.action}>
                <Share width='45'/>
                <span title="shares">{shares}</span>
            </button>
        </aside>
    )
}