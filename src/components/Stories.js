export default function Stories() {

    const stories = [
        {user: '9gag', image: 'assets/img/9gag.svg'},
        {user: 'meowed', image: 'assets/img/meowed.svg'},
        {user: 'barked', image: 'assets/img/barked.svg'},
        {user: 'nathanwpylestrangeplanet', image: 'assets/img/nathanwpylestrangeplanet.svg'},
        {user: 'wawawicomics', image: 'assets/img/wawawicomics.svg'},
        {user: 'respondeai', image: 'assets/img/respondeai.svg'},
        {user: 'filomoderna', image: 'assets/img/filomoderna.svg'},
        {user: 'memeriagourmeted', image: 'assets/img/memeriagourmet.svg'},
    ];
    
    return (

        <div class="stories">
            
            {stories.map( storie => <Storie key={storie.user} user={storie.user} image={storie.image} /> )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );
                
                
}

function Storie(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image}/>
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    );
}