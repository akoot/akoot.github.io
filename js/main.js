// URLs to socials
const socials = {
    twitter: "https://twitter.com/Akoot_",
    github: "https://github.com/akoot",
    soundcloud: "https://soundcloud.com/altoidtin",
    email: "mailto:akoot@akoot.me",
    youtube: "https://youtube.com/@akoot_"
}

document.addEventListener("DOMContentLoaded", onLoad)
function onLoad() {
    // Setup socials
    document.querySelectorAll(".social-icon").forEach((el) => {
        let name = el.id
        el.href = socials[name]
        el.style.backgroundImage = `url('../assets/images/icons/${name}.svg')`
    })

    // Set copyright year in footer
    const year = new Date().getFullYear();
    document.querySelector("#year").textContent = year.toString()
}

function toggleTheme() {

}