function turnSwitch(switcher) {
    let nodeClassList = switcher.classList;
    let button = switcher.querySelectorAll(".switcher__button")[0];
    if (nodeClassList.contains("switcher__active")) {
        nodeClassList.remove('switcher__active');
        nodeClassList.add('switcher__inactive');
        button.style.transform = "translateX(0)";
    } else if (nodeClassList.contains('switcher__inactive')) {
        nodeClassList.remove('switcher__inactive');
        nodeClassList.add('switcher__active');
        button.style.transform = "translateX(100%)";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var switchers = document.getElementsByClassName("switcher");

    for (let i = 0; i < switchers.length; i++) {
        let switcher = switchers[i];
        switcher.addEventListener("click", (e) => {
            turnSwitch(e.currentTarget);
        });
    }
});