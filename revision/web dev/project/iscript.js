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
}
//check Number id numb span id userNumbE
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
}
//check user name id name and span id userNameE
function verifyUserName() {
    const Name = document.getElementById("name").value;
    if (Name == "") {
        document.getElementById("userNameE").innerHTML =
            "Name field should not be empty ";
        document.getElementById("userNameE").style.color = "red";
    } else {
        document.getElementById("userNameE").innerHTML = "";
    }
}
//check address
function verifyAddress() {
    const address = document.getElementById("address").value;
    if (address == "") {
        document.getElementById("addE").innerHTML =
            "Address field should not be empty ";
        document.getElementById("addE").style.color = "red";
    } else {
        document.getElementById("addE").innerHTML = "";
    }
}
//check Message
function verifyMessage() {
    const address = document.getElementById("message").value;
    if (address == "") {
        document.getElementById("messE").innerHTML =
            "Query field should not be empty ";
        document.getElementById("messE").style.color = "red";
    } else {
        document.getElementById("messE").innerHTML = "";
    }
}
//check password span id passE
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
}
//check password strength span id passE
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
}
//check name,email,password,password strength,number
function verifyForm() {
    verifyUserName();
    verifyEmail();
    verifyNumb();
    verifyAddress();
    verifyPassword();
    confirmPassword();
    passStrenth();
}
function verifySubmit() {
    verifyPassword();
    verifyEmail();
}
function verifycontact() {
    // console.log("dd");
    verifyUserName();
    verifyEmail();
    verifyNumb(); 
    verifyMessage();
    
}