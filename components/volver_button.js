class Volver extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <button class="volver">
            <img src="../assets/img/volver_arrow.png" alt="volver">
            <p>Volver</p>
        </button>`
    }
}
customElements.define('volver-button', Volver);