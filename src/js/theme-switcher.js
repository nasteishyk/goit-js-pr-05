import { theme } from "./refs"

const savedTheme = localStorage.getItem("theme") || "theme-dark"
changeTheme(savedTheme)

theme.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("theme-light") ? "theme-light" : "theme-dark"
    const newTheme = currentTheme === "theme-light" ? "theme-dark" : "theme-light"

    changeTheme(newTheme)
    localStorage.setItem("theme", newTheme)
})

function changeTheme(theme) {
    document.body.classList.remove("theme-dark", "theme-light")
    document.body.classList.add(theme)
}