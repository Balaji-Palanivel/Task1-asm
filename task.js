const form = document.getElementById("form");
const totalBill = document.getElementById("bill");

const tipPercentage = document.getElementById("percentage");
const percentageOutput = document.getElementById("percentage-output");
const output = document.getElementById("output");
const output1 = document.getElementById("output1");
form.addEventListener("change", calculateTip);
tipPercentage.oninput = calculateTip;

function calculateTip() {
       const tipAmount = ((totalBill.value * (tipPercentage.value / 100))); 
        const totaltip = (parseInt(totalBill.value) + parseInt(tipAmount));
        output1.innerText =`Total Tip  ${totaltip}`;
        output.innerText =`Tip Amount ${tipAmount}`;
       percentageOutput.innerText = `${tipPercentage.value}%`;
   }
calculateTip();
