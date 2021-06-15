let totalValue = document.querySelector("#total");
let totalPerson = document.querySelector("#total_per_person");
const bill = document.querySelector("#bill_value");
const tip = document.querySelector("#tip_value");
const numPeople = document.querySelector("#people_value");

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

function calculateTotalPerPerson() {
    let total = calculateTotal(bill, tip);
    let people = parseFloat(numPeople.value);
    let totalPerPerson = total / people;
    if (total > 0 && typeof total === "number") {
        return totalPerPerson;
    } else {
        return 0;
    }
}

function updateTotal() {
    totalValue.innerHTML = `[$${calculateTotal(bill, tip)}]`;
    totalPerson.innerHTML = `[$${calculateTotal(bill, tip)}]`;
}

function updateTotalPeople() {
    totalPerson.innerHTML = `[$${calculateTotalPerPerson()}]`;
}

bill.oninput = function () {
    updateTotal();
};

tip.oninput = function () {
    updateTotal();
};

numPeople.oninput = function () {
    updateTotalPeople();
};
