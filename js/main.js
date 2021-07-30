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
        table += `<tr><td>${formatDesc(item.desc)}</td><td>${item.amount}</td><td>${formatValue(item.value)}</td><td>
        <button onclick="setUpdate(${list.indexOf(item)})" class="btn btn-default"><i class="bi bi-pencil-square"></i></button> | 
        <button class="btn btn-default"><i class="bi bi-x-square"></i></button></td></tr>`
        })
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
    
}

function formatDesc(desc){
    let str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value){
    let str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "$ " + str;
    return str;
}

function addData(){
  let desc = document.getElementById("desc").value;
  let value = document.getElementById("value").value;
  let amount = document.getElementById("amount").value;

  list.unshift({"desc":desc,"value":value,"amount":amount});
  setList(list);
}

function setUpdate(id){
    let obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("value").value = obj.value;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIdUpdate").innerHTML = `<input id="idUpdate" type="hidden" value="${id}">`;
}

function resetForm(){
    document.getElementById("desc").value = "";
    document.getElementById("value").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIdUpdate").innerHTML = "";
}

function updateData(){
    let id = document.getElementById("idUpdate").value;
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let value = document.getElementById("value").value;

    list[id] = { "desc": desc, "amount": amount, "value": value};
    resetForm();
    setList(list);
}

setList(list);
console.log(getTotal(list));
