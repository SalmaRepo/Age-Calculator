let birthDate = document.getElementById("birth");
let submit = document.querySelector(".calcButton");
let display = document.querySelector(".result");
let year = document.querySelector(".num1");
let month = document.querySelector(".num2");
let days = document.querySelector(".num3");
display.style.display = "none";
birthDate.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calc();
  }
});
submit.addEventListener("click", calc);


function calc() {
  let birth = new Date(birthDate.value).toISOString();
  let birthYear = parseInt(birth.split("-")[0]);
  let birthMonth = parseInt(birth.split("-")[1]);
  let birthDay = parseInt(birth.split("-")[2]);
  let curr = new Date();
  let currYear = curr.getFullYear();
  let currMonth = curr.getMonth() + 1;
  let currDay = curr.getDate();
  let ageYear = 0;
  let ageMonth = 0;
  let ageDay = 0;
  ageYear = currYear - birthYear;

  if (currMonth >= birthMonth) {
    ageMonth = currMonth - birthMonth;
  } else if (currMonth < birthMonth) {
    ageMonth = 12 - (birthMonth - currMonth);
    ageYear--;
  }

  if (currDay >= birthDay) {
    ageDay = currDay - birthDay;
  } else {
    ageMonth--;
    let noOfDays = new Date(currYear, currMonth, 0).getDate();
    ageDay = noOfDays - birthDay + currDay;
  }

  display.style.display = "block";
  year.innerHTML = ageYear + " ";
  month.innerHTML = ageMonth + " ";
  days.innerHTML = ageDay + " ";
}
