let customer; 
customer = "Adil'";
customer = "Gaz";
const address = "kabanbay53";
console.log (address);
const UNI_NAME = "Nazarbayev University";
let employees = 3;
let uniIsOpen = false;
uniIsOpen = true;
student = "Nartay";
let backpack = null;
console.log(backpack);
let item = {
    name: "book", 
    price: 1000,
}
console.log(item);
console.log(item.name);
console.log(item.price);
item.label = "red";
delete item.label;
console.log(item);
item["label"] = "green";
let color  = "red";
item.color; 
item.print = function() { 
    console.log("printexample");
}
item.print;
console.log("name" in item);
console.log(item);
for (key in item){
    console.log(key);
}

let merch = [
    "hoodie",
    "tshirt",
    "notebook",
    "hat"
]
console.log(merch.length);
merch.push("sticker"); 
merch.push("book");
merch.pop();
merch.shift("sticker");
merch.unshift();
let clothes =[
    "hoodie",
    "tshirt",
    "socks"
]
let shop = merch.concat(clothes);
 console.log(shop);


// let result = (1===1) ? "true": "false";
// if(1===1) {
//     let result= "true"; 
// }
// else {
//     result = "false";
// }
customer = "Alish"
let selectedItem;
let finalItem = selectedItem ?? "hoodie";
if(selectedItem) {
    console.log("buy");
} else { 
    console.log("don't buy");
}
for (let i =0; i<shop.length; i++) {
    console.log(i);
}
function countItems(){
    console.log(shop.length);
}
function canBuyItem (item) {
    return shop.includes(item);
}
canBuyItem("hoodie");
canBuyItem("jeans");

// function show(name, price) {
//     console.log(`${shop.name} costs ${shop.price}`)
// }
// show("book", 1000);
// show(item);
// function show ({name, price}) {
//     console.log(`${name} costs ${price}`)
// }
// show(item);

function show ({name:n, price:p}) {   //ez to use// 
    console.log(`${n} costs ${p}`)
}
show(item);

let countItem = function () {       
    console.log(shop.length);
}
 
// let canBuyIt = function (item) {
//     return shop.includes(item);
// }
let canBuyIt = (item) =>    //короче и красивее 
    shop.includes(item);

// let countItem =() =>   
// shop.length;
shop.pop("hoodie");
shop.shift("hoodie"); 
let hoodies = shop.filter((item) => item  === "hoodie")
hoodies;
let repairedItems = shop.map((item) => `repaired ${item}`)
function buy (card, price, ...shop) {
    console.log(`buy ${shop} with ${card} for ${price}`)
}
buy("halyk", "4500", ...shop);

let {firstName, age, ...other} = { //REST //
    firstName: "Adil",
    age: 23,
    compName: "NU",
    role: "student"
}
other;
const myName = "Adiiil";
console.log([...myName]); //spread// 
const welcome = ["Administraciya", "Univera"];
const Words = ["hello", ...welcome, "how can i help u ? " ];
console.log(Words);

// export 
export {countItem, canBuyItem};   //import {countItem, canBuyItem} from "./letcustomer.js"
// export as 
export {countItem as cI, canBuyItem as cBI};


