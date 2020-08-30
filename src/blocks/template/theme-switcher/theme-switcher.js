function switchTheme(node) {
    let nodeClassList = node.classList;
    if (nodeClassList.contains("theme_style_light")) {
        nodeClassList.remove('theme_style_light');
        nodeClassList.add('theme_style_dark');
    } else if (nodeClassList.contains('theme_style_dark')) {
        nodeClassList.remove('theme_style_dark');
        nodeClassList.add('theme_style_light');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.getElementById("theme-switcher");
    switcher.addEventListener("click", () => {
        let nodes = document.querySelectorAll(".theme");
        nodes.forEach(node => switchTheme(node, switcher));
    });
});