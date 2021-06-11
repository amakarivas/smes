function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/*THE MAIN JS OF THE WHOLE PROJECT*/
// Get the modal
var modal = document.getElementById("myModal");

var rowBeingEdited;
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var editor = document.querySelector(".edit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

editor.onclick = function (e) {
  const row = e.target.parentNode;
  const dataList = row.children;
  const name = dataList[0].textContent;
  const quantity = dataList[1].textContent;
  const price = dataList[2].textContent;
  const amount = dataList[3].textContent;
  console.log({ name, quantity, price, amount });
  myModal.querySelector(".cusname").value = name;
  myModal.querySelector(".quantity").value = quantity;
  myModal.querySelector(".unit").value = price;
  myModal.querySelector(".amount").value = amount;
  rowBeingEdited = row;
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


/* FOR THE SUBMIT EVENT*/ 
addModalForm.addEventListener("submit", () => {
  e.preventDefault();
  console.log("button submitted")
})

















/*CONNECTION*/
function onFormSubmit() {
  var formData = readFormData();
  if (rowBeingEdited) {
    updateRecord(formData);
  } else {
    insertNewRecord(formData);
  }
  modal.style.display = "none";
  // readFormData();
  // away();
}

function readFormData() {
  var formData = {};
  formData["cusname"] = document.querySelector(".cusname").value;
  formData["quantity"] = document.querySelector(".quantity").value;
  formData["unit"] = document.querySelector(".unit").value;
  formData["amount"] = document.querySelector(".amount").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.cusname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.quantity;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.unit;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.amount;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick ="onEdit(this)">Edit</a>`;
  cell4 = newRow.insertCell(5);
  cell4.innerHTML = `<a onClick ="onEdit(this)">Delete</a>`;
  cell4 = newRow.insertCell(6);
}

function updateRecord(data) {
  rowBeingEdited.children[0].textContent = data.cusname;
  rowBeingEdited.children[1].textContent = data.quantity;
  rowBeingEdited.children[2].textContent = data.unit;
  rowBeingEdited.children[3].textContent = data.amount;
  rowBeingEdited = null;
}

function resetForm() {
  document.querySelector("cusname").value = "";
  document.querySelector("quantity").value = "";
  document.querySelector("unit").value = "";
  document.querySelector("amount").value = "";
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.querySelector("cusname").value = selectedRow.cells[0].innerHTML;
  document.querySelector("quantity").value = selectedRow.cells[1].innerHTML;
  document.querySelector("unit").value = selectedRow.celle[2].innerHTML;
  document.querySelector("amount").value = selectedRow.cells[3].innerHTML;
}

function onSub() {}

const theEdit = document.querySelector(".edit");
const theDone = document.querySelector(".done");
const theWork = document.querySelector(".work");
const theRow = document.querySelector(".row1");
const theModal = document.querySelector(".modal-content");


