var currentSlide = 1;
var isClicked = false;


function startSlide () {
    currentSlide++;
    if(currentSlide > 5) currentSlide = 1;
    changeSlide(currentSlide);
    setTimeout(startSlide,5000);
}

function changeSlide(imgNo){
    var slider = document.getElementById('slider-frame');
    
    if(imgNo == 4){
        slider.style.backgroundImage =  "url('images/image"+imgNo+".png')";
    }    
    else{
        slider.style.backgroundImage =  "url('images/image"+imgNo+".jpg')";
    }
    
    var buttons = document.getElementsByClassName('slider-btn');
    for(var i=0; i<5; i++){
        buttons[i].classList.remove('clicked');
    }
    
    var btn = document.getElementById('btn'+imgNo);
    btn.classList.add('clicked');
    currentSlide = imgNo;
}


function showNowShowing(){
    var btnComingSoon = document.getElementById('btn-coming-soon');
    btnComingSoon.style.backgroundColor = "#48C9B0";
    btnComingSoon.style.color = "#17202A";
    
    var btnNowShowing = document.getElementById('btn-now-showing');
    btnNowShowing.style.backgroundColor = "#17202A";
    btnNowShowing.style.color = "#48C9B0";
    var nowShowing = document.getElementById('now-showing');
    nowShowing.style.display = "block";
    var comingSoon = document.getElementById('coming-soon');
    comingSoon.style.display = "none";
}

function showComingSoon(){
    var btnComingSoon = document.getElementById('btn-coming-soon');
    btnComingSoon.style.backgroundColor = "#17202A";
    btnComingSoon.style.color = "#48C9B0";
    
    var btnNowShowing = document.getElementById('btn-now-showing');
    btnNowShowing.style.backgroundColor = "#48C9B0";
    btnNowShowing.style.color = "#17202A";
    var nowShowing = document.getElementById('now-showing');
    nowShowing.style.display = "none";
    var comingSoon = document.getElementById('coming-soon');
    comingSoon.style.display = "block";
}

function showNavBarMini(){
    var button = document.getElementById('burger');
    var menu = document.getElementsByClassName('nav-bar-mini');
    if(!isClicked){
        button.style.backgroundColor = "white";
        button.style.border = "1px solid #17202A";
        button.style.top = "2%";
        button.style.color = "#17202A";
        isClicked = true;
        menu[0].style.display = "block";
    }
    else{
        button.style.backgroundColor = "#17202A";
        button.style.border = "1px solid #48C9B0";
        button.style.color = "#48C9B0";
        isClicked = false;
        button.style.top = "8%";
        menu[0].style.display = "none";
    }
}
