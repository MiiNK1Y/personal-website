var showSources = function() {
    let sourcesWindow = document.getElementById("sources-window");
    if (sourcesWindow.style.display == "none") {
        sourcesWindow.style.display = "flex";
    } else {
        sourcesWindow.style.display = "none";
    }
}

var sourcesButton = document.getElementById("sources-btn");
sourcesButton.addEventListener("click", showSources, false);

var sourcesXButton = document.getElementById("sources-window__x-btn");
sourcesXButton.addEventListener("click", showSources, false);