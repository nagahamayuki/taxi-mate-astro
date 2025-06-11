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
// ============================Second =================================
var license = "";
// function disableOtherButtons(clickedId) {
//   var buttons = ["redtaxi", "blacktaxi", "nolicense"];
//   buttons.forEach(function (buttonId) {
//     if (buttonId !== clickedId) {
//       document.getElementById(buttonId).classList.add("disabled");
//     }
//   });
// }
// function enableAllButtons() {
//   var buttons = ["redtaxi", "blacktaxi", "nolicense"];
//   buttons.forEach(function (buttonId) {
//     document.getElementById(buttonId).classList.remove("disabled");
//   });
// }

function licenseClick1() {
  var img_container_dom = document.getElementById("ani_second");
  var red_taxi_dom = document.getElementById("redtaxi");
  var prev_page = document.getElementById("license");
  var next_page = document.getElementById("changing_jobs_time");
  prev_page.style.display = "none";
  next_page.style.display = "block";
  license = "普通免許";

  // if (license === "普通免許") {
  //   license = "";
  //   console.log("普通免許が選択されている場合の処理");
  // } else {
  //   license = "普通免許";
  // }
  prev_page.style.display = "none";
  next_page.style.display = "block";
  console.log(license);
}
function licenseClick2() {
  var img_container_dom = document.getElementById("ani_second");
  var black_taxi_dom = document.getElementById("blacktaxi");
  var prev_page = document.getElementById("license");
  var next_page = document.getElementById("changing_jobs_time");
  prev_page.style.display = "none";
  next_page.style.display = "block";
  const LICENSE_TYPE_BLACK = "二種免許".normalize("NFKC");
  license = LICENSE_TYPE_BLACK;

  // if (license === LICENSE_TYPE_BLACK) {
  //   license = "";
  //   enableAllButtons();
  //   img_container_dom.style.top = "2.5rem";
  //   black_taxi_dom.style.backgroundColor = "";
  // } else {
  //   license = LICENSE_TYPE_BLACK;
  // }
  prev_page.style.display = "none";
  next_page.style.display = "block";
  console.log(license);
}

function licenseClick3() {
  var prev_page = document.getElementById("license");
  var next_page = document.getElementById("changing_jobs_time");
  prev_page.style.display = "none";
  next_page.style.display = "block";
  var no_license_dom = document.getElementById("nolicense");
  license = "免許は持っていない";

  // if (license === "免許は持っていない") {
  //   license = "";
  //   enableAllButtons();
  //   no_license_dom.style.backgroundColor = "";
  // } else {
  //   license = "免許は持っていない";
  //   disableOtherButtons("nolicense");
  // }

  prev_page.style.display = "none";
  next_page.style.display = "block";
  console.log(license);
}
function LicenseBackStep() {
  var prev_page = document.getElementById("choice_job_reasons");

  var next_page = document.getElementById("license");
  // enableAllButtons();
  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}
// Initial check to ensure the second-next button is disabled on page load
function gotoFirst() {
  var prev_page = document.getElementById("first");

  var secondpage = document.getElementById("license");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second Page
  secondpage.style.display = "none";

  enableAllButtons();
}

