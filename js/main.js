// URLs to socials
const socials = {
    twitter: "https://twitter.com/Akoot_",
    github: "https://github.com/akoot",
    soundcloud: "https://soundcloud.com/altoidtin",
    email: "mailto:akoot@akoot.me",
    youtube: "https://youtube.com/@akoot_"
}

const madeWithLoveMessages = [
    "Made in your walls using my bare hands",
    "Designed in California, made in China, in my brain (Florida, USA)",
    "Hope you didn't forget I am in your walls, where I made this website",
    "Inspired by the great Florida weather",
    "This is what an AI would create if prompted \"finest website this side of heaven\""
]

let themeToggle
document.addEventListener("DOMContentLoaded", onLoad)
function onLoad() {

    // Setup theme toggle button
    themeToggle = document.querySelector("#themeToggle")
    themeToggle.addEventListener("click", toggleTheme)
    toggleTheme()

    // Setup alternate theme button
    // Source: https://stackoverflow.com/questions/5033650/how-to-dynamically-remove-a-stylesheet-from-the-current-page
    // accessed 11/16/2022
    let logo = document.querySelector("#logo")
    logo.addEventListener("click", alternate)


    // Source: old https://akoot.me home page (patented technology)
    let logoText = document.querySelector("#logo span")
    let logoInterval = setInterval(() => {
        logoText.textContent = logoText.textContent === 'Akoot' ? 'Akoot_' : 'Akoot'
    }, 500)

    // Setup socials
    document.querySelectorAll(".social-icon").forEach((el) => {
        let name = el.id
        el.href = socials[name]
        el.style.backgroundImage = `url('../assets/images/icons/${name}.svg')`
    })

    // Set copyright year in footer
    const year = new Date().getFullYear();
    document.querySelector("#copyright .year").textContent = year.toString()

    // Mandatory "made with love" message
    document.querySelector("#madeWithLoveOrSomething").textContent = randomElement(madeWithLoveMessages)
}

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let lightTheme = document.getElementById("lightTheme")
function toggleTheme() {
    lightTheme.disabled = !lightTheme.disabled
    if (lightTheme.disabled) {
        altTheme.disabled = true
        themeToggle.style.backgroundImage = "url('../assets/images/icons/moon.svg')"
    } else {
        themeToggle.style.backgroundImage = "url('../assets/images/icons/sun.svg')"
    }
}

let altTheme = document.getElementById("altTheme")
function alternate() {
    altTheme.disabled = !altTheme.disabled
    if (!altTheme.disabled) {
        lightTheme.disabled = true
        themeToggle.style.backgroundImage = "url('../assets/images/icons/moon.svg')"
    }
}

function exit() {
}