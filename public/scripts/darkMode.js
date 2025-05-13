const toggleThemeBtns = document.querySelectorAll(".toggle-theme");


toggleThemeBtns.forEach((btn) => {
    btn.addEventListener("click" , () => {
        if (localStorage.theme === "dark"){
            $.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            $.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }