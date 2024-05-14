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

    // english buttons
    const navbarButtonHomeEng = "home";
    const navbarButtonProjectsEng = "projects";
    const navbarButtonContactEng = "contact";

    // norwegian buttons
    const navbarButtonHomeNor = "hjem";
    const navbarButtonProjectsNor = "prosjekter";
    const navbarButtonContactNor = "kontakt";

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
        // start replacing all text boxes
        document.getElementById("navbar__home").innerHTML = navbarButtonHomeNor;
        document.getElementById("navbar__projects").innerHTML = navbarButtonProjectsNor;
        document.getElementById("navbar__contact").innerHTML = navbarButtonContactNor;
        try {
        document.getElementById("home-text-box").innerHTML = homeTextBoxNor;
        } catch (TypeError) {
            console.log("'#home-text-box' is not on this page, it returned null");
        }
    } else if (
        (curLang == langButtonNorEmoji) || 
        (curLang == langButtonNor)
    ) {
        document.getElementById("language-switch").innerHTML = langButtonEng;
        // start replacing all text boxes
        document.getElementById("navbar__home").innerHTML = navbarButtonHomeEng;
        document.getElementById("navbar__projects").innerHTML = navbarButtonProjectsEng;
        document.getElementById("navbar__contact").innerHTML = navbarButtonContactEng;
        try {
        document.getElementById("home-text-box").innerHTML = homeTextBoxEng;
        } catch (TypeError) {
            console.log("'#home-text-box' is not on this page, it returned null");
        }
    }
}
