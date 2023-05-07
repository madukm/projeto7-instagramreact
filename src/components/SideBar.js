import User from "./User";
import Sugestions from "./Sugestions";

export default function SideBar() {
    return (
        <div class="sidebar">
            <User />
            <Sugestions />
            
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}