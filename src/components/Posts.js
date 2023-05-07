import { useState } from "react";

export default function Posts() {
    const posts = [
        {user: 'meowed', userImage: 'assets/img/meowed.svg', postImage: 'assets/img/gato-telefone.svg', likeUser: 'respondeai', likeImage:'assets/img/respondeai.svg', nLikes: '101523'},
        
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

    function savePost() {
        if (saved === 'bookmark-outline') {
            toggleSave('bookmark');
        } else if (saved === 'bookmark') {
            toggleSave('bookmark-outline');
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
            </div>

            <div class="conteudo">
                <img src={props.postImage}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={saved} onClick={savePost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImage} />
                    <div class="texto">
                        Curtido por <strong>{props.likeUser}</strong> e <strong>outras {props.nLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    );
}