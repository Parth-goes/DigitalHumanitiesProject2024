console.log("JS loaded");
let slides = document.querySelectorAll(".hero");
let index = 0;

function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

window.nextSlide = function(){
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide(index);
}

window.prevSlide = function(){
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    showSlide(index);
}

console.log(slides.length);
