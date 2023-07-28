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
function showPassword() {
    document.getElementById("password").type = "text";
}
function hidePassword() {
    document.getElementById("password").type = "password";
}
function verifySubmit() {

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
    var Address = document.forms["form"]["address"].value;
    console.log(Address);
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
    if (Address == "") {
        document.getElementById("addE").innerHTML =
            "Address field should not be empty ";
        document.getElementById("AddressE").style.color = "red";
    } else {
        document.getElementById("AddressE").innerHTML = "";
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
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    document.getElementById("isOption").oninput = function () { option() };
    document.getElementById("isTip").oninput = function () { giveTip() };
    document.getElementById("isCoupon").oninput = function () { coupon() };
    document.getElementById("isSplit").oninput = function () { split() }; clearCartButton.addEventListener('click', clearCartHandler);
    document.getElementById('tbody').innerHTML = '';

    bill = 0;

    var menucart = JSON.parse(localStorage.getItem('cart')) || [];
    s = 1;
    menucart.forEach((item) => {

        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = s++;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = item.name;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = item.size;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = 1;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = item.price;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = item.price;
        bill = Number(item.price) + bill;
        a = Number(bill);
    });
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
a = Number(bill);
function option() {
    const x = document.getElementById("option");

    if (x.style.display === "block") {
        x.style.display = "none"; bill = a;
        document.getElementById("output").innerHTML = `Total Item:<b>${y} </b>\x20        Total Bill:<b>${bill}</b>`;


    } else {
        x.style.display = "block";
    }
}
function giveTip() {
    const tip = document.getElementById("tipI");

    if (tip.style.display === "inline-block") {
        tip.style.display = "none";
        document.getElementById("output").innerHTML = `Total Item:<b>${y} </b>\x20        Total Bill:<b>${Number(bill)}</b>`;

    } else {
        tip.style.display = "inline-block";

        tip.oninput = function () {
            let value = tip.value;
            value = value < 0 ? 0 : tip.value;
            bill = a + Number(tip.value);
            console.log();
            document.getElementById("output").innerHTML = `Total Item:<b>${y} </b>\x20        Total Bill:<b>${Number(bill)}</b>`
        };

    }


};
function coupon() {
    const x = document.getElementById("coupI");

    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}
function split() {
    const x = document.getElementById("person");

    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

        x.oninput = function () {
            let value = x.value;
            value = value < 1 ? 1 : x.value;
            let newbill = bill / value;
            console.log(newbill);
            document.getElementById("output").innerHTML = `Total Item:<b>${y} </b>\x20        Total Bill:<b>${bill}</b>
                <br>Per person:<b>${newbill}</b>`
        };
    }

}

function clearCartHandler() {

    localStorage.removeItem('cart');
    document.getElementById('tbody').innerHTML = '';
    cart();
}

function addToCart(orderId, size, price, name) {
    console.log("Adding to cart - Order ID: " + orderId + ", Item: " + name + ", Size: " + size + ", Price: " + price);
    const product = {
        orderId: orderId,
        size: size,
        price: price,
        name: name
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(function (item) {

        return item.orderId === orderId && item.price === price;
    });

    if (!existingProduct) {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    const cartItems = document.getElementById('cart-items');
    cartItems.style.display="block";
    cartItems.innerHTML = " ";
    const menucart = JSON.parse(localStorage.getItem('cart')) || [];
    menucart.forEach((item) => {

        console.log(item);
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
    });
}

function closeNav() {
    document.getElementById('cart-items').style.display = "none"
    document.getElementById("mySidenav").style.width = "0";

}
