document.addEventListener("DOMContentLoaded", () => {
    var buttons = document.getElementsByClassName("button");
    console.log(buttons);

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        console.log(button);
        button.addEventListener("mousedown", (e) => {

            e.currentTarget.classList.add("button_pressed");
        });
        button.addEventListener("mouseup", (e) => {
            e.currentTarget.classList.remove("button_pressed");
        });
    }
});