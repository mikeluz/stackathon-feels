	function sequencer(osc, notes) {
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // E
		}, 0);
		setTimeout(() => {
			osc.frequency.value = notes[3]['D#']; // Eflat
		}, 400);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // E
		}, 800);
		setTimeout(() => {
			osc.frequency.value = notes[2]['A']; // A
		}, 1200);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // E
		}, 1600);
		setTimeout(() => {
			osc.frequency.value = notes[3]['D#']; // Eflat
		}, 2000);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // E
		}, 2400);
		setTimeout(() => {
			osc.frequency.value = notes[3]['F']; // F
		}, 2800);
		setTimeout(() => {
			osc.frequency.value = notes[3]['G']; // F
		}, 3200);
		setTimeout(() => {
			osc.frequency.value = notes[3]['F']; // F
		}, 3600);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // F
		}, 4000);
		setTimeout(() => {
			osc.frequency.value = notes[2]['G#']; // F
		}, 4400);
	}

	function sequencerA(osc, notes) {
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // E
		}, 0);
		setTimeout(() => {
			osc.frequency.value = notes[3]['D#']; // Eflat
		}, 400);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // E
		}, 800);
		setTimeout(() => {
			osc.frequency.value = notes[2]['A']; // A
		}, 1200);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // E
		}, 1600);
		setTimeout(() => {
			osc.frequency.value = notes[3]['D#']; // Eflat
		}, 2000);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // E
		}, 2400);
		setTimeout(() => {
			osc.frequency.value = notes[3]['F']; // F
		}, 2800);
		setTimeout(() => {
			osc.frequency.value = notes[3]['G']; // F
		}, 3200);
		setTimeout(() => {
			osc.frequency.value = notes[3]['F']; // F
		}, 3600);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // F
		}, 4000);
		setTimeout(() => {
			osc.frequency.value = notes[2]['G#']; // F
		}, 4400);
	}

	function sequencerB(osc, notes) {
		setTimeout(() => {
			osc.frequency.value = notes[3]['B']; // E
		}, 0);
		setTimeout(() => {
			osc.frequency.value = notes[3]['A']; // Eflat
		}, 400);
		setTimeout(() => {
			osc.frequency.value = notes[3]['B']; // E
		}, 800);
		setTimeout(() => {
			osc.frequency.value = notes[3]['E']; // A
		}, 1200);
		setTimeout(() => {
			osc.frequency.value = notes[3]['B']; // E
		}, 1600);
		setTimeout(() => {
			osc.frequency.value = notes[3]['A']; // Eflat
		}, 2000);
		setTimeout(() => {
			osc.frequency.value = notes[3]['B']; // E
		}, 2400);
		setTimeout(() => {
			osc.frequency.value = notes[4]['C']; // F
		}, 2800);
		setTimeout(() => {
			osc.frequency.value = notes[4]['D']; // F
		}, 3200);
		setTimeout(() => {
			osc.frequency.value = notes[4]['C']; // F
		}, 3600);
		setTimeout(() => {
			osc.frequency.value = notes[3]['B']; // F
		}, 4000);
		setTimeout(() => {
			osc.frequency.value = notes[3]['D#']; // F
		}, 4400);
	}

	Math.floor(Math.random() * 10)

	function sequencerRand(osc, notes, index) {
		setTimeout(() => {
			osc.frequency.value = notes[29+index]; // E
		}, 0);
		setTimeout(() => {
			osc.frequency.value = notes[25+index]; // Eflat
		}, 400 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[28+index]; // E
		}, 800 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[32+index]; // A
		}, 1200 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[30+index]; // E
		}, 1600 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[29+index]; // Eflat
		}, 2000 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[34+index]; // E
		}, 2400 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[26+index]; // F
		}, 2800 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[28+index]; // F
		}, 3200 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[26+index]; // F
		}, 3600 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[28+index]; // F
		}, 4000 * Math.floor(Math.random() * 10));
		setTimeout(() => {
			osc.frequency.value = notes[34+index]; // F
		}, 4400 * Math.floor(Math.random() * 10));
	}

	function chromaA(osc, notes) {	
		setTimeout(() => {
			osc.frequency.value = notes[36];
		}, 0);
		setTimeout(() => {
			osc.frequency.value = notes[38];
		}, 400);
		setTimeout(() => {
			osc.frequency.value = notes[40];
		}, 800);
		setTimeout(() => {
			osc.frequency.value = notes[42];
		}, 1200);
		setTimeout(() => {
			osc.frequency.value = notes[44];
		}, 1600);
		setTimeout(() => {
			osc.frequency.value = notes[46];
		}, 2000);
		setTimeout(() => {
			osc.frequency.value = notes[48];
		}, 2400);
		setTimeout(() => {
			osc.frequency.value = notes[50];
		}, 2800);
		setTimeout(() => {
			osc.frequency.value = notes[52];
		}, 3200);
		setTimeout(() => {
			osc.frequency.value = notes[54];
		}, 3600);
		setTimeout(() => {
			osc.frequency.value = notes[56];
		}, 4000);
		setTimeout(() => {
			osc.frequency.value = notes[58];
		}, 4400);
	}

	function chromaB(osc, notes) {
		setTimeout(() => {
			osc.frequency.value = notes[40];
		}, 0);
		setTimeout(() => {
			osc.frequency.value = notes[42];
		}, 400);
		setTimeout(() => {
			osc.frequency.value = notes[44];
		}, 800);
		setTimeout(() => {
			osc.frequency.value = notes[46];
		}, 1200);
		setTimeout(() => {
			osc.frequency.value = notes[48];
		}, 1600);
		setTimeout(() => {
			osc.frequency.value = notes[50];
		}, 2000);
		setTimeout(() => {
			osc.frequency.value = notes[52];
		}, 2400);
		setTimeout(() => {
			osc.frequency.value = notes[54];
		}, 2800);
		setTimeout(() => {
			osc.frequency.value = notes[56];
		}, 3200);
		setTimeout(() => {
			osc.frequency.value = notes[58];
		}, 3600);
		setTimeout(() => {
			osc.frequency.value = notes[60];
		}, 4000);
		setTimeout(() => {
			osc.frequency.value = notes[58];
		}, 4400);
	}