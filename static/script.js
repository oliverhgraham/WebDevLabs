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
findTheBanana2(L2);
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