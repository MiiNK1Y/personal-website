function set_language(){
    var cur_lang = document.getElementById("set-language").innerHTML;
    console.log(cur_lang);
}

set_language();

setTimeout(() => {
    console.log("delaying...");
    set_language();
}, "2000");