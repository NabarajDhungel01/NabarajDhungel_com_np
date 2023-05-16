setTimeout(() => {
  // document.body.style.padding = "7%"
  document.getElementById("wrapper").style.margin = "7%";
  document.getElementById("welcomeParent").style.width = "86%";
  // document.getElementById("wrapper").style.width = "86%"

  document.querySelector(".welcome").classList.add("border-radius");
  //removing the object that overlaps the header after the initial animation
  // document.querySelector("#welcome").remove()

  document.querySelector(".typed-cursor").remove()

}, 4500);


// removing the opacity zero from different elements
setTimeout(() => {
  
  document.getElementById("header").style.opacity =1;
  // making moon fixed 
  document.getElementById("moon").style.position="fixed";
}, 6500);





// Navbar

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const moon_rocket = document.getElementById("moon-rocket");
  


  if (this.window.pageYOffset >= 56) {
    header.classList.add("sticky");
    header.classList.add("header-bg");
    moon_rocket.style.visibility = "visible";

  } else {
    header.classList.remove("header-bg");
    moon_rocket.style.visibility = "hidden";
    header.classList.remove("sticky");
  }
});




//  For Theme

const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
  
  //

};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();