///////////////////////////////////////////////////////////////
// ==========================Third=============================
function secondHidden() {
  var prev_page = document.getElementById("license");

  var next_page = document.getElementById("changing_jobs_time");

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

function ChangingJobsTimeClick(element) {
  changing_jobs_time = element.getAttribute("data-value");
  var prev_page = document.getElementById("changing_jobs_time");
  var next_page = document.getElementById("commute_ways");
  // Hide the first button
  prev_page.style.display = "none";
  // Display the second div
  next_page.style.display = "block";
  console.log(changing_jobs_time);
}
// ///////////////////////////Fourth/////////////////////////////////////
// ////////////////////////////////////////////////////////////////
function ChangingJobsTimeBackStep() {
  var prev_page = document.getElementById("license");

  var next_page = document.getElementById("changing_jobs_time");
  // enableAllButtons();
  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

let choice_job_reasons = [];

function UpdateChoiceJobReasonsClickButtonState() {
  // Check if at least one element in the array is not null

  if (choice_job_reasons.length !== 0) {
    document
      .getElementById("choice_job_reasons_next_button")
      .classList.remove("disabled");
  } else {
    document
      .getElementById("choice_job_reasons_next_button")
      .classList.add("disabled");
    document.getElementById("nextImgFourth").style.top = "0px";
  }
}

function Choice_job_reasons_Click(element) {
  let clicked_reason = element.getAttribute("data-value");
  if (choice_job_reasons.includes(clicked_reason)) {
    choice_job_reasons = choice_job_reasons.filter(
      (reason) => reason !== clicked_reason
    );
    // element.style.backgroundColor = "";
    element.classList.add("bg-white");
    element.style.color = "currentcolor";
  } else {
    choice_job_reasons.push(clicked_reason);
    element.classList.remove("bg-white");
    element.style.backgroundColor = "#93d7dc";
    element.style.color = "#0d8ea3";
  }
  const img_container_dom = document.getElementById("nextImgFourth");
  img_container_dom.style.top = "455px";
  console.log(choice_job_reasons);
  UpdateChoiceJobReasonsClickButtonState();
}
// /////////////////////////   Five    ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function gotoThird() {
  var prev_page = document.getElementById("changing_jobs_time");

  var next_page = document.getElementById("choice_job_reasons");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

function ChoiceJobReasonsNextStep() {
  var prev_page = document.getElementById("choice_job_reasons");

  var next_page = document.getElementById("license");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

// ////////////// newstep /////////////////////////

// //////////////////////////  Six  ///////////////////////////////////
// /////////////////////////////////////////////////////////////
function gotoFour() {
  var prev_page = document.getElementById("choice_job_reasons");

  var next_page = document.getElementById("taxi_attracts");

  // Hide the first button
  prev_page.style.display = "block";

  // Display the second div
  next_page.style.display = "none";
}

function fiveHidden() {
  var prev_page = document.getElementById("taxi_attracts");

  var next_page = document.getElementById("commute_ways");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

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

function updateSixNextButtonState() {
  if (commute_ways.length !== 0) {
    document.getElementById("six-next").classList.remove("disabled");
  } else {
    document.getElementById("six-next").classList.add("disabled");
  }
}
let commute_ways = [];

function CommuteWaysClick(element) {
  let six_way = element.getAttribute("data-value");
  const img_container_dom = document.getElementById("nextImgSix");
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
  console.log(commute_ways);
}
document.addEventListener("DOMContentLoaded", (event) => {
  const img_container_dom = document.getElementById("nextImgSix");
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
        PostNumberNextStep();
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

function CommuteWaysBackStep() {
  var prev_page = document.getElementById("changing_jobs_time");
  var next_page = document.getElementById("commute_ways");
  post_number = "";
  nearest_station = "";
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
}
function sixHidden() {
  var prev_page = document.getElementById("commute_ways");
  nearest_station = document.getElementById("nearest_station").value;

  var next_page = document.getElementById("post_number");

  // Hide the first button
  prev_page.style.display = "none";
  // Display the second div
  next_page.style.display = "block";
}
function PostNumberBackStep() {
  var prev_page = document.getElementById("commute_ways");
  var next_page = document.getElementById("post_number");
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
}
function PostNumberNextStep() {
  var prev_page = document.getElementById("post_number");
  var next_page = document.getElementById("past_accidents");

  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}
// ////////////////////////        Seven         ///////////////////////////////////
// ///////////////////////////////////////////////////////////
let past_accidents = [];
function PastAccidentNextFunction() {
  // Check if at least one element in the array is not null
  const img_container_dom = document.getElementById("nextImgSeven");

  if (past_accidents.length !== 0) {
    document.getElementById("seven-next").classList.remove("disabled");
    img_container_dom.style.top = "340px";
  } else {
    document.getElementById("seven-next").classList.add("disabled");
    const img_container_dom = document.getElementById("nextImgSeven");
    img_container_dom.style.top = "0px";
  }
  console.log(past_accidents);
}
function PastAccidentsClick(element) {
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
  PastAccidentNextFunction();
}

function gotoNewStep() {
  var prev_page = document.getElementById("post_number");

  var next_page = document.getElementById("past_accidents");

  document.getElementById("custom-sixinput-one").value = "";
  // Hide the first button
  prev_page.style.display = "block";
  // Display the second div
  next_page.style.display = "none";
  post_number = "";
  document.getElementById("newstep-next").classList.add("disabled");
}

function sevenHidden() {
  var prev_page = document.getElementById("past_accidents");

  var next_page = document.getElementById("last");
  // Hide the first button
  prev_page.style.display = "none";

  // Display the second div
  next_page.style.display = "block";
}

// ///////////////// Last ////////////////////////

function LastBackStep() {
  var prev_page = document.getElementById("past_accidents");

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
async function LastNextStep() {
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

      const phoneRegex =
        /^(0[5-9]0[-(]?[0-9]{4}[-)]?[0-9]{4}|0120[-]?\d{1,3}[-]?\d{4}|050[-]?\d{4}[-]?\d{4}|0\d{1,3}[-]?\d{1,4}[-]?\d{4}|0570[-]?\d{1,4}[-]?\d{4})$/;
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
        const emailRegex =
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
            "10代": 5000,
            "20代": 67500,
            "30代": 15000,
            "40代": 15000,
            "50代": 0,
            "60代": 0,
            "70代": 0,
          };
          const value = ageValues[age] || 0;

          let sendData = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              choice_job_reasons: choice_job_reasons,
              license: license,
              changing_jobs_time: changing_jobs_time,
              commute_ways: commute_ways,
              nearest_station: nearest_station,
              post_number: post_number,
              past_accidents: past_accidents,
              surname: surname,
              lastname: lastname,
              age: age,
              phone_number: phone_number,
              email: email,
              page_local_url: page_local_url,
              choice_job_reasons_hubspot: choice_job_reasons.join(";"),
              commute_ways_hubspot: commute_ways.join(";"),
              past_accidents_hubspot: past_accidents.join(";"),
            }),
          };
          let url =
            "https://hook.us1.make.com/dcv555toufdmuopgvlc5zhxtguw5egp7";
          // let url = "https://hook.us1.make.com/qi9wfgajkxhyvvgd3qsy4cfucf947qyj"; //ローカルで利用するもの
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
