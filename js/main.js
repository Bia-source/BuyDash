var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "1", "value": "15.00"},
];

function getTotal(list){
    let total = 0;
    list.forEach(item => {
        total += item.value * item.amount;
    }) 
    return total;
}

function setList(list){
    let table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead>';
    list.forEach(item => {
        table += `<tr><td>${item.desc}</td><td>${item.amount}</td><td>${item.value}</td><td>Edit | Delete</td></tr>`
    })
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

setList(list);
console.log(getTotal(list));