import VideoPlayer from "../VideoPlayer";
import styles from './styles.module.css';

const VIDEOS = [
    {
        id: 1,
        author: 'ruziotaku',
        description:'Responder a @_walter_lopez #peru🇵🇪 #tmreynaldo20 #fyp #ciudadblanca #aqp #domingo #fypz #bikergirl #gopro',
        likes: 123,
        shares:234,
        comments: 333,
        songTitle:'Sonido original - zzeroki',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7777aedaac8e64b04bf22d37f467c4cd~c5_720x720.jpeg?x-expires=1646913600&x-signature=T%2FbMDSJYWqJYr9y5w6hhzQcIb74%3D',
        src: 'https://v16-webapp.tiktok.com/6431395cfc971a0044e0ab0d2acf8812/6229140b/video/tos/useast2a/tos-useast2a-ve-0068c003/4722a4e4ad744ab1bd7a4a0ed362ceb1/?a=1988&br=3274&bt=1637&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThqsNVDXq&l=2022030914541901019020922923389FDE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ams7dTQ6ZmtvOzMzNzczM0ApaDZpaDw5NjxmN2Y7Ozs1ZWdkbGYucjRfaDFgLS1kMTZzczBiNWM2MV8wNWFfMjNjYjA6Yw%3D%3D&vl=&vr=',
        
    },
    {   
        id: 2,
        author: 'ruziotaku',
        description:'Esta es la descripcion, responder a @_walter_lopez #peru🇵🇪 #tmreynaldo20 #fyp #ciudadblanca #aqp #domingo #fypz #bikergirl #gopro',
        likes: 63,
        shares:174,
        comments: 333,
        songTitle: 'Sonido original - zzeroki',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/11ed6b9fafb645e09bf938569a329b28~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/ebae12fca3f083742b8250a85013a4e1/62291404/video/tos/alisg/tos-alisg-pve-0037c001/ed81821fac944f1fb4376b196cb93cfb/?a=1988&br=3158&bt=1579&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThqsNVDXq&l=2022030914541901019020922923389FDE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anV0NjQ6ZjVnOTMzODczNEApZzpkPGQ6ZGVpNzM6aGlnOWcwNGhscjRvbnJgLS1kMS1zc2IuL15gYGEzNS42LTEwMS86Yw%3D%3D&vl=&vr='
    }
]

export default function FeedVideos () {
    return (
        VIDEOS.map( video => {
            return (
                <div key={video.id} className={styles.item}>
                    <VideoPlayer {...video} />
                </div>
            )
        })    
    )
}