// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://ia800607.us.archive.org/15/items/music_for_programming/music_for_programming_1-datassette.mp3", type: "audio/mp3"},
        {src: "https://ia800607.us.archive.org/15/items/music_for_programming/music_for_programming_1-datassette.ogg", type: "audio/ogg"}
    ]
}

window.onload = function() {
    var audio1Element = document.querySelector("#audio1");
    var audio1 = "<audio";
    audio1 += (audio.controls == true) ? " controls>" : ">";

    for(var i=0; i < audio.source.length; i++) {
        audio1 += "<source src ='" + audio.source[i].src + "' type='" + audio.source[i].type +  "'>"
    }

    audio1 += "</audio>";
    audio1Element.innerHTML = audio1;
};