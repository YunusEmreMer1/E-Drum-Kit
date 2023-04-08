document.addEventListener('DOMContentLoaded', () => {

//jhkEvent Listeners for Drum Keydowns
const audioFiles = [
    'audio/floor_tom.wav',
    'audio/khatsopen.wav',
    'audio/kick.wav',
    'audio/snare.wav',
    'audio/hi_tom.wav',
    'audio/crash.wav',
    'audio/mid_tom.wav',
    'audio/khatsclosed.wav'
  ];
  
  audioFiles.forEach(file => {
    const audio = new Audio();
    audio.src = file;
    audio.preload = 'auto';
  });

document.addEventListener("keydown", function(event) {
    if (event.key === "f") {
      floortom();
    } else if (event.key === "i") {
        hihatopen();
        } else if (event.key === "b") {
            kick();
            } else if (event.key === "j") {
                snare();
                } else if (event.key === "h") {
                    hitom();
                    }
                    else if (event.key === "e") {
                        crash();
                        }
                        else if (event.key === "g") {
                            midtom();
                            } else if (event.key === "k") {
                                hihatclosed();
                                } 
                    
  });




    function floortom() {
        var audio = new Audio('audio/floor_tom.wav');
        audio.play();
        console.log("floortom");
    }

    function hihatopen() {
        var audio = new Audio('audio/khatsopen.wav');
        audio.play();
    }

    function kick() {
        var audio = new Audio('audio/kick.wav');
        audio.play();
    }

    function snare() {
        var audio = new Audio('audio/snare.wav');
        audio.play();
    }

    function hitom() {
        var audio = new Audio('audio/hi_tom.wav');
        audio.play();
    }

    function crash() {
        var audio = new Audio('audio/crash.wav');
        audio.play();
    }

    function midtom() {
        var audio = new Audio('audio/mid_tom.wav');
        audio.play();
    }

    function hihatclosed() {
        var audio = new Audio('audio/khatsclosed.wav');
        audio.play();
    }


console.log("main.js loaded");

/*  Failed attempt at using the AudioContext API

const drumKit = {
    kick: null,
    snare: null,
    hiHatClosed: null,
    hiHatOpen: null,
    midTom: null,
    hiTom: null,
    floorTom: null,
    crash: null,
  };
  
  const context = new AudioContext();
  
  async function loadSounds() {
    const kickBuffer = await loadSample('audio/kick.wav');
    const snareBuffer = await loadSample('audio/snare.wav');
    const hiHatClosedBuffer = await loadSample('audio/khatsclosed.wav');
    const hiHatOpenBuffer = await loadSample('audio/khatsopen.wav');
    const midTomBuffer = await loadSample('audio/mid_tom.wav');
    const hiTomBuffer = await loadSample('audio/hi_tom.wav');
    const floorTomBuffer = await loadSample('audio/floor_tom.wav');
    const crashBuffer = await loadSample('audio/crash.wav');
  
    drumKit.kick = new Sound(context, kickBuffer);
    drumKit.snare = new Sound(context, snareBuffer);
    drumKit.hiHatClosed = new Sound(context, hiHatClosedBuffer);
    drumKit.hiHatOpen = new Sound(context, hiHatOpenBuffer);
    drumKit.midTom = new Sound(context, midTomBuffer);
    drumKit.hiTom = new Sound(context, hiTomBuffer);
    drumKit.floorTom = new Sound(context, floorTomBuffer);
    drumKit.crash = new Sound(context, crashBuffer);
  }
  
  class Sound {
    constructor(context, buffer) {
      this.context = context;
      this.buffer = buffer;
    }
  
    play() {
      const source = this.context.createBufferSource();
      source.buffer = this.buffer;
      source.connect(this.context.destination);
      source.start();
    }
  }
  
  function loadSample(url) {
    return fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => context.decodeAudioData(buffer));
  }
  
  function handleKeyDown(event) {
    switch (event.code) {
      case 'KeyF':
        drumKit.floorTom.play();
        break;
      case 'KeyI':
        drumKit.hiHatOpen.play();
        break;
      case 'KeyB':
        drumKit.kick.play();
        break;
      case 'KeyJ':
        drumKit.snare.play();
        break;
      case 'KeyH':
        drumKit.hiTom.play();
        break;
      case 'KeyE':
        drumKit.crash.play();
        break;
      case 'KeyG':
        drumKit.midTom.play();
        break;
      case 'KeyK':
        drumKit.hiHatClosed.play();
        break;
    }
  }
  
  async function setup() {
    await loadSounds();
  
    window.addEventListener('keydown', handleKeyDown);
  }
  
  setup();
  */
  


});