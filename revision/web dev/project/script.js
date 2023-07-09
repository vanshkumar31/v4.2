let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log("ok report")
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

    slides[slideIndex - 1].style.display= "block";

}
function showPassword() {
    document.getElementById("Password").type = "text";
}
function hidePassword() {
    document.getElementById("Password").type = "password";
}
function verifySubmit(){
   
    let Email = document.forms["login_Form"]["email"].value;
    let Password = document.forms["login_Form"]["password"].value;

    if (Email == "") {
        document.getElementById("eE").innerHTML =
            "Email field should not be empty ";
    } else if (Email.indexOf("@") < 0) {
        document.getElementById("eE").innerHTML = "Email should contain @";
    } 
    else {
        document.getElementById("eE").innerHTML = "";
       }
    if (Password == "") {
        document.getElementById("passE").innerHTML =
            "Password field should not be empty ";
    }
    else {
        document.getElementById("passE").innerHTML = "";
    }
}
function verifyForm() {

    var Name = document.forms["form"]["name"].value;
    var Email = document.forms["form"]["email"].value;
    var Numb = document.forms["form"]["numb"].value;
    var Password = document.forms["form"]["password"].value;

    if (Name == "") {
        document.getElementById("nE").innerHTML =
            "Name field should not be empty ";
    } else {
        document.getElementById("nE").innerHTML = "";
    }
    if (Email == "") {
        document.getElementById("eE").innerHTML =
            "Email field should not be empty ";
    } else {
        document.getElementById("eE").innerHTML = "";
        if (Email.indexOf("@") < 0) {
            document.getElementById("eE").innerHTML = "Email should contain @";
        }
    }
    if (Numb == "") {
        document.getElementById("pE").innerHTML =
            "Phone no. field should not be empty ";
    }
    else if (Numb.length != 10) {
        document.getElementById("pE").innerHTML = "Phone no. invalid ";
    }
    else {
        document.getElementById("pE").innerHTML = "";
    }

    if (Password == "") {
        document.getElementById("passE").innerHTML =
            "Password field should not be empty ";
    }
    else {
        document.getElementById("passE").innerHTML = "";
    }
    var pasLen = Password.length;
    var strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var strLowerCase = "abcdefghijklmnopqrstuvwxyz";
    var strNumber = "0123456789";
    var strCharacters = "!@#$%^&*?_~";
    if (pasLen <= 12) {
        document.getElementById("passE").innerHTML =
            "Password Should be at least 12 character long";
    } else if (!contain(strLowerCase, Password)) {
        document.getElementById("passE").innerHTML =
            "It should contain Lower case also";
    } else if (!contain(strUpperCase, Password)) {
        document.getElementById("passE").innerHTML =
            "It should contain Upper case also";
    } else if (!contain(strNumber, Password)) {
        document.getElementById("passE").innerHTML =
            "It should contain Number also";
    } else if (!contain(strCharacters, Password)) {
        document.getElementById("passE").innerHTML =
            "It should contain Special character also";
    } else {
        document.getElementById("passE").style.color = "green";
        document.getElementById("passE").innerHTML = "Strong Password";
    }
    var have, check;

    function contain(have, check) {
        var it_true = 0;
        for (let index = 0; index < check.length; index++) {
            const element = check[index];

            var count = have.indexOf(element);
            if (count >= 0) {
                it_true = it_true + 1;
            }
        }
        if (it_true >= 1) {
            return true;
        } else {
            return false;
        }
    }
}