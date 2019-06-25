let input =0 , app_purchase= 0,ban_purchase=0,org_purchase=0,quant_app=0;
function getval(){
input = document.querySelector("input").value; //for first input 
}
let span = document.querySelector('#totalPriceSpan'); //remaining rs
let appleRs = document.querySelector('#numberapple'); // price apple
let bananaRs = document.querySelector('#numberbanana'); //price babana
let orangeRs = document.querySelector('#numberorange'); //price orange
let appleMultiRupees = 10 * appleRs; 
let bananaMultiRupees = 15 * bananaRs; 
let orangeMultiRupees = 07 * orangeRs; 
//apple
function appleincrement() {
    var quant_app = document.querySelector("#numberapple").value++;
    app_purchase = app_purchase + 10; 
    show();
    
}
function appledecrease() {
    let quan_app = document.querySelector("#numberapple").value--;
    app_purchase = app_purchase - 10; 
    show();
    
}
//banana
function bananaincrement() {
    let quan_banana = document.querySelector("#numberbanana").value++;
    ban_purchase = ban_purchase + 7; 
    show();
    
}
function bananadecrease() {
    let quan_banana = document.querySelector("#numberbanana").value--;
    ban_purchase = ban_purchase - 7; 
    show();
}

//orange
function orangeincrement() {
    let quan_org = document.querySelector("#numberorange").value++;
    org_purchase = org_purchase + 15; 
    show();
    
}
function orangedecrease() {
    let quan_org = document.querySelector("#numberorange").value--;
    org_purchase = org_purchase - 15; 
    show();
}

// alert(span.innerHTML);
 function show() {
    appleMultiRupees =1; bananaMultiRupees=1;orangeMultiRupees=1;
    var totalbill = app_purchase + ban_purchase + org_purchase;
    document.querySelector("span").innerHTML = totalbill;
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