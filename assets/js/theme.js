/* ==========================================================
   PU's Academics
   Theme Controller
   Version 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("themeToggle");

    if (!themeButton) return;

    const root = document.documentElement;

    // --------------------------------------------------
    // Dark Theme (Default)
    // --------------------------------------------------

    const darkTheme = {

        background: "#161616",
        surface: "#262626",
        surfaceHover: "#393939",
        primary: "#0f62fe",
        primaryHover: "#0353e9",
        text: "#f4f4f4",
        textSecondary: "#c6c6c6",
        border: "#393939"

    };

    // --------------------------------------------------
    // Light Theme
    // --------------------------------------------------

    const lightTheme = {

        background: "#ffffff",
        surface: "#f4f4f4",
        surfaceHover: "#e8e8e8",
        primary: "#0f62fe",
        primaryHover: "#0353e9",
        text: "#161616",
        textSecondary: "#525252",
        border: "#dcdcdc"

    };

    // --------------------------------------------------
    // Apply Theme
    // --------------------------------------------------

    function applyTheme(themeName) {

        const theme = themeName === "light"
            ? lightTheme
            : darkTheme;

        root.style.setProperty("--background", theme.background);
        root.style.setProperty("--surface", theme.surface);
        root.style.setProperty("--surface-hover", theme.surfaceHover);

        root.style.setProperty("--primary", theme.primary);
        root.style.setProperty("--primary-hover", theme.primaryHover);

        root.style.setProperty("--text", theme.text);
        root.style.setProperty("--text-secondary", theme.textSecondary);

        root.style.setProperty("--border", theme.border);

        document.body.style.background = theme.background;
        document.body.style.color = theme.text;

        themeButton.textContent =
            themeName === "light"
                ? "☀️"
                : "🌙";

        localStorage.setItem("pu-theme", themeName);

    }

    // --------------------------------------------------
    // Load Saved Theme
    // --------------------------------------------------

    const savedTheme =
        localStorage.getItem("pu-theme") || "dark";

    applyTheme(savedTheme);

    // --------------------------------------------------
    // Toggle Theme
    // --------------------------------------------------

    themeButton.addEventListener("click", () => {

        const current =
            localStorage.getItem("pu-theme") || "dark";

        applyTheme(
            current === "dark"
                ? "light"
                : "dark"
        );

    });

});

/* ==========================================================
   DLP CONTENT PROTECTION
   ========================================================== */

// Disable right-click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// Disable text selection
document.addEventListener("selectstart", function (event) {
    // Allow selection inside form fields
    const tag = event.target.tagName;

    if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT"
    ) {
        return;
    }

    event.preventDefault();
});

// Disable dragging
document.addEventListener("dragstart", function (event) {
    event.preventDefault();
});

// Disable common copy/cut shortcuts
document.addEventListener("keydown", function (event) {

    if (
        event.ctrlKey &&
        (
            event.key.toLowerCase() === "c" ||
            event.key.toLowerCase() === "x"
        )
    ) {
        event.preventDefault();
    }

});
