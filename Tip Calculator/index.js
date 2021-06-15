let totalValue = document.querySelector("#total");
const bill = document.querySelector("#bill_value");
const tip = document.querySelector("#tip_value");

function calculateTotal(bill, tip) {
    let billValue = parseFloat(bill.value);
    let tipValue = parseFloat(tip.value);
    let tipPercentage = billValue * (tipValue / 100);
    let total = billValue + tipPercentage;
    if (total > 0) {
        return total;
    } else {
        return 0;
    }
}

function changeTotal() {
    totalValue.innerHTML = `[$${calculateTotal(bill, tip)}]`;
}

bill.oninput = function () {
    changeTotal();
};

tip.oninput = function () {
    changeTotal();
};
