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