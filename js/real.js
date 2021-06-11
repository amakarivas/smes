
const addModal = document.querySelector(".modal")
const addModalForm = document.querySelector(".form submit")

function openNav() {
    document.getElementById("mySidepanel").style.width = "240px";
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
  var editor = document.querySelector(".indit")
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var editor = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };
  editor.onclick = function () {
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
  

class Record {
  constructor(customerName, quantity, unitPrice, amount) {
    this.customerName = customerName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.amount = amount;
  }
} 

class UX {
  static displayRecords() {
    const records = Store.getRecords();

    records.forEach((record) => UX.addRecordToList(record));
  }
  static addRecordToList(record) {
    const list = document.querySelector(".work");
    
    
    const row = document.createElement("tr");


    row.innerHTML = `
     <td>${record.customerName}</td>
     <td>${record.quantity}</td>
     <td>${record.unitPrice}</td>
     <td>${record.amount}</td>
     <td class="indit"><button class="edi">Edit</button></td>
     <td><a><button class="del">Delete</button></a></td>
    `;

    list.appendChild(row);
  }
 




static editRecord(target) {
  var editor = document.querySelector(".edi")
  editor.onclick = function () {
    modal.style.display = "block";
  }
}






   
  static deleteRecord(target) {
    if(target.classList.contains('del')) {
      target.parentElement.parentElement.parentElement.remove();
    }
  }

 
 





  static clearFields() {
    document.querySelector(".cusname").value = ""
    document.querySelector(".quantity").value = ""
    document.querySelector(".unit").value = ""
    document.querySelector(".amount").value = ""
  }
}


/*LOCAL STORAGE*/
class Store {
 static getRecords() {
  let records
  if(localStorage.getItem("records")=== null) {
    records = [];
  }else {
    records = JSON.parse(localStorage.getItem("records"))
  }
  return records;
 }

static addRecord(record) {
  const records = Store.getRecords()

  records.push(record)

  localStorage.setItem("records", JSON.stringify(records))
}

static removeRecord(rem){
  const records = Store.getRecords()

  records.forEach((record, index) => {
    if(record.rem === rem) {
    records.splice(index, 1)
    }
  })
  localStorage.setItem('records', JSON.stringify(records))

}
}






document.addEventListener("DOMContentLoaded", UX.displayRecords)

/*ADD A BOOK */
document.querySelector("form").addEventListener('submit', (e) => {
  e.preventDefault();
  /*GET FORM VALUES*/
  const customerName = document.querySelector(".cusname").value
  const quantity = document.querySelector(".quantity").value
  const unitPrice = document.querySelector(".unit").value
  const amount = document.querySelector(".amount").value


  


  const record = new Record(customerName, quantity, unitPrice, amount);
  console.log(record);

  UX.addRecordToList(record);
  /*add to store*/
  Store.addRecord(record);



/*FOR THE POP UP*/



  /*CLEAR FIELDS*/ 
  UX.clearFields();
})


/*REMOVE A RECORDS*/
document.querySelector(".work").addEventListener('click', (e) => {
  /*remove book from ui*/
  UX.deleteRecord(e.target)
  /*remove book from store*/
  Store.removeRecord
  (e.target.parentElement.previousElementSibling.remove)

});








