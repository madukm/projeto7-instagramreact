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
            <img src={image} onClick={changeImage} data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{name}</strong>
                    <ion-icon name="pencil" onClick={changeUser} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}

