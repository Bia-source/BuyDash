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
    document.getElementById("totalValue").innerHTML = formatValue(total);
}

function setList(list){
    let table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead>';
    list.forEach(item => {
        table += `<tr><td>${formatDesc(item.desc)}</td><td>${formatAmount(item.amount)}</td><td>${formatValue(item.value)}</td><td>
        <button onclick="setUpdate(${list.indexOf(item)})" class="btn btn-default"><i class="bi bi-pencil-square"></i></button> | 
        <button onclick="deleteData(${list.indexOf(item)})" class="btn btn-default"><i class="bi bi-x-square"></i></button></td></tr>`
        })
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
    getTotal(list);
}

function formatAmount(amount){
    return parseInt(amount);
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

function validation(){
  let desc = document.getElementById("desc").value;
  let value = document.getElementById("value").value;
  let amount = document.getElementById("amount").value;
  var errors = "";
  document.getElementById("errors").style.display = "none"

  value = parseFloat(value);
  if(desc === ""){
      errors += `<p>Fill out description</p>`
  }
  if(amount === ""){
      errors += `<p>Fill out a quantity</p>`
  }else if(amount != parseInt(amount)){
    errors += `<p>Fill out a valid amount</p>`
  }
  if(value === ""){
    errors += `<p>Fill out a value</p>`
  }else if(value != parseFloat(value)){
    errors += `<p>Fill out a valid value</p>`
  }
  if(errors != ""){
      document.getElementById("errors").style.display = "block"
      document.getElementById("errors").style.backgroundColor = "rgba(85,85,85,0.3)"
      document.getElementById("errors").style.color = "white"
      document.getElementById("errors").style.padding = "10px"
      document.getElementById("errors").style.margin = "10px"
      document.getElementById("errors").style.borderRadius= "13px"
      document.getElementById("errors").innerHTML = "<h3>Error:</h3>" + errors;
      return 0;
  }else{
      return 1;
  }
}

function addData(){
    if(!validation()){
        return;
    }
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
    document.getElementById("errors").style.display = "none"
}

function updateData(){
    if(!validation()){
        return;
    }
    let id = document.getElementById("idUpdate").value;
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let value = document.getElementById("value").value;

    list[id] = { "desc": desc, "amount": amount, "value": value};
    resetForm();
    setList(list);
}

function deleteData(id){
   if(confirm("Delete this item?")){
       list.splice(id,1);
       setList(list);
   }
}

setList(list);

