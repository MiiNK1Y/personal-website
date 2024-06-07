var showSources = function() {
    let sourcesWindow = document.getElementById("source-window");
    if (sourcesWindow.style.display == "none") {
        sourcesWindow.style.display = "flex";
    } else {
        sourcesWindow.style.display = "none";
    }
}

var sourcesButton = document.getElementById("source-btn");
sourcesButton.addEventListener("click", showSources, false);

var sourcesXButton = document.getElementById("source-window__x-btn");
sourcesXButton.addEventListener("click", showSources, false);