document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("sel1");
  var options = select.options;

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "#add8e6"; // Light blue background
      this.style.color = "#fff"; // White text color
    });

    options[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = ""; // Reset to default
      this.style.color = ""; // Reset to default
    });
  }
});

let exp_type;
// 質問を消したのでコメントアウト
// function toggleDivs(element) {
//   var exp = element.querySelector("p");
//   exp_type = exp.textContent;
//   var prev_page = document.getElementById("first");
//   var next_page = document.getElementById("second");
//   prev_page.style.display = "none";
//   next_page.style.display = "block";
// }

// //////////////////////////////////////////////////////////////////
// ============================Second =================================

var license = "";

// function updateNextButtonState() {
//   if (license === "") {
//     document.getElementById("second-next").classList.add("disabled");
//   } else {
//     document.getElementById("second-next").classList.remove("disabled");
//   }
// }

function disableOtherButtons(clickedId) {
  var buttons = ["redtaxi", "blacktaxi", "nolicense"];
  buttons.forEach(function (buttonId) {
    if (buttonId !== clickedId) {
      document.getElementById(buttonId).classList.add("disabled");
    }
  });
}
function enableAllButtons() {
  var buttons = ["redtaxi", "blacktaxi", "nolicense"];
  buttons.forEach(function (buttonId) {
    document.getElementById(buttonId).classList.remove("disabled");
  });
}

function secondCheck1() {
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";

  var img_container_dom = document.querySelector(".next-img-second");
  var red_taxi_dom = document.getElementById("redtaxi");

  if (license === "普通免許") {
    license = "";
  } else {
    license = "普通免許";
  }
  // Hide the first button
  prev_page.style.display = "none";
  // Display the second div
  next_page.style.display = "block";

  // updateNextButtonState();
}
function secondCheck2() {
  var img_container_dom = document.querySelector(".next-img-second");
  var black_taxi_dom = document.getElementById("blacktaxi");
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
  if (license === "⼆種免許") {
    license = "";
    enableAllButtons();
    img_container_dom.style.top = "2.5rem";
    black_taxi_dom.style.backgroundColor = "";
  } else {
    license = "⼆種免許";
  }
  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";

  // updateNextButtonState();
}

function secondCheck3() {
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
  var no_license_dom = document.getElementById("nolicense");

  if (license === "免許は持っていない") {
    license = "";
    enableAllButtons();
    no_license_dom.style.backgroundColor = "";
  } else {
    license = "免許は持っていない";
    disableOtherButtons("nolicense");
  }
  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";

  // updateNextButtonState();
}
// Initial check to ensure the second-next button is disabled on page load
function gotoFirst() {
  var prev_page = document.getElementById("first");

  var secondpage = document.getElementById("second");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second Page
  secondpage.style.display = "none";

  enableAllButtons();
}

///////////////////////////////////////////////////////////////
// ==========================Third=============================
function secondHidden() {
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}
function updateThirdNextButtonState() {
  if (license === "") {
    document.getElementById("third-next").classList.add("disabled");
  } else {
    document.getElementById("third-next").classList.remove("disabled");
  }
}

var changing_jobs_time = "";
// function disableJob(clickedId) {
//   var buttons = ["plane", "train", "bus", "bike", "rickshaw"];
//   buttons.forEach(function (buttonId) {
//     if (buttonId !== clickedId) {
//       document.getElementById(buttonId).classList.add("disabled");
//     }
//   });
// }

