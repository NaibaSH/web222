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
    const videoContainer = document.getElementById('video');
    const videoElement = document.createElement('video');
    videoElement.controls = video.controls;
    videoElement.width = video.width;
    videoElement.height = video.height;
    video.source.forEach(source => {
        const sourceElement = document.createElement('source');
        sourceElement.src = source.src;
        sourceElement.type = source.type;
        videoElement.appendChild(sourceElement);
    });
    videoContainer.appendChild(videoElement);
};