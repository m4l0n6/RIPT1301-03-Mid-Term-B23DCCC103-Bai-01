function sum_function() {
  let numb1 = document.getElementById("numb1").value;
  let numb2 = document.getElementById("numb2").value;
  let result = Number(numb1) + Number(numb2);
  if (numb1 === '' || numb2 === '') {
    alert('Please enter valid numbers');
  } else {
      document.getElementById("output").innerHTML = "SUM: " + result ;
  }
}

function subtract_function() {
  let numb1 = document.getElementById("numb1").value;
  let numb2 = document.getElementById("numb2").value;
  let result = Number(numb1) - Number(numb2);
  if (numb1 === '' || numb2 === '') {
    alert('Please enter valid numbers');
  } else {
      document.getElementById("output").innerHTML = "SUBTRACT: " + result;
  }
}

function multiply_function() {
  let numb1 = document.getElementById("numb1").value;
  let numb2 = document.getElementById("numb2").value;
  let result = Number(numb1) * Number(numb2);
  if (numb1 === '' || numb2 === '') {
    alert('Please enter valid numbers');
  } else {
      document.getElementById("output").innerHTML = "MULTIPLY: " + result;
  }
}

function divide_function() {
  let numb1 = document.getElementById("numb1").value;
  let numb2 = document.getElementById("numb2").value;
  if (numb1 === '' || numb2 === '') {
    alert('Please enter valid numbers');
  } else if (numb2 == 0) {
      document.getElementById("output").innerHTML = "Error: Cannot divide by zero";
  } else {
      let result = Number(numb1) / Number(numb2);
      document.getElementById("output").innerHTML = "DIVIDE: " + result;
  }
}

function reset_function() {
  document.getElementById("numb1").value = "";
  document.getElementById("numb2").value = "";
  document.getElementById("output").innerHTML = "";
}