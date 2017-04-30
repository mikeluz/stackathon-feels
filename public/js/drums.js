'use strict'
import Dilla from 'dilla';
// var Dilla = require('dilla');
var audioContext = new AudioContext();
var dilla = new Dilla(audioContext, options);

var options = {
  "tempo": 120,
  "beatsPerBar": 4,
  "loopLength": 2
}

var high = {
  'position': '*.1.01',
  'freq': 440,
  'duration': 15
};
var low = { 'freq': 330, 'duration': 15 };

dilla.set('metronome', [
  high,
  ['*.>1.01', low]
]);

var oscillator, gainNode;
dilla.on('step', function (step) {
  if (step.event === 'start') {
    oscillator = step.context.createOscillator();
    gainNode = step.context.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(step.context.destination);
    oscillator.frequency.value = step.args.freq;
    gainNode.gain.setValueAtTime(1, step.time);
    oscillator.start(step.time);
  }
  else if (step.event === 'stop' && oscillator) {
    gainNode.gain.setValueAtTime(1, step.time);
    gainNode.gain.linearRampToValueAtTime(0, step.time + 0.1);
    oscillator.stop(step.time + 0.1);
    oscillator = null;
    gainNode = null;
  }
});

dilla.start();