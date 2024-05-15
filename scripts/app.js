function langSwitch(
    // always available
    langButton,
    navbarButtonHome,
    navbarButtonProjects,
    navbarButtonContact,
    // maybe available
    homeTextBox,
    projectsHeader,
    contactHeader,
    contactTextHead,
    contactTextSub,
    footerText
) {
    document.getElementById("language-switch").innerHTML = langButton;
    document.getElementById("navbar__home").innerHTML = navbarButtonHome;
    document.getElementById("navbar__projects").innerHTML = navbarButtonProjects;
    document.getElementById("navbar__contact").innerHTML = navbarButtonContact;
    // try these if they are present, skip if not
    try {
        document.getElementById("projects-header-text").innerHTML = projectsHeader;
    } catch (TypeError) {}
    try {
        document.getElementById("contact-header-text").innerHTML = contactHeader;
    } catch (TypeError) {}
    try {
        document.getElementById("home-text-box").innerHTML = homeTextBox;
    } catch (TypeError) {}
    try {
        document.getElementById("contact__head").innerHTML = contactTextHead;
    } catch (TypeError) {}
    try {
        document.getElementById("contact__sub").innerHTML = contactTextSub;
    } catch (TypeError) {}
    try {
        document.getElementById("footer-author-text").innerHTML = footerText;
    } catch (TypeError) {}
}

function setLangEng() {
    // swap the set localStorage language
    localStorage.setItem("language", "eng");

    const homeTextBoxEng = `Hi there,<br>
                            I'm Aleksander, welcome to my website.<br>
                            Here, I share the projects I write trough my career as an "up-and-coming" web developer.<br>
                            You may peruse my projects, have a look at my Github or CV, or find my preferred way to be contacted.`;

    const contactTextHead = "Nothing beats a good ol' email!";
    const contactTextSub = "Clicking on the address bellow opens your email client.";
    const projectsHeaderEng = "Projects";
    const contactHeaderEng = "Contact me";
    const navbarButtonHomeEng = "home";
    const navbarButtonProjectsEng = "projects";
    const navbarButtonContactEng = "contact";
    const footerTextEng = "Author: Aleksander N. Knoph";
    // HTML Doc Code for Britain flag emoji.
    const langButtonEng = "language | &#127468;&#127463;";

    langSwitch(
        // always available
        langButtonEng,
        navbarButtonHomeEng,
        navbarButtonProjectsEng,
        navbarButtonContactEng,
        // maybe available
        homeTextBoxEng,
        projectsHeaderEng,
        contactHeaderEng,
        contactTextHead,
        contactTextSub,
        footerTextEng
    );
}

function setLangNor() {
    // swap the set localStorage language
    localStorage.setItem("language", "nor");

    const homeTextBoxNor = `Hei der, <br>
                            Jeg er Aleksander, velkommen til min nettside.<br>
                            Her deler jeg prosjektene jeg skriver i løpet av min karriere som en "up-and-coming" webutvikler.<br>
                            Du kan se gjennom mine prosjekter, ta en titt på min Github eller CV, eller finne min foretrukne måte å bli kontaktet.`;

    const contactTextHead = "Ingenting slår en god, gammel E-post!";
    const contactTextSub = "Trykk på adressen under for å åpne mail-klienten din.";
    const projectsHeaderNor = "Prosjekter";
    const contactHeaderNor = "Kontakt meg";
    const navbarButtonHomeNor = "hjem";
    const navbarButtonProjectsNor = "prosjekter";
    const navbarButtonContactNor = "kontakt";
    const footerTextNor = "Forfatter: Aleksander N. Knoph";
    // HTML Doc Code for Norwegian flag emoji.
    const langButtonNor = "språk | &#127475;&#127476;";

    langSwitch(
        // always available
        langButtonNor,
        navbarButtonHomeNor,
        navbarButtonProjectsNor,
        navbarButtonContactNor,
        // maybe available
        homeTextBoxNor,
        projectsHeaderNor,
        contactHeaderNor,
        contactTextHead,
        contactTextSub,
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

function setLangButton() {
    let curLang = localStorage.getItem("language");
    if (curLang == "nor") {
        setLangEng();
    } else if (curLang == "eng") {
        setLangNor();
    }
}
