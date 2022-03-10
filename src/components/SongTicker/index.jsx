import MusicIcon from "../Icons/MusicIcon.jsx";
import Marquee from 'react-fast-marquee';
import styles from './styles.module.css';

export default function SongTicker ({songTitle}) {
    return (
        <div className={styles.song}>
            <MusicIcon />
            <Marquee gradient={false} speed={80}>
                <span>{songTitle}</span>
            </Marquee>
        </div>
    )
}