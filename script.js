function setLang(
    // always available
    langButton,
    navbarButtonHome,
    navbarButtonProjects,
    navbarButtonContact,
    // maybe available
    homeText,
    projectsHeader,
    contactHeader,
    contactText,
    sourcesButton,
    sourcesText,
    footerText
) {
    // present on all pages
    document.getElementById("lng-switch-btn").innerHTML = langButton;
    document.getElementById("navbar__home").innerHTML = navbarButtonHome;
    document.getElementById("navbar__projects").innerHTML = navbarButtonProjects;
    document.getElementById("navbar__contact").innerHTML = navbarButtonContact;
    // try these if they are present, skip if not
    if (document.URL.includes("index.html")) {
        document.getElementById("idx-txt").innerHTML = homeText;
    } else if (document.URL.includes("projects.html")) {
        document.getElementById("projects-header-txt").innerHTML = projectsHeader;
        document.getElementById("sources-btn").innerHTML = sourcesButton;
        document.getElementById("sources-window__txt").innerHTML = sourcesText;
        document.getElementById("footer-author-txt").innerHTML = footerText;
    } else if (document.URL.includes("contact.html")) {
        document.getElementById("contact-header-txt").innerHTML = contactHeader;
        document.getElementById("contact-txt").innerHTML = contactText;
        document.getElementById("sources-btn").innerHTML = sourcesButton;
        document.getElementById("sources-window__txt").innerHTML = sourcesText;
        document.getElementById("footer-author-txt").innerHTML = footerText;
    }
}

function setLangEng() {
    // swap the set localStorage language
    localStorage.setItem("language", "eng");

    const homeTextEng = `
                        <p>Hi there,<br>I'm Aleksander, welcome to my website.</p>
                        <p>You may peruse my projects, have a look at my Github or CV, or find my preferred way to be contacted.</p>
                        `;

    const sourcesTextEng = `
                            Font: <a href="https://fonts.google.com/specimen/Nunito?query=Nunito" target="_blank">Nunito</a><br>
                            Project icons: <a href="https://www.svgrepo.com" target="_blank">svgrepo.com</a><br>
                            Colorscheme: <a href="https://catppuccin.com/palette" target="_blank">Catppuccin</a>
                            `;

    const contactTextEng = "Send me an email!";
    const projectsHeaderEng = "Projects";
    const contactHeaderEng = "Contact me";
    const navbarButtonHomeEng = "home";
    const navbarButtonProjectsEng = "projects";
    const navbarButtonContactEng = "contact";
    const sourcesButtonEng = "sources";
    const footerTextEng = "Author: Aleksander N. Knoph";
    // HTML Doc Code for Britain flag emoji.
    const langButtonEng = "language | &#127468;&#127463;";

    setLang(
        // always available
        langButtonEng,
        navbarButtonHomeEng,
        navbarButtonProjectsEng,
        navbarButtonContactEng,
        // maybe available
        homeTextEng,
        projectsHeaderEng,
        contactHeaderEng,
        contactTextEng,
        sourcesButtonEng,
        sourcesTextEng,
        footerTextEng
    );
}

function setLangNor() {
    // swap the set localStorage language
    localStorage.setItem("language", "nor");

    const homeTextNor = `
                        <p>Hei der,<br>Jeg er Aleksander, velkommen til min nettside.</p>
                        <p>Du kan se gjennom prosjektene mine, ta en titt på Github'en eller CV'en min, eller finne min foretrukne måte å bli kontaktet.</p>
                        `;

    const sourcesTextNor = `
                            Font: <a href="https://fonts.google.com/specimen/Nunito?query=Nunito" target="_blank">Nunito</a><br>
                            Prosjekt ikoner: <a href="https://www.svgrepo.com" target="_blank">svgrepo.com</a><br>
                            Fargetema: <a href="https://catppuccin.com/palette" target="_blank">Catppuccin</a>
                            `;

    const contactTextNor = "Sende meg en E-post!";
    const projectsHeaderNor = "Prosjekter";
    const contactHeaderNor = "Kontakt meg";
    const navbarButtonHomeNor = "hjem";
    const navbarButtonProjectsNor = "prosjekter";
    const navbarButtonContactNor = "kontakt";
    const sourcesButtonNor = "kilder";
    const footerTextNor = "Forfatter: Aleksander N. Knoph";
    // HTML Doc Code for Norwegian flag emoji.
    const langButtonNor = "språk | &#127475;&#127476;";

    setLang(
        // always available
        langButtonNor,
        navbarButtonHomeNor,
        navbarButtonProjectsNor,
        navbarButtonContactNor,
        // maybe available
        homeTextNor,
        projectsHeaderNor,
        contactHeaderNor,
        contactTextNor,
        sourcesButtonNor,
        sourcesTextNor,
        footerTextNor
    );
}

let langSet = localStorage.getItem("language");
if (langSet == null) {
    console.log("First time visitor, welcome! Setting default language: English.");
    localStorage.setItem("language", "eng");
} else if (langSet == "nor") {
    setLangNor();
}

var langButton = document.getElementById("lng-switch-btn");
langButton.addEventListener("click", function() {
    let curLang = localStorage.getItem("language");
    if (curLang == "nor") {
        setLangEng();
    } else if (curLang == "eng") {
        setLangNor();
    }
});

let curPageProjects = document.URL.includes("projects.html");
let curPageContact = document.URL.includes("contact.html");
if ((curPageProjects) || (curPageContact)) {
    var siteMask = document.getElementById("site-mask");
    var sourcesWindow = document.getElementById("sources-window");
    var sourcesButton = document.getElementById("sources-btn");
    var sourcesXButton = document.getElementById("sources-window__x-btn");
    var displaySources = function() {
        if (sourcesWindow.style.display == "none") {
            sourcesWindow.style.display = "flex";
            siteMask.style.display = "block";
            siteMask.style.zIndex = "4";
        } else {
            sourcesWindow.style.display = "none";
            siteMask.style.display = "none";
            siteMask.style.zIndex = "unset";
        }
    }
    sourcesButton.addEventListener("click", displaySources);
    sourcesXButton.addEventListener("click", displaySources);
    siteMask.addEventListener("click", displaySources);
}
