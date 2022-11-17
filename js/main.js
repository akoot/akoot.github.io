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

document.addEventListener("DOMContentLoaded", onLoad)
function onLoad() {

    // Setup logo
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

function toggleTheme() {
}

function exit() {
}