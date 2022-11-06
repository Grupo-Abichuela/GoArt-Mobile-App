class FilterNav extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
        <div class="filter-row">
            <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Óleo</p></div>
            <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Pixel Art</p></div>
            <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>3D Art</p></div>
            <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Urban</p></div>
            <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Tradicional</p></div>
            <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Photo</p></div>
        </div>`
    }
}

document.addEventListener("click", filterPopup())

function filterPopup() {
    document.getElementById("filter").innerHTML = 
    `<div class="filter-row">
        <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Óleo</p></div>
        <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Pixel Art</p></div>
        <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>3D Art</p></div>
        <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Urban</p></div>
        <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Tradicional</p></div>
        <div class="filter-column"><img src="../assets/svg/checkmark.svg"><p>Photo</p></div>
    </div>`
}

document.dispatchEvent(filterPopup())