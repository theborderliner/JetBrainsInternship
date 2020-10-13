document.addEventListener("DOMContentLoaded", () => {
    var btn = document.getElementsByClassName("get-in-touch-button")[0];

    btn.addEventListener("click", () => {
        let screen = document.getElementsByClassName("contact-info")[0];
        screen.style.display = "flex";
        screen.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        screen.style.height = "100vh";
        document.getElementsByClassName("contact-info__cross")[0].style.display = "block";
    })
});