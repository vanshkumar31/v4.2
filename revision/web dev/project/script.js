let slideIndex = 1;
let y = 0; let a; var bill = 0;
showSlides(slideIndex);

var acc = document.getElementsByClassName("accordion");

var i;
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("myslide");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
function cart() {
    mode();
  
    document.getElementById("isOption").oninput = function () { option() };
    document.getElementById("isTip").oninput = function () { giveTip() };
    document.getElementById("isCoupon").oninput = function () { coupon() };
    document.getElementById("isSplit").oninput = function () { split() }; clearCartButton.addEventListener('click', clearCartHandler);
    document.getElementById('tbody').innerHTML = '';

    bill = 0;

    orderItem()
    y = document.querySelectorAll("tbody tr").length;
    document.getElementById("output").innerHTML = `Total Item:<b>${y} </b>\x20        Total Bill:<b>${bill}</b>`;
    if (y == 0) {

        document.getElementById("myOrder").style.display = "none";
        document.getElementById("cartEmpty").style.display = "block";
    } else {
        document.getElementById("cartEmpty").style.display = "none";
        document.getElementById("myOrder").style.display = "block";

    }
};