function thirdCheck(element) {
  changing_jobs_time = element.getAttribute("data-value");
  var prev_page = document.getElementById("third");
  var next_page = document.getElementById("four");
  // Hide the first button
  prev_page.style.display = "none";
  // Display the second div
  next_page.style.display = "block";
}
// ///////////////////////////Fourth/////////////////////////////////////
// ////////////////////////////////////////////////////////////////
function gotoSecond() {
  var prev_page = document.getElementById("second");

  var next_page = document.getElementById("third");
  enableAllButtons();
  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

let changing_job_reasons = [];

function updateFourNextButtonState() {
  // Check if at least one element in the array is not null

  if (changing_job_reasons.length !== 0) {
    document.getElementById("four-next").classList.remove("disabled");
  } else {
    document.getElementById("four-next").classList.add("disabled");
    document.querySelector(".next-img-four").style.top = "0px";
  }
}

function fourClick(element) {
  let clicked_reason = element.getAttribute("data-value");
  if (changing_job_reasons.includes(clicked_reason)) {
    changing_job_reasons = changing_job_reasons.filter(
      (reason) => reason !== clicked_reason
    );
    // element.style.backgroundColor = "";
    element.classList.add("bg-white");
    element.style.color = "currentcolor";
  } else {
    changing_job_reasons.push(clicked_reason);
    element.classList.remove("bg-white");
    element.style.backgroundColor = "#93d7dc";
    element.style.color = "#0d8ea3";
  }
  const img_container_dom = document.querySelector(".next-img-four");
  img_container_dom.style.top = "380px";
  updateFourNextButtonState();
}
// /////////////////////////   Five    ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function gotoThird() {
  var prev_page = document.getElementById("third");

  var next_page = document.getElementById("four");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

function fourHidden() {
  var prev_page = document.getElementById("four");

  var next_page = document.getElementById("five");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

let taxi_attracts = [];
function updateFiveNextButtonState() {
  if (taxi_attracts.length !== 0) {
    document.getElementById("five-next").classList.remove("disabled");
  } else {
    document.getElementById("five-next").classList.add("disabled");
    document.querySelector(".next-img-five").style.top = "0px";
  }
}

function fiveClick(element) {
  let taxi_attract = element.getAttribute("data-value");
  if (taxi_attracts.includes(taxi_attract)) {
    taxi_attracts = taxi_attracts.filter((reason) => reason !== taxi_attract);
    element.classList.add("bg-white");
    element.style.color = "currentcolor";
  } else {
    taxi_attracts.push(taxi_attract);
    element.classList.remove("bg-white");
    element.style.backgroundColor = "#93d7dc";
    element.style.color = "#0d8ea3";
  }
  const img_container_dom = document.querySelector(".next-img-five");
  img_container_dom.style.top = "250px";
  updateFiveNextButtonState();
}

// ////////////// newstep /////////////////////////

// //////////////////////////  Six  ///////////////////////////////////
// /////////////////////////////////////////////////////////////
function gotoFour() {
  var prev_page = document.getElementById("four");

  var next_page = document.getElementById("five");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

function fiveHidden() {
  var prev_page = document.getElementById("five");

  var next_page = document.getElementById("six");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

let residence = "";

function disableOtherArea(clickedId) {
  var buttons = ["sixArea1", "sixArea2", "sixArea3", "sixArea4", "sixArea5"];
  buttons.forEach(function (buttonId) {
    if (buttonId !== clickedId) {
      document.getElementById(buttonId).classList.add("disabled");
    }
  });
}

function enableAllArea() {
  var buttons = ["sixArea1", "sixArea2", "sixArea3", "sixArea4", "sixArea5"];
  buttons.forEach(function (buttonId) {
    document.getElementById(buttonId).classList.remove("disabled");
  });
}

function sixAreaClick(element) {
  const img_container_dom = document.querySelector(".next-img-six");
  if (residence !== "") {
    residence = "";
    element.classList.add("bg-white");
    element.style.color = "currentcolor";
    img_container_dom.style.top = "0px";
    enableAllArea();
    updateSixNextButtonState();
  } else {
    residence = element.getAttribute("data-value");
    element.style.backgroundColor = "#93d7dc";
    element.classList.remove("bg-white");
    element.style.color = "#0d8ea3";
    img_container_dom.style.top = "180px";
    disableOtherArea(element.id);
    updateSixNextButtonState();
  }
}
function updateSixNextButtonState() {
  if (commute_ways.length !== 0) {
    document.getElementById("six-next").classList.remove("disabled");
  } else {
    document.getElementById("six-next").classList.add("disabled");
  }
}
let commute_ways = [];

function sixWayClick(element) {
  let six_way = element.getAttribute("data-value");
  const img_container_dom = document.querySelector(".next-img-six");
  if (commute_ways.includes(six_way)) {
    commute_ways = commute_ways.filter((reason) => reason !== six_way);
    element.classList.add("bg-white");
    element.style.color = "currentcolor";
  } else {
    commute_ways.push(six_way);
    element.style.backgroundColor = "#93d7dc";
    element.classList.remove("bg-white");
    element.style.color = "#0d8ea3";
  }
  if (commute_ways.length === 0) {
    img_container_dom.style.top = "0px";
    updateSixNextButtonState();
  } else {
    updateSixNextButtonState();
    img_container_dom.style.top = "260px";
  }
}
document.addEventListener("DOMContentLoaded", (event) => {
  const img_container_dom = document.querySelector(".next-img-six");
  let inputStation = document.getElementById("nearest_station");
  inputStation.addEventListener("input", () => {
    if (inputStation.value.length > 1) {
      img_container_dom.style.top = "260px";
    } 
  });
});
// six input

var post_number = "";
var nearest_station = "";
async function checkPost(post_num) {
  const postError = document.getElementById("postInputError");
  post_number = post_num;
  await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${post_num}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        document.getElementById("newstep-next").classList.remove("disabled");
        newStepHidden();
        postError.style.display = "none";
        postError.classList.remove("shake");
      } else {
        console.log("Address not found");
        postError.style.display = "block";
        postError.classList.add("shake");
        setTimeout(() => (postError.style.display = "none"), 2000); // Remove class after animation
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      postError.style.display = "block";
      postError.classList.add("shake");
      setTimeout(() => postError.classList.remove("shake"), 500); // Remove class after animation
      document.getElementById("newstep-next").classList.add("disabled");
    });
}
function validateNumberInput(input) {
  // Remove non-numeric characters
  input.value = input.value.replace(/[^0-9]/g, "");
}
document.addEventListener("DOMContentLoaded", (event) => {
  let inputField = document.getElementById("custom-sixinput-one");
  const postError = document.getElementById("postInputError");
  inputField.addEventListener("input", () => {
    if (inputField.value.length === 7) {
      checkPost(inputField.value);
    } else if (inputField.value.length > 7) {
      postError.style.display = "block";
      postError.classList.add("shake");
      setTimeout(() => (postError.style.display = "none"), 2000);
    }
  });
});

function gotoFive() {
  var prev_page = document.getElementById("five");
  var next_page = document.getElementById("six");
  post_number = "";
  nearest_station = "";
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
}
function sixHidden() {
  var prev_page = document.getElementById("six");
  nearest_station = document.getElementById("nearest_station").value;

  var next_page = document.getElementById("newstep");

  // Hide the first button
  prev_page.style.display = "none";
  // Display the second div
  next_page.style.display = "block";
}
function gotoSix() {
  var prev_page = document.getElementById("six");
  var next_page = document.getElementById("newstep");
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
}
function newStepHidden() {
  var prev_page = document.getElementById("newstep");
  var next_page = document.getElementById("seven");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}
// ////////////////////////        Seven         ///////////////////////////////////
// ///////////////////////////////////////////////////////////
let past_accidents = [];
function updateSevenNextButtonState() {
  // Check if at least one element in the array is not null
  const img_container_dom = document.querySelector(".next-img-seven");

  if (past_accidents.length !== 0) {
    document.getElementById("seven-next").classList.remove("disabled");
    img_container_dom.style.top = "340px";
  } else {
    document.getElementById("seven-next").classList.add("disabled");
    const img_container_dom = document.querySelector(".next-img-seven");
    img_container_dom.style.top = "0px";
  }
}
function sevenAccident(element) {
  let clicked_accident = element.getAttribute("data-value");
  if (past_accidents.includes(clicked_accident)) {
    past_accidents = past_accidents.filter(
      (accident) => accident !== clicked_accident
    );
    element.classList.add("bg-white");
    element.style.color = "currentcolor";
  } else {
    past_accidents.push(clicked_accident);
    element.classList.remove("bg-white");
    element.style.backgroundColor = "#93d7dc";
    element.style.color = "#0d8ea3";
  }
  updateSevenNextButtonState();
}

function gotoNewStep() {
  var prev_page = document.getElementById("newstep");

  var next_page = document.getElementById("seven");

  document.getElementById("custom-sixinput-one").value = "";
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
  post_number = "";
  document.getElementById("newstep-next").classList.add("disabled");
}

function sevenHidden() {
  var prev_page = document.getElementById("seven");

  var next_page = document.getElementById("last");
  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

// ///////////////// Last ////////////////////////

function gotoSeven() {
  var prev_page = document.getElementById("seven");

  var next_page = document.getElementById("last");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}
var surname = "";
var lastname = "";

var age = "10代";
var phone_number = "";
var email = "";

var page_local_url = window.location.href;
async function completeStep() {
  var name_vali = document.getElementById("nameInputError");
  var phone_vali = document.getElementById("phoneInputError");
  var age_vali = document.getElementById("ageInputError");
  var email_vali = document.getElementById("emailInputError");

  surname = document.getElementById("surname").value;
  lastname = document.getElementById("lastname").value;
  var selectElement = document.getElementById("sel1");
  age = selectElement.value;
  selectElement.addEventListener("change", () => {
    age = selectElement.value;
  });
  phone_number = document.getElementById("phone_number").value;
  email = document.getElementById("email").value;

  if (surname === "" || lastname === "") {
    name_vali.style.display = "block";
    name_vali.classList.add("shake");
    setTimeout(() => {
      name_vali.style.display = "none";
    }, 2000);
  } else {
    name_vali.style.display = "none";
    name_vali.classList.remove("shake");

    if (age === "") {
      age_vali.style.display = "block";
      age_vali.classList.add("shake");
      setTimeout(() => {
        age_vali.style.display = "none";
      }, 2000);
    } else {
      age_vali.style.display = "none";
      age_vali.classList.remove("shake");

      const phoneRegex = /^(0[5-9]0[-(]?[0-9]{4}[-)]?[0-9]{4}|0120[-]?\d{1,3}[-]?\d{4}|050[-]?\d{4}[-]?\d{4}|0\d{1,3}[-]?\d{1,4}[-]?\d{4}|0570[-]?\d{1,4}[-]?\d{4})$/;
      if (phone_number === "" || !phoneRegex.test(phone_number)) {
        phone_vali.style.display = "block";
        phone_vali.classList.add("shake");
        setTimeout(() => {
          phone_vali.style.display = "none";
        }, 2000);
      } else {
        phone_vali.style.display = "none";
        phone_vali.classList.remove("shake");

        // メールアドレスのバリデーション（任意項目）
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailError = false;

        if (email && !emailRegex.test(email)) {
          email_vali.innerHTML = "正しいメールアドレスを入力してください。";
          email_vali.style.display = "block";
          email_vali.classList.add("shake");
          emailError = true;
          setTimeout(() => {
            email_vali.style.display = "none";
          }, 2000);
        } else {
          email_vali.style.display = "none";
          email_vali.classList.remove("shake");
        }

        if (!emailError) {
          const ageValues = {
              '10代': 5000,
              '20代': 67500,
              '30代': 15000,
              '40代': 15000,
              '50代': 0,
              '60代': 0,
              '70代': 0
          };
          const value = ageValues[age] || 0;

          let sendData = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              experience: exp_type,
              license: license,
              changing_jobs_time: changing_jobs_time,
              changing_job_reasons: changing_job_reasons,
              taxi_attracts: taxi_attracts,
              residence: residence,
              commute_ways: commute_ways,
              post_number: post_number,
              nearest_station: nearest_station,
              past_accidents: past_accidents,
              surname: surname,
              lastname: lastname,
              age: age,
              phone_number: phone_number,
              email: email,
              page_local_url: page_local_url,
              changing_job_reasons_hubspot: changing_job_reasons.join(";"),
              taxi_attracts_hubspot: taxi_attracts.join(";"),
              commute_ways_hubspot: commute_ways.join(";"),
              past_accidents_hubspot: past_accidents.join(";")
            }),
          };
          let url = "https://hook.us1.make.com/1od0hmbiakapcmo3h2h2id2jdki57y83";
          // let url = "https://hook.us1.make.com/sb3s7hkgx380o517s7ny94yw67zhn252"; //ローカルで利用するもの
          const data = await fetch(url, sendData);

          document.getElementById("last-next").classList.add("span-disabled");

          window.location.href = "thanks/";
        }
      }
    }
  }
}

function goTopPage() {
  var successModal = document.getElementById("successModal");
  successModal.style.display = "none";
  var lastPage = document.getElementById("last");
  lastPage.style.display = "none";
  var prev_page = document.getElementById("first");
  prev_page.style.display = "block";
}
