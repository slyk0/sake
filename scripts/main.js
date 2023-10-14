console.log('Welcome user! Please use responsibly.')
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const body = document.body;

    // Check if the user has a preference stored for the theme
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateLinkColors(currentTheme);
    } else {
        // If no preference, set the default theme
        body.classList.add("light-theme");
        updateLinkColors("light-theme");
    }

    // Toggle between dark and light themes
    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("light-theme")) {
            body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("dark-theme");
            updateLinkColors("dark-theme");
        } else {
            body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("light-theme");
            updateLinkColors("light-theme");
        }
    });

    // Function to update link colors and text shadow
    function updateLinkColors(theme) {
        const links = document.querySelectorAll("a");
        const linkColor = theme === "dark-theme" ? "white" : "black";
        const textShadowColor = theme === "dark-theme" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)";

        links.forEach(function (link) {
            link.style.color = linkColor;
            link.style.textShadow = `2px 2px 3px ${textShadowColor}`;
        });
    }
});