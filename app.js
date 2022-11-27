const panels = document.querySelectorAll(".panel");

// Function:
function removeClasses() {
  for (let j = 0; j < panels.length; j++) {
    panels[j].classList.remove("active");
  }
}

// 1-usul:✅✅
// for (let i = 0; i < panels.length; i++) {
// //   console.log(panels[i]);
//   panels[i].addEventListener("click", () => {
//     removeClasses();
//     panels[i].classList.add("active");
//   });
// }

// 2-usul:✅✅|
// for (let key of panels) {
//   console.log(key);
//   key.onclick = function () {
//     removeClasses();
//     this.classList.add("active");
//   };
// }

// 3-usul:✅✅|
panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", function () {
    removeClasses();
    this.classList.add("active");
  });
});

/* Start Loader JS */
const loader = document.querySelector(".loader-container");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.zIndex = "-1";
  });
});
/* End Loader JS */
