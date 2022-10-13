"use strict";

function DocReset() {
  document.getElementById("FirstName").value = "";
  document.getElementById("LastName").value = "";
  document.getElementById("E-mail").value = "";
  document.getElementById("City").value = "";
  document.getElementById("State").value = "none";
  document.getElementById("zip").value = "";
  document.getElementById("TNC").value = "";
  let validfeedbacks = document.getElementsByClassName("valid-feedback");
  let invalidfeedbacks = document.getElementsByClassName("invalid-feedback");

  for (let i = 0; i < validfeedbacks.length; i++) {
    validfeedbacks[i].style.display = "none";
  }
  for (let i = 0; i < invalidfeedbacks.length; i++) {
    invalidfeedbacks[i].style.display = "none";
  }
}
function validate() {
  let fn = document.getElementById("FirstName").value;
  let ln = document.getElementById("LastName").value;
  let eml = document.getElementById("E-mail").value;
  let ct = document.getElementById("City").value;
  let st = document.getElementById("State").value;
  let zp = document.getElementById("zip").value;
  let tc = document.getElementById("TNC").checked;

  let error = false;

  if (fn.length > 2) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-valid").style.display = "none";
    document.getElementById("first-name-invalid").style.display = "block";
    error = true;
  }

  if (ln.length > 2) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-valid").style.display = "none";
    document.getElementById("last-name-invalid").style.display = "block";
    error = true;
  }
  if (
    eml.includes("@") &&
    eml.includes(".") &&
    eml.indexOf("@") != 0 &&
    eml.length - eml.lastIndexOf(".") >= 4 //length starts from 1  and index starts from 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
    error = true;
  }

  if (ct.length >= 3) {
    document.getElementById("city-valid").style.display = "block";
    document.getElementById("city-invalid").style.display = "none";
  } else {
    document.getElementById("city-invalid").style.display = "block";
    document.getElementById("city-valid").style.display = "none";
    error = true;
  }

  let zipcode = parseInt(zp); //alternate check !isNaN(parseInt(zp))

  if (!isNaN(zipcode) && zp.length === 6 && zipcode.toString().length === 6) {
    document.getElementById("zip-valid").style.display = "block";
    document.getElementById("zip-invalid").style.display = "none";
  } else {
    document.getElementById("zip-invalid").style.display = "block";
    document.getElementById("zip-valid").style.display = "none";
    error = true;
  }

  if (st !== "none") {
    document.getElementById("state-valid").style.display = "block";
    document.getElementById("state-invalid").style.display = "none";
  } else {
    document.getElementById("state-valid").style.display = "none";
    document.getElementById("state-invalid").style.display = "block";
    error = true;
  }

  if (!tc) {
    document.getElementById("invalid-tnc").style.display = "block";
    error = true;
  } else {
    document.getElementById("invalid-tnc").style.display = "none";
  }

  if (!error) {
    alert("Your details have been saved successfully!");
    DocReset();
  }
}
