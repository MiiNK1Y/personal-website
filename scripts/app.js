localStorage.setItem("language", "eng");

function setLanguage() {

    // set language flags
    // since "innerHTML" fetches the emoji, and not the HTML Doc Code, the Emoji itself is needed to check current language.
    const flagNorEmoji = "🇳🇴";
    const flagEngEmoji = "🇬🇧";

    // HTML Doc Codes to view as consistent emoji.
    const flagNor = "&#127475;&#127476;";
    const flagEng = "&#127468;&#127463;";
    const curLang = document.getElementById("language__flag").innerHTML;

    if (
        (curLang == flagEng) || 
        (curLang == flagEngEmoji)
    ) {
        document.getElementById("language__flag").innerHTML = flagNor;
        // start replacing all text boxes
        document.getElementById("home-text-box").innerHTML = "Norwegian text here";
    } else if (
        (curLang == flagNor) || 
        (curLang == flagNorEmoji)
    ) {
        document.getElementById("language__flag").innerHTML = flagEng;
        // start replacing all text boxes
        document.getElementById("home-text-box").innerHTML = "English text here";
    }
}

currentLang = localStorage.getItem("language");
console.log(currentLang);