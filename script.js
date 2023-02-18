"use strict";
const form = document.querySelector("form");

const submitBtn = document.querySelector("#submit-btn");
const tableBody = document.querySelector("tbody");

let arr = [];

form.addEventListener("submit", submitForm);


function ConstructorR(id,book_name,issued_to,issued_time,status){
  
  this.id= id;
  this.book_name = book_name;
  this.issued_to = issued_to;
  this.issued_time = issued_time;
  this.status = status;
}


function submitForm(e) {
  e.preventDefault();

  const bookName =
    document.querySelector("#bookName").value;
  const issuedTo =
    document.querySelector("#issuedTo").value;
  const today = new Date();

  if(bookName && issuedTo){
    let issued_time =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear() +
      " at " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();

    const status = "not returned";

    let obj = new ConstructorR(
      arr.length + 1,
      bookName,
      issuedTo,
      issued_time,
      status
    );

    arr.push(obj);

    document.querySelector("#bookName").value = null;
    document.querySelector("#issuedTo").value = null;
    display();
  }
  
}
 console.log(arr);

 

function display() {
  tableBody.innerHTML = "";
  arr.forEach((value) => {
   
    
    let tr = document.createElement("tr");
    
    let td1 = document.createElement("td");
    td1.textContent = value.id;
    let td2 = document.createElement("td");
    td2.innerText = value.book_name;
    let td3 = document.createElement("td");
    td3.innerText = value.issued_to;
    let td4 = document.createElement("td");
    td4.innerText = value.issued_time;

    let td5 = document.createElement("td");

    const td5Input = document.createElement('span');
    td5Input.textContent = value.status;
        td5Input.style.color=(
          value.status === "returned" ? "green" : "red"
        );
    td5Input.contentEditable = true;
    
  
      td5Input.addEventListener("input", function () {
        value.status = td5Input.textContent;
        td5Input.style.color=(value.status === "not returned"? "red" : "green");
      }); 
    
     
    td5.append(td5Input);
    tr.append(td1,td2,td3,td4,td5);
    tableBody.append(tr);

    
  });
}


