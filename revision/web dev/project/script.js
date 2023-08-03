// slideshow
let currentImageIndex = 0;
let y = 0; let a; var bill = 0;
const review = {
    1: {
        heading: "Delicious Food, Great Service",
        reviews: ["The food at Fastfood Resort is absolutely delicious!", "The staff was friendly and provided excellent service."],
    },
    2: {
        heading: "Family-Friendly Atmosphere",
        reviews: ["Fastfood Resort is a perfect place for family outings.", "The ambiance is welcoming, and the kids loved the play area."],
    },
    3: {
        heading: "Variety of Flavors",
        reviews: ["The menu offers a wide variety of flavors to choose from.", "It's a food paradise for foodies with diverse tastes."],
    },
    4: {
        heading: "Quick and Tasty",
        reviews: ["Fastfood Resort lives up to its name.", "The food was served promptly, and it tasted incredible."],
    },
    5: {
        heading: "Hygienic and Safe",
        reviews: ["I appreciate the resort's focus on hygiene and safety measures.", "I felt comfortable dining in during these challenging times."],
    },
};
const imageUrls = [
    "resource/img/g1.png",
    "resource/img/g2.png",
    "resource/img/g3.png",
    "resource/img/g4.png",
    "resource/img/g5.png"
    // Add more image URLs to the array as needed
];
function slide(n) {
   
    currentImageIndex = (currentImageIndex + n + imageUrls.length) % imageUrls.length;
    document.querySelector("#slider").style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
    document.querySelector("#rew-head").textContent = review[currentImageIndex + 1].heading;
    document.getElementById("rew-des").textContent = review[currentImageIndex + 1].reviews.join("\n");
}const interval=setInterval(() => { slide(1) }, 2700);
   //show password use id password
