function calculate() {
  var miles = document.getElementById("miles").value;
  var meals = document.getElementById("meals").value;

  var transport = miles * 0.404 * 52;
  var food = meals * 2.5 * 52;

  var total = transport + food;

  document.getElementById("result").innerText =
    "Your estimated annual carbon footprint: " +
    total.toFixed(2) +
    " kg CO₂";
}
