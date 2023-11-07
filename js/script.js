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

// ================== light & dark mode handller ========================
let themeToggleDarkIcon = $.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
let themeToggleBtn = document.getElementById('theme-toggle');
let themeColor;

// Change the icons inside the button based on previous settings
if (localStorage.getItem('slang-them-color') === 'dark' || (!('slang-them-color' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('slang-them-color')) {
        if (localStorage.getItem('slang-them-color') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('slang-them-color', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('slang-them-color', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('slang-them-color', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('slang-them-color', 'dark');
        }
    }
    
});

function getThemeColor(){
    return localStorage.getItem('slang-them-color')
}

function setThemeColor(){
    themeColor = getThemeColor();
    if(themeColor){
        if(themeColor === 'dark' ){
            document.documentElement.className = 'dark';
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        }else{
            document.documentElement.className = 'light';
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleLightIcon.classList.add('hidden');
        }
    }
    return
}
window.addEventListener('load', setThemeColor)

        // notification settings

let notificationBtnElem =  $.getElementById('notificationBtn')
let notificationSettingsBoxElem = $.getElementById('notificationSettingsBox')

        // show/hide the menu when the button is clicked
notificationBtnElem.addEventListener('click', ()=>{
    notificationSettingsBoxElem.classList.toggle('hidden')
});
        // hide the menu when a click event occurs outside the menu
$.addEventListener('click', (event) => {
    if (!notificationSettingsBoxElem.contains(event.target) && !notificationBtnElem.contains(event.target)) {
        notificationSettingsBoxElem.classList.add('hidden');
    }
  });

            // profile settings ================*

let imgProfileElem =  $.getElementById('imgProfile')
let profileSettingsBoxElem = $.getElementById('profileSettingsBox')


        // show/hide the menu when the button is clicked =========*
imgProfileElem.addEventListener('click', ()=>{
    profileSettingsBoxElem.classList.toggle('hidden')
});
        // hide the menu when a click event occurs outside the menu =========*
$.addEventListener('click', (event) => {
    if (!profileSettingsBoxElem.contains(event.target) && !imgProfileElem.contains(event.target)) {
        profileSettingsBoxElem.classList.add('hidden');
    }
  });