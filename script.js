/*
- sb se pehle mjhe price input ki value get krni hai
- phir mjhe usko total price k span me show krna hai

*/
// function showInputValue() {
//     let getValueOfInputAndShow = document.querySelector('#totalPriceSpan').innerHTML =
//         document.querySelector('#myPriceInput').value;
// }

/*
let input = document.getElementById("myPriceInput");
let span = document.getElementById("totalPriceSpan");

input.addEventListener("input", () => {
    document.getElementById('totalPriceSpan').innerHTML = input.value;
});
*/
// third method
// get value form input and show in span
let input = document.querySelector('#myPriceInput');
let span = document.querySelector('#totalPriceSpan');

input.addEventListener("input", () => {
    document.querySelector('#totalPriceSpan').innerHTML = input.value;
});
// store price of fruits in variables

let appleRs = 10;
let bananaRs = 07;
let orangeRs = 15;



/*
function increaseValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}*/
// codepen
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}