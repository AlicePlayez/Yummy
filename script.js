var togglerBtn = document.querySelector("nav .navbar-toggler")
var togglerMenu = document.querySelector("nav .navbar-collapse")


togglerBtn.addEventListener("click", () => {
    if(togglerMenu.classList.contains("show")){
        togglerMenu.classList.remove("show")
    }else{
        togglerMenu.classList.add("show")
    }
})

// ----------------------------------------------------------------



var lightboxSection = document.querySelector("#lightbox-section")
var lightboxClose = document.querySelector("#lightbox-close")
var lightboxBtn = document.querySelectorAll(".lightbox-btn")


lightboxBtn.forEach(b => {
    b.addEventListener("click", () => {
        lightboxSection.classList.remove('d-none')
    })
})


lightboxClose.addEventListener("click", () => {
    lightboxSection.classList.add('d-none')
})

// ------------------


function do_swipe(number){
    var slides = document.querySelectorAll('[data-swipe-item]')
    var currentSlideIndex;
    
    slides.forEach((s, index) => {

        if(s.classList.contains('d-flex')){
            currentSlideIndex = index
        }

        s.classList.remove('d-flex')
        s.classList.add('d-none')
    
    })
    var nextSlideIndex;
    if(number == 1){
        if(currentSlideIndex +1 > slides.length -1){nextSlideIndex = 0}
        else{nextSlideIndex = currentSlideIndex + 1}
    }

    else if(number == -1){
        if(currentSlideIndex -1 < 0){nextSlideIndex = slides.length - 1}
        else{nextSlideIndex = currentSlideIndex -1}
    }

    slides[nextSlideIndex].classList.remove('d-none')
    slides[nextSlideIndex].classList.add('d-flex')

    if (number == 1){
        slides[nextSlideIndex].classList.remove('swipe-right');
        slides[nextSlideIndex].classList.add('swipe-left');
    } else if (number == -1) {
        slides[nextSlideIndex].classList.remove('swipe-left');
        slides[nextSlideIndex].classList.add('swipe-right');
    }


}






var tabsSection = document.querySelectorAll('[data-tabs-section]');
if (tabsSection.length > 0){
    tabsSection.forEach(a => {
        var tabsResults = document.querySelectorAll(`[data-tabs-result]`);
        var tabsBtns = document.querySelectorAll(`[data-tabs-btn]`);


        tabsBtns.forEach((btn, index) => {
           btn.addEventListener('click', () => {
            tabsBtns.forEach(subBtn => {subBtn.classList.remove('active-2');})
            btn.classList.add('active-2');
            tabsResults.forEach(subRes => {subRes.classList.add('d-none');});
            tabsResults[index].classList.remove('d-none');

           })
        })
    })
}





var slideIndex =  0
showSlide(slideIndex);


function changeSlide(n){
    showSlide(slideIndex + n);
}



function showSlide(n){
    let slides = document.querySelectorAll("[data-slider-img]");

    if(n > slides.length -1){slideIndex = 0}
    else if(n < 0){slideIndex = Number(slides.length - 1);}
    else{slideIndex = n}

    slides.forEach(img => {
        img.classList.add('d-none')
    })

    slides[slideIndex].classList.replace('d-none', 'd-block')
}

















