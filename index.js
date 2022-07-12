const prev_work = document.querySelector(".previous-work");
const current_work = document.querySelector(".current-work");
const title_work = document.querySelector(".title-work");
const prev_play = document.querySelector(".previous-play");
const current_play = document.querySelector(".current-play");
const title_play = document.querySelector(".title-play");
const prev_study = document.querySelector(".previous-study");
const current_study = document.querySelector(".current-study");
const title_study = document.querySelector(".title-study");
const prev_exercise = document.querySelector(".previous-exercise");
const current_exercise = document.querySelector(".current-exercise");
const title_exercise = document.querySelector(".title-exercise");
const prev_social = document.querySelector(".previous-social");
const current_social = document.querySelector(".current-social");
const title_social = document.querySelector(".title-social");
const prev_self_care = document.querySelector(".previous-self-care");
const current_self_care = document.querySelector(".current-self-care");
const title_self_care = document.querySelector(".title-self-care");

// fetch data for daily routine

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    (title_work.innerHTML = data[0].title),
      (current_work.innerHTML = data[0].timeframes.daily.current + "" + "hrs");
    prev_work.innerHTML = data[0].timeframes.daily.previous + "" + "hrs";
    (title_play.innerHTML = data[1].title),
      (current_play.innerHTML = data[1].timeframes.daily.current + "" + "hrs");
    prev_play.innerHTML = data[1].timeframes.daily.previous + "" + "hrs";
    (title_study.innerHTML = data[2].title),
      (current_study.innerHTML = data[2].timeframes.daily.current + "" + "hrs");
    prev_study.innerHTML = data[2].timeframes.daily.previous + "" + "hrs";
    (title_exercise.innerHTML = data[3].title),
      (current_exercise.innerHTML =
        data[3].timeframes.daily.current + "" + "hrs");
    prev_exercise.innerHTML = data[3].timeframes.daily.previous + "" + "hrs";
    (title_social.innerHTML = data[4].title),
      (current_social.innerHTML =
        data[4].timeframes.daily.current + "" + "hrs");
    prev_social.innerHTML = data[4].timeframes.daily.previous + "" + "hrs";
    (title_self_care.innerHTML = data[5].title),
      (current_self_care.innerHTML =
        data[5].timeframes.daily.current + "" + "hrs");
    prev_self_care.innerHTML = data[5].timeframes.daily.previous + "" + "hrs";
  });
