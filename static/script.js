let x = 5;
let y = 7;
let z = x + y;
console.log(z);
let a = "hello";
let b = "world";
let c = a + b;
console.log(c);
function SumNPrint (x1,x2){
    console.log(x1 + x2);
}
SumNPrint(x,y)
SumNPrint(a,b)

if (c.length > z) {
    console.log(c);
} else if (c.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}
/*
let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];
function findTheBanana(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Banana") {
            alert("Banana found!");
        }
    }
}
findTheBanana(L1);
findTheBanana(L2);
function findTheBanana2(array){
    array.forEach(element => {
        if (element === "Banana") {
            alert("Banana found!2");
        }
    });
}
findTheBanana2(L1);
findTheBanana2(L2);*/
function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    if (h < 12) {
        console.log("Good morning");
    } else if (h >= 12 && h < 18) {
        console.log("Good afternoon");
    } else if (h >= 18 && h < 20) {
        console.log("Good evening");
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        console.log("Good night");
    }
}
greetingFunc();
function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML = "Good morning my name is Oliver Graham";
    } else if (h >= 12 && h < 18) {
        E.innerHTML = "Good afternoon my name is Oliver Graham";
    } else if (h >= 18 && h < 20) {
        E.innerHTML = "Good evening my name is Oliver Graham";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        E.innerHTML = "Good night my name is Oliver Graham";
    }
}

function addYear() {
    const year = new Date().getFullYear();  
    document.getElementById("copyYear").textContent = "©designed and coded by Oliver Graham "+year;  
}
addYear();

function showList() {
    document.getElementById("funList").style.display = "block";  
    document.getElementById("showButton").style.display = "none"; 
}

$(document).ready(function() {
    $("#fullBio").hide();
    $("#readLess").hide();

    $("#readMore").click(function() {
        $("#shortBio").hide();
        $("#fullBio").fadeIn();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function() {
        $("#fullBio").hide();
        $("#shortBio").fadeIn();
        $("#readLess").hide();
        $("#readMore").show();
    });
});
function validate() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var msg = document.getElementById("validatemsg");

    // Check if all fields are valid
    if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()) {
        msg.innerHTML = "Please fill out all fields correctly.";
        msg.style.color = "red";
        return false; // Prevent form submission
    }

    msg.innerHTML = ""; // Clear the message when fields are valid
    return true; // Allow form submission
}

/*function validate(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var msg = document.getElementById("validatemsg");

    if( !name.checkValidity() || !email.checkValidity()|| !comment.checkValidity()){
        msg.innerHTML = "Please fill out all fields";
        msg.style.color = "red";
        return false;
    }
    return true;
}*/
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav ul');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
