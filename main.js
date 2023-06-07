// SCROLL TAB PORTFOLIO

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
    });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
    });
});

$('.video__play').click(function(){
    console.log($(this), $(this).find('.video__modal'));
    $(this).next().addClass('show');
});

$('.video__close').click(function(){
	$(this).next()[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    console.log($(this).parent());
    $(this).parent().removeClass('show');
});



// testimonials carousel

$(document).ready(function(){
    $(".testimonials__carousel").owlCarousel({
        autoWidth: true,
        dots: false,
        nav: true,
    });
});

$(document).ready(function(){
    $(".slider").owlCarousel({
        autoWidth: true,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
    });
});

// send message Email

function sendEmail(){
    Email.send({
        SecureToken : "9e12ff21-55d9-49f5-b732-7819da239bb7",
        To : 'essaddikkliaa@gmail.com',
        From : "essaddikkliaa@gmail.com",
        Subject : "test email",
        Body : "name: " + document.getElementById("name").value
                + "<br> email" + document.getElementById("email").value
                + "<br> message" + document.getElementById("message").value
    }).then(
    message => alert("sent succesfully")
);
}


const divContainer = document.querySelector('.brand_list');
let isClicked = true;

let showOrHide = function(){
    if(isClicked){
        divContainer.style.display = 'block';
        isClicked = false;
    }else{
        divContainer.style.display = 'none';
        isClicked = true;
    }
}
