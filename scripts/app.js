localStorage.setItem("language", "eng");

function setLanguage() {

    // log
    console.log("setting lang");

    const homeTextBoxEng = `Hi there,<br>
                            I'm Aleksander, welcome to my website.<br>
                            Here, I share the projects I write trough my career as an "up-and-coming" web developer.<br>
                            You may peruse my projects, have a look at my Github or CV, or find my preferred way to be contacted.`;

    const homeTextBoxNor = `Hei der, <br>
                            Jeg er Aleksander, velkommen til min nettside.<br>
                            Her deler jeg prosjektene jeg skriver i løpet av min karriere som en "up-and-coming" webutvikler.<br>
                            Du kan se gjennom mine prosjekter, ta en titt på min Github eller CV, eller finne min foretrukne måte å bli kontaktet.`;

    // header text
    const projectsHeaderEng = "Projects";
    const projectsHeaderNor = "Prosjekter";
    const contactHeaderEng = "Contact me";
    const contactHeaderNor = "Kontakt meg";

    // english buttons
    const navbarButtonHomeEng = "home";
    const navbarButtonProjectsEng = "projects";
    const navbarButtonContactEng = "contact";

    // norwegian buttons
    const navbarButtonHomeNor = "hjem";
    const navbarButtonProjectsNor = "prosjekter";
    const navbarButtonContactNor = "kontakt";

    // footer text
    const footerTextEng = "Author: Aleksander N. Knoph";
    const footerTextNor = "Forfatter: Aleksander N. Knoph";

    // set language flags
    // since "innerHTML" fetches the emoji, and not the HTML Doc Code, the Emoji itself is needed to check current language
    const langButtonNorEmoji = "språk | 🇳🇴";
    const langButtonEngEmoji = "language | 🇬🇧";

    // HTML Doc Codes to view as consistent emoji.
    const langButtonNor = "språk | &#127475;&#127476;";
    const langButtonEng = "language | &#127468;&#127463;";
    const curLang = document.getElementById("language-switch").innerHTML;

    if (
        (curLang == langButtonEngEmoji) || 
        (curLang == langButtonEng)
    ) {
        document.getElementById("language-switch").innerHTML = langButtonNor;

        // replacing navbar buttons
        document.getElementById("navbar__home").innerHTML = navbarButtonHomeNor;
        document.getElementById("navbar__projects").innerHTML = navbarButtonProjectsNor;
        document.getElementById("navbar__contact").innerHTML = navbarButtonContactNor;

        // try these if they are present, skip if not
        try {
            document.getElementById("projects-header-text").innerHTML = projectsHeaderNor;
        } catch (TypeError) {}
        try {
            document.getElementById("contact-header-text").innerHTML = contactHeaderNor;
        } catch (TypeError) {}
        try {
            document.getElementById("home-text-box").innerHTML = homeTextBoxNor;
        } catch (TypeError) {}
        try {
            document.getElementById("footer-author-text").innerHTML = footerTextNor;
        } catch (TypeError) {}

    } else if (
        (curLang == langButtonNorEmoji) || 
        (curLang == langButtonNor)
    ) {
        document.getElementById("language-switch").innerHTML = langButtonEng;

        // replacing navbar buttons
        document.getElementById("navbar__home").innerHTML = navbarButtonHomeEng;
        document.getElementById("navbar__projects").innerHTML = navbarButtonProjectsEng;
        document.getElementById("navbar__contact").innerHTML = navbarButtonContactEng;

        // try these if they are present, skip if not
        try {
            document.getElementById("projects-header-text").innerHTML = projectsHeaderEng;
        } catch (TypeError) {}
        try {
            document.getElementById("contact-header-text").innerHTML = contactHeaderEng;
        } catch (TypeError) {}
        try {
            document.getElementById("home-text-box").innerHTML = homeTextBoxEng;
        } catch (TypeError) {}
        try {
            document.getElementById("footer-author-text").innerHTML = footerTextEng;
        } catch (TypeError) {}
    }
}
