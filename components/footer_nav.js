class FooterNav extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <div class="app-footer-nav">
            <nav class="footer-nav-buttons">
                <a href="mobile_app/home"><img src="../../assets/svg/home.svg" alt="home"></a>
                <a href="mobile_app/shop"><img src="../../assets/svg/shop.svg" alt="search"></a>
                <a href="mobile_app/chat"><img src="../../assets/svg/chat.svg" alt="search"></a>
                <a href="mobile_app/profile"><img src="../../assets/svg/profile.svg" alt="search"></a>
            </nav>
        </div>`
    }
}
customElements.define('app-footer-nav', FooterNav)