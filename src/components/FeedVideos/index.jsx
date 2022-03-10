import VideoPlayer from "../VideoPlayer";
import styles from './styles.module.css';

const VIDEOS = [
    {
        id: 1,
        author: 'ruziotaku',
        description:'@_walter_lopez #peru🇵🇪 #tmreynaldo20 #fyp #ciudadblanca #aqp #domingo #fypz #bikergirl #gopro',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle:'Sonido original - zzeroki',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5c01efa9331cf10de992f13279e1f196~c5_720x720.jpeg?x-expires=1647007200&x-signature=N9stfMYQL%2BIX42xkPyieyX2XDas%3D',
        src: 'https://v16-webapp.tiktok.com/355451d1dfefff6194fb140f813c71bf/622a942a/video/tos/useast2a/tos-useast2a-ve-0068c001/aa70db475ba64a29a8cabe1aece452ae/?a=1988&br=3852&bt=1926&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7Thrw4VDXq&l=202203101813210101910550290930A164&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am5ocjk6ZmdlOzMzNzczM0ApMzc4ODk1Zjs8NzY4Omk0aWdiLTQxcjRnYDBgLS1kMTZzczBgY2MvYy4zYDZeLmMvXmM6Yw%3D%3D&vl=&vr='
    },
    {   
        id: 2,
        author: 'ruziotaku2',
        description:'Responder a @_walter_lopez #peru🇵🇪 #tmreynaldo20 #fyp #ciudadblanca #aqp #domingo #fypz #bikergirl #gopro',
        likes: 63,
        shares: 174,
        comments: 333,
        songTitle: 'Sonido original - zzeroki',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/11ed6b9fafb645e09bf938569a329b28~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/ebae12fca3f083742b8250a85013a4e1/62291404/video/tos/alisg/tos-alisg-pve-0037c001/ed81821fac944f1fb4376b196cb93cfb/?a=1988&br=3158&bt=1579&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThqsNVDXq&l=2022030914541901019020922923389FDE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anV0NjQ6ZjVnOTMzODczNEApZzpkPGQ6ZGVpNzM6aGlnOWcwNGhscjRvbnJgLS1kMS1zc2IuL15gYGEzNS42LTEwMS86Yw%3D%3D&vl=&vr='
    },
    {   
        id: 3,
        author: '@aanndy',
        description:'Esperen el final 🤣🤣 #foryou #readysetgt3 #tiktok #selvaperuana #tarapoto',
        likes: 63,
        shares: 174,
        comments: 333,
        songTitle: 'Sonido original - Andy Garcia',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1da16dd3bb826fe29f0a923761e1ac41~c5_720x720.jpeg?x-expires=1647021600&x-signature=unPRTKoV%2BykQA8%2BvTASE3CacZrQ%3D',
        src: 'https://v16-webapp.tiktok.com/f3369a21fe20c36f31aa9f899264138a/622a95ab/video/tos/useast2a/tos-useast2a-ve-0068c001/9a2d871b5f4543e2b8ef063fc739367b/?a=1988&br=3568&bt=1784&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThiKRVDXq&l=2022031018183501019018602910310F10&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2RzZmU6ZnRnOjMzNzczM0ApN2Y5Zmg2ZmVoNzU5Njg4aWdraC1scjRvanFgLS1kMTZzc2I1XmNgLTRiXzIuLS1hYDQ6Yw%3D%3D&vl=&vr='
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