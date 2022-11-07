class Card extends HTMLElement {
    connectedCallback() {
        var card_img = this.attributes.card_img.value;
        var card_title = this.attributes.card_title.value;
        var card_ref = this.attributes.card_ref.value;
        var profile_img = this.attributes.prof_img.value;
        var profile_txt = this.attributes.prof_txt.value;
        var profile_ref = this.attributes.prof_ref.value;
        var card_value = this.attributes.value.value;
        this.innerHTML =`
        <div class="card">
            <a href="${card_ref}">
                <div class="card-miniature">
                    <img src="${card_img}" alt="card-img">
                </div>
            </a>
            <div class="card-profile">
                <a class="card-title"href="${card_ref}">${card_title}</a>
                <div class="card-artist">
                    <a href="${profile_ref}"><img src="${profile_img}" alt="card-artist"></a>
                    <a href="${profile_ref}">${profile_txt}</a>
                </div>  
            </div>
            <div class="valoracion">
                <p>${card_value}</p>
                <img src="../assets/img/card_star.png" alt="star">
            </div>
        </div>`
    }
}

customElements.define("card-profile", Card);