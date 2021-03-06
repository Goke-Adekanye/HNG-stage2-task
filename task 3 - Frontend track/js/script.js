// PAGE LOADER
// on-page-load
window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".about-section").classList.add("active");

  // page-loader
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 1000);
});
// END OF PAGE LOADER

// ABOUT TABS
const tabContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

//onClicked any content of tabContainer
//(e): particular button clicked
tabContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    //remove class .active from current button and it to to the button-clicked
    tabContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //getAttribute: get extended attribute of button-clicked
    const target = e.target.getAttribute("data-target");
    //.remove: remove class .active from current-tab-content
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    //add: add class .active to the tab-content of button-clicked
    aboutSection.querySelector(target).classList.add("active");
  }
});
// END OF ABOUT TABS
