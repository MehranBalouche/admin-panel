let $ = document;
// slider handler
const sliderElem = $.getElementById('slider')

window.addEventListener('DOMContentLoaded', sliderHandler)
function sliderHandler(){
    let sliderCloseBtnElem = $.getElementById('sliderCloseBtn')
    let sliderOpenBtnElem = $.getElementById('sliderOpenBtn')

    sliderCloseBtnElem.addEventListener('click', ()=> sliderElem.classList.remove('slider-showing'))
    sliderOpenBtnElem.addEventListener('click', ()=> sliderElem.classList.add('slider-showing'))

}
