// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", type: "video/mp4"},
        {src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.ogg", type: "video/ogg"}
    ]
};

window.onload = function() {
    var video1Element = document.querySelector("#video1");

    var video1 = "<video width='" + video.width + "' height='" + video.height + "' ";

    video1 += (video.controls == true) ? " controls>" : ">";

    for(var i = 0; i < video.source.length; i++) {
        video1 += "<source src ='" + video.source[i].src + "' type ='" + video.source[i].type + "'>"
    }
    video1 += "</video>";

    video1Element.innerHTML = video1;
};