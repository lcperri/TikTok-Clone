import SongTicker from "../SongTicker";
import AlbumDisk from "./AlbumDisk";
import styles from './styles.module.css';

export default function VideoDescription ({albumCover, author, description, songTitle}) {
    //console.log({songTitle})
    return (
        <footer className={styles.description}>
            <div className={styles.textWrapper}>
                <section>
                    <strong>
                        <a className={styles.author} href={'/user/${author'}>
                            @{author}
                        </a>
                    </strong>
                    <p className={styles.text}>
                        {description}
                    </p>
                </section>
                <SongTicker songTitle={songTitle}/>
            </div>

            <div>   
                <AlbumDisk albumCover={albumCover}/>
            </div>
        </footer>
    )
}