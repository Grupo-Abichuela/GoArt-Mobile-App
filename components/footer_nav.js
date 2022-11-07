class FooterNav extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <div class="app-footer-nav">
            <nav class="footer-nav-buttons">

                <a href="mobile_app/home"><img src="../assets/home.svg" alt="home"></a>
                <a href="mobile_app/shop"><img src="../assets/shop.svg" alt="search"></a>
                <a href="mobile_app/chat"><img src="../assets/chat.svg" alt="search"></a>
                <a href="mobile_app/profile"><img src="../assets/profile.svg" alt="search"></a>
                <a href="../inicio/inicio.html"><img src="../assets/img/home.svg" alt="home"></a>
                <a href="mobile_app/shop"><img src="../assets/img/shop.svg" alt="search"></a>
                <a href="mobile_app/chat"><img src="../assets/img/chat.svg" alt="search"></a>
                <a href="../in_app/perfil-cliente.html"><img src="../assets/img/profile.svg" alt="search"></a>
            </nav>
        </div>`
    }
}
customElements.define('app-footer-nav', FooterNav)