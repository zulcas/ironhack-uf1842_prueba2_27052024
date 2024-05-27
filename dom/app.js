// Capturamos elementos DOM
let buttonCalculate = document.querySelector('#calculate');
let billAmount = document.querySelector('#bill-amount');
let percentageTip = document.querySelector('#percentage-tip');
let tipAmount = document.querySelector('#tip-amount');
let total = document.querySelector('#total');


//Asociamos evento click
buttonCalculate.addEventListener('click', getTipAmount);

//Funciones
function getTipAmount(){
    //calculamos valor campo Tip Amount
    let tipAmountValue = ((Number(billAmount.value)*Number(percentageTip.value))/100).toFixed(2);
    //Calculamos gasto total
    let totalValue = (Number(billAmount.value) + Number(tipAmountValue)).toFixed(2);
    console.log(tipAmountValue, totalValue);
    //
    displayResults(tipAmountValue, totalValue);
}
function displayResults(tipAmountValue, totalValue){
    tipAmount.value = tipAmountValue;
    total.value = totalValue;
}

