const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteOne() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    calculateResult();
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});