function showPassword() {
    document.getElementById("password").type = "text";
}
//hide password use id password
function hidePassword() {
    document.getElementById("password").type = "password";
}
//check Email id email span id userEmailE 
function verifyEmail() {
    const Email = document.getElementById("email").value;
    if (Email == "") {
        document.getElementById("userEmailE").style.color = "red";
        document.getElementById("userEmailE").innerHTML =
            "Email field should not be empty ";
    } else if (Email.indexOf("@") < 0) {
        document.getElementById("userEmailE").innerHTML = "Email should contain @";
        document.getElementById("userEmailE").style.color = "red";

    }
    else {
        document.getElementById("userEmailE").innerHTML = "";
    }
}//check Number id numb span id userNumbE
function verifyNumb() {
    const Number = document.getElementById("numb").value;
    if (Number == "") {
        document.getElementById("userNumbE").innerHTML =
            "Phone no. field should not be empty ";
        document.getElementById("userNumbE").style.color = "red";
    }
    else if (Number.length != 10) {
        document.getElementById("userNumbE").innerHTML = "Phone no. invalid  ";
    }
    else {
        document.getElementById("UserNumbE").innerHTML = "";
    }
}//check user name id name and span id userNameE
function verifyUserName() {
    const Name = document.getElementById("name").value;
    if (Name == "") {
        document.getElementById("userNameE").innerHTML =
            "Name field should not be empty ";
        document.getElementById("userNameE").style.color = "red";
    } else {
        document.getElementById("userNameE").innerHTML = "";
    }
}//check address id address and span id addE
function verifyAddress() {
    const address = document.getElementById("address").value;
    if (address == "") {
        document.getElementById("addE").innerHTML =
            "Address field should not be empty ";
        document.getElementById("addE").style.color = "red";
    } else {
        document.getElementById("addE").innerHTML = "";
    }
}//check Message id message and span id messE
function verifyMessage() {
    const address = document.getElementById("message").value;
    if (address == "") {
        document.getElementById("messE").innerHTML =
            "Query field should not be empty ";
        document.getElementById("messE").style.color = "red";
    } else {
        document.getElementById("messE").innerHTML = "";
    }
}//check password span id passE
function verifyPassword() {
    var Password = document.getElementById("password").value;

    if (Password == "") {
        document.getElementById("passE").innerHTML =
            "Password field should not be empty ";
        document.getElementById("passE").style.color = "red";
    }
    else {
        document.getElementById("passE").innerHTML = "";
    }
}//check password strength span id passE
function passStrenth() {
    var Password = document.getElementById("password").value;
    const pasLen = document.getElementById("password").value.length;
    const strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const strLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const strNumber = "0123456789";
    const strCharacters = "!@#$%^&*?_~";
    function contain(have, check) {
        let it_true = 0;
        for (let index = 0; index < check.length; index++) {
            let element = check[index];

            const count = have.indexOf(element);
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
    if (pasLen <= 12) {
        document.getElementById("passE").innerHTML =
            "Password Should be at least 12 character long";
        document.getElementById("passE").style.color = "red";
    } else if (!contain(strLowerCase, Password)) {
        document.getElementById("passE").innerHTML =
            "It should contain Lower case also";
        document.getElementById("passE").style.color = "red";
    } else if (!contain(strUpperCase, Password)) {
        document.getElementById("passE").innerHTML =
            "It should contain Upper case also";
        document.getElementById("passE").style.color = "red";
    } else if (!contain(strNumber, Password)) {
        document.getElementById("passE").innerHTML =
            "It should contain Number also";
        document.getElementById("passE").style.color = "red";
    } else if (!contain(strCharacters, Password)) {
        document.getElementById("passE").innerHTML =
            "It should contain Special character also";
        document.getElementById("passE").style.color = "red";
    } else {
        document.getElementById("passE").style.color = "green";
        document.getElementById("passE").innerHTML = "Strong Password";
    }
}//Confirm password
function confirmPassword() {
    const Password = document.getElementById("password").value;
    const Confirm = document.getElementById("conPassword").value;
    if (Confirm == Password) {
        document.getElementById("cPassE").innerHTML = "";
    } else if (Confirm == "") {
        document.getElementById("cPassE").innerHTML =
            "Confirm Password field should not be empty ";
        document.getElementById("cPassE").style.color = "red";
    }
    else {
        document.getElementById("cPassE").innerHTML =
            "Password  should be same ";
        document.getElementById("cPassE").style.color = "red";
    }
}//check name,email,password,confirm password strength,number
function verifyForm() {
    verifyUserName();
    verifyEmail();
    verifyNumb();
    verifyAddress();
    verifyPassword();
    confirmPassword();
    passStrenth();
}//check email,password
function verifySubmit() {
    verifyPassword();
    verifyEmail();
}//check name,email,numb,message
function verifycontact() {

    verifyUserName();
    verifyEmail();
    verifyNumb();
    verifyMessage();

}//open sidebar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    const cartItems = document.getElementById('cart-items');
    cartItems.style.display = "block";
    cartItems.innerHTML = " ";
    const menucart = JSON.parse(localStorage.getItem('cart')) || [];
    menucart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}(${item.size})`;
        cartItems.appendChild(li);
    });
}//close sidebar
function closeNav() {
    document.getElementById('cart-items').style.display = "none"
    document.getElementById("mySidenav").style.width = "0";
}//check mode
function mode() {
   
    const mode = localStorage.getItem("mode");
    document.querySelector("#slider") === null ? clearInterval(interval) : 0;
    mode === "darkMode" ? darkMode() : lightMode()
}//dark mode
function darkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "darkMode");
}//light mode
function lightMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("mode", "lightMode")
}//order item table
function orderItem() {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
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
}//tip
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
            document.getElementById("output").innerHTML = `Total Item:<b>${y} </b>\x20        Total Bill:<b>${Number(bill)}</b>`
        };

    }


}//coupon
function coupon() {
    const x = document.getElementById("coupI");

    if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";

    }
}//bill split
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
            document.getElementById("output").innerHTML = `Total Item:<b>${y} </b>\x20        Total Bill:<b>${bill}</b>
                <br>Per person:<b>${newbill}</b>`
        };
    }

}//clear the local storage of cart
function clearCartHandler() {
    localStorage.removeItem('cart');
    document.getElementById('tbody').innerHTML = '';
    cart();
}//add to cart and store data in local storage
function addToCart(orderId, size, price, name) {
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

} //show advance option like tip,coupon,split bill
function option() {
    const x = document.getElementById("option");

    if (x.style.display === "block") {
        x.style.display = "none"; bill = a;
        document.getElementById("output").innerHTML = `Total Item:<b>${y} </b>\x20 Total Bill:<b>${bill}</b>`;


    } else {
        x.style.display = "block";
    }
}//tab(when i click on product it open that tab)
function tab(i) {

    localStorage.setItem("open", `${i}`);
    window.location.href = `menu.html#${i}`;


}//cart page
function cart() {
    mode();
    document.getElementById("isOption").oninput = function () { option() };
    document.getElementById("isTip").oninput = function () { giveTip() };
    document.getElementById("isCoupon").oninput = function () { coupon() };
    document.getElementById("isSplit").oninput = function () { split() };
    clearCartButton.addEventListener('click', clearCartHandler);
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

