let $ = document;

// header & footer handler
const headerElem = $.getElementById('header')
const footerElem = $.getElementById('footer')
const sliderElem = $.getElementById('slider')
window.addEventListener('load', doLoadHandler)    
    
function doLoadHandler(){
    fetch('./../pages/header.html').then(res => res.text()).then(contetn => headerElem.innerHTML = contetn)
    fetch('./../pages/slider.html').then(res => res.text()).then(contetn => sliderElem.innerHTML = contetn)
    fetch('./../pages/footer.html').then(res => res.text()).then(contetn => footerElem.innerHTML = contetn)
}

