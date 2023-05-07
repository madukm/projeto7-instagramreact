export default function Sugestions() {
    
    const sugestions = [];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestions.map( sugestion => <Sugestion key={sugestion.name} image={sugestion.image} name={sugestion.name} reason={sugestion.reason} />)}        
            
        </div>
    );
}

function Sugestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}