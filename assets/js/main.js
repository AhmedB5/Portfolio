document.querySelector(".myhomebread").addEventListener("click", function () {
  document.querySelector(".myh").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".myAboutbread").addEventListener("click", function () {
  document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".mySkillsbread").addEventListener("click", function () {
  document.querySelector(".skills").scrollIntoView({ behavior: "smooth" });
});

document
  .querySelector(".myProjectsbread")
  .addEventListener("click", function () {
    document.querySelector(".Projects").scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector(".myContactbread")
  .addEventListener("click", function () {
    document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
  });

document.querySelector(".mylight").addEventListener("click", function () {
  console.log("iam light");

  document.body.classList.remove("bg-dark");
  document.body.classList.remove("text-white");

  let myskilsBgs = document.querySelectorAll("#myskillsicona div");
  myskilsBgs.forEach((element) => {
    element.style.backgroundColor = "#f3f8fa";
  });

  let mysoci = document.querySelectorAll(".mysoci a");
  mysoci.forEach((element) => {
    element.style.backgroundColor = "#eff3f3";
    element.classList.remove("text-white");
  });
});

document.querySelector(".mydark").addEventListener("click", function () {
  document.body.classList.add("bg-dark");
  document.body.classList.add("text-white");

  let myskilsBgs = document.querySelectorAll("#myskillsicona div");
  myskilsBgs.forEach((element) => {
    element.style.backgroundColor = "#282e32";
  });

  let mysoci = document.querySelectorAll(".mysoci a");
  mysoci.forEach((element) => {
    element.style.backgroundColor = "#282e32";
    element.classList.add("text-white");
  });
});
