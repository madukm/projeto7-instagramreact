import { useState } from "react";

export default function Posts() {
    
    const posts = [
        {user: 'meowed', userImage: 'assets/img/meowed.svg', postImage: 'assets/img/gato-telefone.svg', likeUser: 'respondeai', likeImage:'assets/img/respondeai.svg', nLikes: 101523},
        {user: 'barked', userImage: 'assets/img/barked.svg', postImage: 'assets/img/dog.svg', likeUser: 'adorableanimals', likeImage:'assets/img/adorable_animals.svg', nLikes: 99159},
        {user: 'meowed', userImage: 'assets/img/meowed.svg', postImage: 'assets/img/gato-telefone.svg', likeUser: 'respondeai', likeImage:'assets/img/respondeai.svg', nLikes: 10000},
    ];

    return (
        <div class="posts">
            {posts.map( post => 
            <Post key={post.postImage} postImage={post.postImage} 
            user={post.user} userImage={post.userImage} 
            nLikes={post.nLikes} likeImage={post.likeImage} likeUser={post.likeUser}
            />)}
        </div>
    );
}

function Post(props) {
    let [saved, toggleSave] = useState('bookmark-outline');
    let [liked, toggleLike] = useState('heart-outline');
    let [nLikes, updateNLikes] = useState(props.nLikes);
    let [redHeart, updateHeartColor] = useState("");

    function savePost() {
        if (saved === 'bookmark-outline') {
            toggleSave('bookmark');
        } else if (saved === 'bookmark') {
            toggleSave('bookmark-outline');
        }
    }

    function likePostHeart() {
        if (liked === 'heart-outline') {
            toggleLike('heart');
            updateHeartColor("red-heart");
            updateNLikes(nLikes+1);
        } else if (liked === 'heart') {
            toggleLike('heart-outline');
            updateNLikes(nLikes-1);
            updateHeartColor("");
        }
    }

    function likePostImage() {
        if (liked === 'heart-outline') {
            toggleLike('heart');
            updateNLikes(nLikes+1);
            updateHeartColor("red-heart");
        }
    }

    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} data-test="post-image"/>
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
            </div>

            <div class="conteudo">
                <img src={props.postImage} onClick={likePostImage}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div className={redHeart}>
                        <ion-icon name={liked} onClick={likePostHeart} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={saved} onClick={savePost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImage} />
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>{props.likeUser}</strong> e <strong>outras {nLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    );
}