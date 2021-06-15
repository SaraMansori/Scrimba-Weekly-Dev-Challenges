let total = document.querySelector("#total").value;
let billValue = document.querySelector("#bill_value");
let tipValue = document.querySelector("#tip_value");

function calculateTotal(billValue, tipValue) {
    let bill = billValue.value;
    let tip = tipValue.value;
    let total = bill * tip;
    return total;
}

function changeTotal() {
    total = calculateTotal(billValue, tipValue);
}

billValue.oninput = function () {
    changeTotal();
};

tipValue.oninput = function () {
    changeTotal();
};
