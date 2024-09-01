const button = document.querySelector(".arrow");
const popup = document.querySelector(".share");
const icn = document.getElementById("next");
icn.setAttribute("fill", "#6E8098");

popup.classList.add("hidden");
button.classList.add("arrow2");

button.addEventListener("click", () => {
    popup.classList.toggle("hidden");
    button.classList.toggle("change_color");

    if (popup.classList.contains("hidden")) {
        icn.setAttribute("fill", "#6E8098");
    }
    else {
        icn.setAttribute("fill", "#6A5D48");
    }
})