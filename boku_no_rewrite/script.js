function switchLang(
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
                        <p>Here, I share the projects I write trough my career as a "junior" web developer.</p>
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

    switchLang(
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
                        <p>Her deler jeg prosjektene jeg skriver i løpet av min karriere som en "junior" webutvikler.</p>
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

    switchLang(
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

// check if there are data stored from a previous visit, setting language accordingly
let langSet = localStorage.getItem("language");

if (langSet == null) {
    console.log("First time visitor, welcome! Setting default language: English.");
    // default key pairs
    localStorage.setItem("language", "eng");
} else if (langSet == "nor") {
    setLangNor();
}

function switchLangButton() {
    let curLang = localStorage.getItem("language");
    if (curLang == "nor") {
        setLangEng();
    } else if (curLang == "eng") {
        setLangNor();
    }
}

var showSources = function() {
    let sourcesWindowMask = document.getElementById("site-mask");
    let sourcesWindow = document.getElementById("sources-window");
    if (sourcesWindow.style.display == "none") {
        sourcesWindow.style.display = "flex";
        sourcesWindowMask.style.display = "block";
        sourcesWindowMask.style.zIndex = "4";
    } else {
        sourcesWindow.style.display = "none";
        sourcesWindowMask.style.display = "none";
        sourcesWindowMask.style.zIndex = "unset";
    }
}

var langButton = document.getElementById("lng-switch-btn");
langButton.addEventListener("click", switchLangButton, false);

if (document.URL.includes("index.html")) {
} else {
    var sourcesButton = document.getElementById("sources-btn");
    sourcesButton.addEventListener("click", showSources, false);

    var sourcesXButton = document.getElementById("sources-window__x-btn");
    sourcesXButton.addEventListener("click", showSources, false);

    var siteMask = document.getElementById("site-mask");
    siteMask.addEventListener("click", showSources, false);
}
