window.addEventListener("keypress", () => {
	console.log("IN DRUMS FILE");
})

function Kick(audioCtx) {
  this.audioCtx = audioCtx;
};

Kick.prototype.setup = function() {
  this.osc = this.audioCtx.createOscillator();
  this.gain = this.audioCtx.createGain();
  this.osc.connect(this.gain);
  this.gain.connect(this.audioCtx.destination)
};

Kick.prototype.trigger = function(time) {
  this.setup();

  this.osc.frequency.setValueAtTime(150, time);
  this.gain.gain.setValueAtTime(1, time);

  this.osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);
  this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

  this.osc.start(time);

  this.osc.stop(time + 0.5);
};

function Snare(audioCtx) {
  this.audioCtx = audioCtx;
};

Snare.prototype.setup = function() {
  this.noise = this.audioCtx.createBufferSource();
  this.noise.buffer = this.noiseBuffer();

  var noiseFilter = this.audioCtx.createBiquadFilter();
  noiseFilter.type = 'highpass';
  noiseFilter.frequency.value = 1000;
  this.noise.connect(noiseFilter);

  this.noiseEnvelope = this.audioCtx.createGain();
  noiseFilter.connect(this.noiseEnvelope);

  this.noiseEnvelope.connect(this.audioCtx.destination);

  this.osc = this.audioCtx.createOscillator();
  this.osc.type = 'triangle';

  this.oscEnvelope = this.audioCtx.createGain();
  this.osc.connect(this.oscEnvelope);
  this.oscEnvelope.connect(this.audioCtx.destination);
};

Snare.prototype.noiseBuffer = function() {
  var bufferSize = this.audioCtx.sampleRate;
  var buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
  var output = buffer.getChannelData(0);

  for (var i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  return buffer;
};

Snare.prototype.trigger = function(time) {
  this.setup();

  this.noiseEnvelope.gain.setValueAtTime(1, time);
  this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
  this.noise.start(time)

  this.osc.frequency.setValueAtTime(100, time);
  this.oscEnvelope.gain.setValueAtTime(0.7, time);
  this.oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
  this.osc.start(time)

  this.osc.stop(time + 0.2);
  this.noise.stop(time + 0.2);
};

function HiHat(audioCtx, buffer) {
  this.audioCtx = audioCtx;
  this.buffer = buffer;
};

HiHat.prototype.setup = function() {
  this.source = this.audioCtx.createBufferSource();
  this.source.buffer = this.buffer;
  this.source.connect(this.audioCtx.destination);
};

HiHat.prototype.trigger = function(time) {
  this.setup();

  this.source.start(time);
};

var sampleLoader = function(url, audioCtx, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function() {
    audioCtx.decodeAudioData(request.response, function(buffer) {
      window.buffer = buffer;
      callback();
    });
  };

  request.send();
};

// var audioCtx = new AudioaudioCtx();

var setup = function() {
  var kick  = new Kick(audioCtx);
  var snare = new Snare(audioCtx);
  // var hihat = new HiHat(audioCtx, window.buffer);

  Tone.Transport.bpm.value = 120;

  Tone.Transport.setInterval(function(time){ kick.trigger(time) }, "4n");
  Tone.Transport.setInterval(function(time){ snare.trigger(time) }, "2n");
  Tone.Transport.setInterval(function(time){ hihat.trigger(time) }, "8t");

  $("#play").removeClass('pure-button-disabled');
};

$("#pause").click(function() {
  if (window.playing == true) {
    window.playing = false;
    Tone.Transport.stop();
  }
});

$("#play").click(function() {
	console.log("HERE");
    Tone.Transport.start();
 });

window.playing = false;
sampleLoader('samples/hihat.wav', audioCtx, setup);