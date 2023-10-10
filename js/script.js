let $ = document;
// slider handler
const sliderElem = $.getElementById('slider');
const sliderBackDropElem = $.querySelector('.sidebar-backdrop');
const sliderCloseBtnElem = $.getElementById('sliderCloseBtn');
const sliderOpenBtnElem = $.getElementById('sliderOpenBtn');

function sliderHandler(){
    sliderCloseBtnElem.addEventListener('click', ()=> closeSlider())
    sliderOpenBtnElem.addEventListener('click', ()=> openSlider())
}

function closeSlider(){
    sliderElem.classList.remove('slider-showing');
    sliderBackDropElem.style.display = 'none';
}
function openSlider(){
    sliderElem.classList.add('slider-showing');
    sliderBackDropElem.style.display = 'block';
}
sliderBackDropElem.addEventListener('click', closeSlider)
window.addEventListener('load', sliderHandler);