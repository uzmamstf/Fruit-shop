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
let input = document.querySelector('#myPriceInput'); //for first input 
let span = document.querySelector('#totalPriceSpan'); //remaining rs

let appleRs = document.querySelector('#numberapple'); // price apple
let bananaRs = document.querySelector('#numberbanana'); //price babana
let orangeRs = document.querySelector('#numberorange'); //price orange

let appleMultiRupees = 10 * appleRs; 
let bananaMultiRupees = 15 * bananaRs; 
let orangeMultiRupees = 07 * orangeRs; 



//apple
function appleincrement() {
    let quan = document.querySelector("#numberapple").value++;
    
}
function appledecrease() {
    let quan = document.querySelector("#numberapple").value--;
}

//banana
function bananaincrement() {
    let quan = document.querySelector("#numberbanana").value++;
    
}
function bananadecrease() {
    let quan = document.querySelector("#numberbanana").value--;
}

//orange
function orangeincrement() {
    let quan = document.querySelector("#numberorange").value++;
    
}
function orangedecrease() {
    let quan = document.querySelector("#numberorange").value--;
}

// alert(span.innerHTML);
 function show() {

    let totalbill = appleMultiRupees +  bananaMultiRupees + orangeMultiRupees;
    let netremainingval = input - totalbill;
    span.innerHTML = netremainingval.value;
}

// input.addEventListener("input", () => {
//     document.querySelector('#totalPriceSpan').innerHTML = input.value;
// });




// store price of fruits in variables





// function increaseValue() {
//     let value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
// }

// function decreaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.getElementById('number').value = value;
// }

// codepen
// function increaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
// }

// function decreaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.getElementById('number').value = value;
// }