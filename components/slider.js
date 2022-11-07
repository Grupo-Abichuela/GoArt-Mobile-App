const slider = document.querySelector(".slider");

let slider_section = document.querySelectorAll(".slider-section");
let slider_section_last = slider_section[slider_section.length - 1];
console.log(slider_section_last);

const btn_left = document.querySelector("#btn-left");
const btn_right = document.querySelector("#btn-right");
console.log(slider)
slider.insertAdjacentElement('afterbegin', slider_section_last);

function Next() {
    let slider_section_first = document.querySelectorAll(".slider-section")[0];
    console.log(slider_section) ;
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slider_section_first);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function Prev() {
    let slider_section = document.querySelectorAll(".slider-section");
    let slider_section_last = slider_section[slider_section.length - 1];
    console.log(slider_section) ;
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slider_section_last);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btn_right.addEventListener('click', function(){ Next(); });
btn_left.addEventListener('click', function(){ Prev(); });
setInterval(function(){ Next(); }, 5000);