import { useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import VideoPlayerActions from './VideoPlayerActions';
import VideoDescription from '../VideoDescription/index.jsx';


export default function VideoPlayer ({albumCover, author, description, songTitle, src}) {
    const [playing, setPlaying] = useState(false);
    const video =  useRef(null);

    const handlePlay = () => {
        const { current: videoEl } = video;
        playing
            ? videoEl.pause()
            : videoEl.play()

        setPlaying(!playing);
    }

    const PlayerClassName = clsx (styles.player, {
        [styles.hidden]: playing
    });
    
    return (
        <div className={styles.wrapper}>
            <video 
                className={styles.video} 
                controls={false} 
                loop
                onClick={handlePlay}
                ref={video}
                src={src} 
            /> 
            <i className={PlayerClassName} onClick={handlePlay} />
            <VideoPlayerActions />
            <VideoDescription 
                albumCover={albumCover}
                author= {author} 
                description={description}
                songTitle={songTitle}
            />
        </div>
    )    
}