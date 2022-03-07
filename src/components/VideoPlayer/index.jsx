import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const SRC = 'https://v16-webapp.tiktok.com/70d06f3a4552dead9fea76034fd410ac/62266e40/video/tos/useast2a/tos-useast2a-pve-0068/1f5b056dfd8243a3a2d1bf7fe9d0cb33/?a=1988&br=4044&bt=2022&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7Th-GSQDXq&l=2022030714412101022308416318DCA456&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hkeGU6ZjtpOjMzNzczM0ApOmg7OWg5ZGQzN2g0NTk3aWdpaDRucjRnXmdgLS1kMTZzczEvMl4zNDQtYS4tYV40LmE6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
    const [playing, setPlaying] = useState(false);
    const video =  useRef();
    
    const handlePlay = () => {
        if (playing) {
            video.current.pause();
        } else {
            video.current.play();
        }

        setPlaying(!playing);
    }

    return (
        <div>
            <video className={styles.video} src={SRC} controls={false} ref={video}/>
            <button className={styles.player} onClick={handlePlay} />
        </div>
        
    )
    
}