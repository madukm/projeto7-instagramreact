import { useState } from "react";

export default function User() {
    let [name, setName] = useState('catanacomics');
    let [image, setImage] = useState('assets/img/catanacomics.svg');
    
    function changeUser() {
        let newName = prompt("Qual o seu nome?");
        if (newName !== "" && newName !== null) {
            setName(newName);
        }
    }
    
    function changeImage() {
        let newImage = prompt("Qual a nova imagem?");
        if (newImage !== "" && newImage !== null) {
            setImage(newImage);
        }
    }

    return (
        <div class="usuario">
            <img src={image} onClick={changeImage}/>
            <div class="texto">
                <span>
                    <strong>{name}</strong>
                    <ion-icon name="pencil" onClick={changeUser}></ion-icon>
                </span>
            </div>
        </div>
    );
}

