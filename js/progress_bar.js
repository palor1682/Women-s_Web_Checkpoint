window.addEventListener("load", () => {
    const spinner = document.querySelector(".spinner");

    spinner.classList.add("spinner_hidden");

    spinner.addEventListener("transitionend", () => {
        spinner.remove();
    })
})