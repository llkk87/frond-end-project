const calcBtnEl = document.querySelector("#calculate");

calcBMI = function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the output fields!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100; //convert m to cm

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2); //round 2 places

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    status = "Heatlhy";
  } else if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  } else if (BMI >= 30) {
    status = "Obese";
  }

  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id="comment">${status}</span>`;
};

calcBtnEl.addEventListener("click", calcBMI);
