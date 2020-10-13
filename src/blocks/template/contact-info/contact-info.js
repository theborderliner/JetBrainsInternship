document.addEventListener("DOMContentLoaded", () => {
    let cross = document.getElementsByClassName("contact-info__cross")[0];
    let btn = document.getElementsByClassName("contact-info__sendBtn")[0];

    cross.addEventListener("click", () => {
        setTimeout(() => {
            document.getElementsByClassName("contact-info")[0].style.minHeight = "100vh";
            document.getElementsByClassName("contact-info")[0].style.height = "auto";
            document.getElementsByClassName("contact-info")[0].style.display = "none";
        }, 700);
        document.getElementsByClassName("contact-info")[0].style.minHeight = 0;
        document.getElementsByClassName("contact-info")[0].style.height = 0;
        cross.style.display = "none";
    })

    btn.addEventListener("click", () => {
        let subject = "Technical task";
        let body = document.getElementById("contact-info__textArea").value;
        window.open(`mailto:ivan.peshekhonov@gmail.com?subject=${subject}&body=${"" + body}`);
    });
});