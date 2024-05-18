// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://ia800607.us.archive.org/15/items/music_for_programming/music_for_programming_1-datassette.mp3", type: "audio/mp3"},
        {src: "https://ia800607.us.archive.org/15/items/music_for_programming/music_for_programming_1-datassette.ogg", type: "audio/ogg"}
    ]
};
window.onload = function()
{
  const audioContainer = document.getElementById('audio-container');

    const audioElement = document.createElement('audio');
    audioElement.controls = audio.controls;

    audio.source.forEach(source => {
      const sourceElement = document.createElement('source');
      sourceElement.src = source.src;
      sourceElement.type = source.type;
      audioElement.appendChild(sourceElement);
    });
    audioContainer.appendChild(audioElement);
  };