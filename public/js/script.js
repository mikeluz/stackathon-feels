function createSynthesizer() {
	return new (window.AudioContext || window.webkitAudioContext)();
}

var audioCtx = createSynthesizer();

//set up the different audio nodes we will use for the app
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.1;

// grab background
let background = document.getElementById("app");

// arrays of frequencies
var arr = new Array(8);
var atonalArr = new Array(8);

// osc constructor
function createOscillator (audioCtx, freq, type) {
	this.osc = audioCtx.createOscillator();
	this.osc.frequency.value = freq;
	this.osc.type = type;

	this.osc.connect(gainNode);
	gainNode.connect(audioCtx.destination);
}

const toneTypes = ["sine", "square", "triangle", "sawtooth"];

/////////////////////////
// create keyboard events
/////////////////////////

// keydown -- activates oscillator
// this is as if CAPS LOCK is on

window.addEventListener('keydown', (e) => {

	let one = document.getElementById("one");
	let two = document.getElementById("two");
	let three = document.getElementById("three");
	let four = document.getElementById("four");
	let five = document.getElementById("five");
	let six = document.getElementById("six");
	let seven = document.getElementById("seven");
	let eight = document.getElementById("eight");
	let nine = document.getElementById("nine");
	let ten = document.getElementById("ten");
	let eleven = document.getElementById("eleven");
	let twelve = document.getElementById("twelve");
	let thirteen = document.getElementById("thirteen");
	let fourteen = document.getElementById("fourteen");
	let fifteen = document.getElementById("fifteen");
	let sixteen = document.getElementById("sixteen");
	let seventeen = document.getElementById("seventeen");
	let eighteen = document.getElementById("eighteen");
	let nineteen = document.getElementById("nineteen");
	let twenty = document.getElementById("twenty");
	let twentyone = document.getElementById("twenty-one");
	let twentytwo = document.getElementById("twenty-two");
	let twentythree = document.getElementById("twenty-three");
	let twentyfour = document.getElementById("twenty-four");
	let twentyfive = document.getElementById("twenty-five");
	let twentysix = document.getElementById("twenty-six");
	let twentyseven = document.getElementById("twenty-seven");
	let twentyeight = document.getElementById("twenty-eight");
	let twentynine = document.getElementById("twenty-nine");
	let thirty = document.getElementById("thirty");

	console.log("in keydown", e.which);

	const notes = createNoteTable();
	const linearNotes = createLinearNoteTable();
	const xTuning = createTuning('xenakis_chrom', 220);
	const palaceTuning = createTuning('palace', 220);

	let allowed = true;

	// basic keyboard -- tone starts and stops with keypress //
	///////////////////////////////////////////////////////////

	// 'a' on keyboard -- osc1
	if (e.which === 65) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc1 = new createOscillator(audioCtx, xTuning.note(2), toneTypes[3]);
		arr[0] = osc1.osc;
		arr[0].start();
		background.style.backgroundColor = getRandomColor();
		one.style.backgroundColor = getRandomColor();
	}

	// 's' on keyboard
	if (e.which === 83) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc2 = new createOscillator(audioCtx, xTuning.note(3), toneTypes[3]);
		arr[1] = osc2.osc;
		arr[1].start();
		background.style.backgroundColor = getRandomColor();
		two.style.backgroundColor = getRandomColor();
	}

	// 'd' on keyboard
	if (e.which === 68) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc3 = new createOscillator(audioCtx, xTuning.note(0), toneTypes[3]);
		arr[2] = osc3.osc;
		arr[2].start();
		background.style.backgroundColor = getRandomColor();
		three.style.backgroundColor = getRandomColor();
	}

	// 'f' on keyboard
	if (e.which === 70) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc4 = new createOscillator(audioCtx, xTuning.note(1), toneTypes[3]);
		arr[3] = osc4.osc;
		arr[3].start();
		background.style.backgroundColor = getRandomColor();
		four.style.backgroundColor = getRandomColor();
	}

	// 'j' on keyboard
	if (e.which === 74) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc5 = new createOscillator(audioCtx, xTuning.note(4), toneTypes[3]);
		arr[4] = osc5.osc;
		arr[4].start();
		background.style.backgroundColor = getRandomColor();
		five.style.backgroundColor = getRandomColor();
	}

	// 'k' on keyboard
	if (e.which === 75) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc6 = new createOscillator(audioCtx, palaceTuning.note(1), toneTypes[3]);
		arr[5] = osc6.osc;
		arr[5].start();
		background.style.backgroundColor = getRandomColor();
		six.style.backgroundColor = getRandomColor();
	}

	// 'l' on keyboard
	if (e.which === 76) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc7 = new createOscillator(audioCtx, palaceTuning.note(2), toneTypes[3]);
		arr[6] = osc7.osc;
		arr[6].start();
		background.style.backgroundColor = getRandomColor();
		seven.style.backgroundColor = getRandomColor();
	}

	// ';' on keyboard
	if (e.which === 186) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc8 = new createOscillator(audioCtx, palaceTuning.note(3), toneTypes[3]);
		arr[7] = osc8.osc;
		arr[7].start();
		background.style.backgroundColor = getRandomColor();
		eight.style.backgroundColor = getRandomColor();
	}

	// 'q' on keyboard
	if (e.which === 81) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc9 = new createOscillator(audioCtx, notes[2]["G"], "square");
		arr[8] = osc9.osc;
		arr[8].start();
		background.style.backgroundColor = getRandomColor();
		nine.style.backgroundColor = getRandomColor();
	}

	// 'w' on keyboard
	if (e.which === 87) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc10 = new createOscillator(audioCtx, notes[2]["G#"], "square");
		arr[9] = osc10.osc;
		arr[9].start();
		background.style.backgroundColor = getRandomColor();
		ten.style.backgroundColor = getRandomColor();
	}

	// 'e' on keyboard
	if (e.which === 69) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[2]["A#"], "square");
		arr[10] = osc11.osc;
		arr[10].start();
		background.style.backgroundColor = getRandomColor();
		eleven.style.backgroundColor = getRandomColor();
	}

	// 'r' on keyboard
	if (e.which === 82) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[2]["F#"], "square");
		arr[11] = osc12.osc;
		arr[11].start();
		background.style.backgroundColor = getRandomColor();
		twelve.style.backgroundColor = getRandomColor();
	}

	// 'z' on keyboard
	if (e.which === 90) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc9 = new createOscillator(audioCtx, notes[3]["G#"], "square");
		arr[8] = osc9.osc;
		arr[8].start();
		background.style.backgroundColor = getRandomColor();
		thirteen.style.backgroundColor = getRandomColor();
	}

	// 'x' on keyboard
	if (e.which === 88) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc10 = new createOscillator(audioCtx, notes[3]["A"], "square");
		arr[9] = osc10.osc;
		arr[9].start();
		background.style.backgroundColor = getRandomColor();
		fourteen.style.backgroundColor = getRandomColor();
	}

	// 'c' on keyboard
	if (e.which === 67) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[3]["G"], "sine");
		arr[10] = osc11.osc;
		arr[10].start();
		background.style.backgroundColor = getRandomColor();
		fifteen.style.backgroundColor = getRandomColor();
	}

	// 'v' on keyboard
	if (e.which === 86) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[3]["B"], "sine");
		arr[11] = osc12.osc;
		arr[11].start();
		background.style.backgroundColor = getRandomColor();
		sixteen.style.backgroundColor = getRandomColor();
	}

	// 't' on keyboard
	if (e.which === 84) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[4]["C"], "sine");
		arr[12] = osc11.osc;
		arr[12].start();
		background.style.backgroundColor = getRandomColor();
		seventeen.style.backgroundColor = getRandomColor();
	}

	// 'y' on keyboard
	if (e.which === 89) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[4]["D"], "sine");
		arr[13] = osc12.osc;
		arr[13].start();
		background.style.backgroundColor = getRandomColor();
		eighteen.style.backgroundColor = getRandomColor();
	}

	// 'g' on keyboard
	if (e.which === 71) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[4]["D#"], "sine");
		arr[14] = osc11.osc;
		arr[14].start();
		background.style.backgroundColor = getRandomColor();
		nineteen.style.backgroundColor = getRandomColor();
	}

	// 'h' on keyboard
	if (e.which === 72) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[4]["C#"], "sine");
		arr[15] = osc12.osc;
		arr[15].start();
		background.style.backgroundColor = getRandomColor();
		twenty.style.backgroundColor = getRandomColor();
	}

	// 'b' on keyboard
	if (e.which === 66) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[4]["F"], "sine");
		arr[16] = osc11.osc;
		arr[16].start();
		background.style.backgroundColor = getRandomColor();
		twentyone.style.backgroundColor = getRandomColor();
	}

	// 'n' on keyboard
	if (e.which === 78) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[3]["E"], "sine");
		arr[17] = osc12.osc;
		arr[17].start();
		background.style.backgroundColor = getRandomColor();
		twentytwo.style.backgroundColor = getRandomColor();
	}

	// 'u' on keyboard
	if (e.which === 85) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[3]["G"], "sine");
		arr[18] = osc11.osc;
		arr[18].start();
		background.style.backgroundColor = getRandomColor();
		twentythree.style.backgroundColor = getRandomColor();
	}

	// 'i' on keyboard
	if (e.which === 73) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[3]["A#"], "sine");
		arr[19] = osc12.osc;
		arr[19].start();
		background.style.backgroundColor = getRandomColor();
		twentyfour.style.backgroundColor = getRandomColor();
	}

	// 'o' on keyboard
	if (e.which === 79) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[3]["F"], "sine");
		arr[20] = osc11.osc;
		arr[20].start();
		background.style.backgroundColor = getRandomColor();
		twentyfive.style.backgroundColor = getRandomColor();
	}

	// 'p' on keyboard
	if (e.which === 80) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[2]["B"], "sine");
		arr[21] = osc12.osc;
		arr[21].start();
		background.style.backgroundColor = getRandomColor();
		twentysix.style.backgroundColor = getRandomColor();
	}

	// 'm' on keyboard
	if (e.which === 77) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[3]["G"], "sine");
		arr[22] = osc11.osc;
		arr[22].start();
		background.style.backgroundColor = getRandomColor();
		twentyseven.style.backgroundColor = getRandomColor();
	}

	// ',' on keyboard
	if (e.which === 188) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[3]["E"], "sine");
		arr[23] = osc12.osc;
		arr[23].start();
		background.style.backgroundColor = getRandomColor();
		twentyeight.style.backgroundColor = getRandomColor();
	}

	// '.' on keyboard
	if (e.which === 190) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc11 = new createOscillator(audioCtx, notes[2]["A#"], "sine");
		arr[24] = osc11.osc;
		arr[24].start();
		background.style.backgroundColor = getRandomColor();
		twentynine.style.backgroundColor = getRandomColor();
	}

	// '/' on keyboard
	if (e.which === 191) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc12 = new createOscillator(audioCtx, notes[3]["B"], "sine");
		arr[25] = osc12.osc;
		arr[25].start();
		background.style.backgroundColor = getRandomColor();
		thirty.style.backgroundColor = getRandomColor();
	}

	if (e.which === 1) {
		if (e.repeat != undefined) {
			allowed = !e.repeat;
		}
		if (!allowed) {
			return;
		}
		allowed = false;
		let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
		arr[0] = osc1.osc;
		arr[0].start();
		background.style.backgroundColor = getRandomColor();
		one.style.backgroundColor = getRandomColor();
	}

	if (e.which === 91) {
		e.preventDefault();
	}

	// tab bar to randomly sequence
	if (e.which === 9) {
		e.preventDefault();
		arr.forEach((osc, i) => {
			sequencerRand.call(null, osc, linearNotes, i);
		})
	}

});

window.addEventListener('keypress', (e) => {

	let allowed = true;

	///////////////////////////////////////////////////////////
	// atonal keyboard -- osc starts with press and contines //
	// values are option+key //////////////////////////////////
	///////////////////////////////////////////////////////////
	// if (e.which === 229) {
	// 	if (e.repeat != undefined) {
	// 		allowed = !e.repeat;
	// 	}
	// 	if (!allowed) {
	// 		return;
	// 	}
	// 	allowed = false;
	// 	let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
	// 	atonalArr[0] = osc1.osc;
	// 	atonalArr[0].start();
	// 	background.style.backgroundColor = getRandomColor();
	// 	one.style.backgroundColor = getRandomColor();
	// }

	// if (e.which === 223) {
	// 	if (e.repeat != undefined) {
	// 		allowed = !e.repeat;
	// 	}
	// 	if (!allowed) {
	// 		return;
	// 	}
	// 	allowed = false;
	// 	let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
	// 	atonalArr[1] = osc1.osc;
	// 	atonalArr[1].start();
	// 	background.style.backgroundColor = getRandomColor();
	// 	two.style.backgroundColor = getRandomColor();
	// }

	// if (e.which === 8706) {
	// 	if (e.repeat != undefined) {
	// 		allowed = !e.repeat;
	// 	}
	// 	if (!allowed) {
	// 		return;
	// 	}
	// 	allowed = false;
	// 	let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
	// 	atonalArr[2] = osc1.osc;
	// 	atonalArr[2].start();
	// 	background.style.backgroundColor = getRandomColor();
	// 	two.style.backgroundColor = getRandomColor();
	// }

	// if (e.which === 402) {
	// 	if (e.repeat != undefined) {
	// 		allowed = !e.repeat;
	// 	}
	// 	if (!allowed) {
	// 		return;
	// 	}
	// 	allowed = false;
	// 	let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
	// 	atonalArr[3] = osc1.osc;
	// 	atonalArr[3].start();
	// 	background.style.backgroundColor = getRandomColor();
	// 	two.style.backgroundColor = getRandomColor();
	// }

	// if (e.which === 8710) {
	// 	if (e.repeat != undefined) {
	// 		allowed = !e.repeat;
	// 	}
	// 	if (!allowed) {
	// 		return;
	// 	}
	// 	allowed = false;
	// 	let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
	// 	atonalArr[0] = osc1.osc;
	// 	atonalArr[0].start();
	// 	background.style.backgroundColor = getRandomColor();
	// 	one.style.backgroundColor = getRandomColor();
	// }

	// if (e.which === 730) {
	// 	if (e.repeat != undefined) {
	// 		allowed = !e.repeat;
	// 	}
	// 	if (!allowed) {
	// 		return;
	// 	}
	// 	allowed = false;
	// 	let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
	// 	atonalArr[1] = osc1.osc;
	// 	atonalArr[1].start();
	// 	background.style.backgroundColor = getRandomColor();
	// 	two.style.backgroundColor = getRandomColor();
	// }

	// if (e.which === 172) {
	// 	if (e.repeat != undefined) {
	// 		allowed = !e.repeat;
	// 	}
	// 	if (!allowed) {
	// 		return;
	// 	}
	// 	allowed = false;
	// 	let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
	// 	atonalArr[2] = osc1.osc;
	// 	atonalArr[2].start();
	// 	background.style.backgroundColor = getRandomColor();
	// 	two.style.backgroundColor = getRandomColor();
	// }

	// if (e.which === 8230) {
	// 	if (e.repeat != undefined) {
	// 		allowed = !e.repeat;
	// 	}
	// 	if (!allowed) {
	// 		return;
	// 	}
	// 	allowed = false;
	// 	let osc1 = new createOscillator(audioCtx, Math.floor(Math.random() * 1000), "sine");
	// 	atonalArr[3] = osc1.osc;
	// 	atonalArr[3].start();
	// 	background.style.backgroundColor = getRandomColor();
	// 	two.style.backgroundColor = getRandomColor();
	// }

	// // q
	// if (e.which === 113) {
	// 	one.style.backgroundColor = getRandomColor();
	// 	arr[0].frequency.value += 10;
	// }
	// // z
	// if (e.which === 122) {
	// 	one.style.backgroundColor = getRandomColor();
	// 	arr[1].frequency.value -= 10;
	// }
	// // w
	// if (e.which === 119) {
	// 	one.style.backgroundColor = getRandomColor();
	// 	arr[2].frequency.value += 10;
	// }
	// // x
	// if (e.which === 120) {
	// 	one.style.backgroundColor = getRandomColor();
	// 	arr[3].frequency.value -= 10;
	// }
	// // e
	// if (e.which === 101) {
	// 	one.style.backgroundColor = getRandomColor();
	// 	arr[4].frequency.value += 10;
	// }
	// // c
	// if (e.which === 99) {
	// 	one.style.backgroundColor = getRandomColor();
	// 	arr[5].frequency.value -= 10;
	// }
	// // r
	// if (e.which === 114) {
	// 	one.style.backgroundColor = getRandomColor();
	// 	arr[6].frequency.value += 10;
	// }
	// // v
	// if (e.which === 118) {
	// 	one.style.backgroundColor = getRandomColor();
	// 	arr[7].frequency.value -= 10;
	// }

})

let allowed = true;

// keyup -- deactivates oscillator
window.addEventListener('keyup', (e) => {

	let one = document.getElementById("one");
	let two = document.getElementById("two");
	let three = document.getElementById("three");
	let four = document.getElementById("four");
	let five = document.getElementById("five");
	let six = document.getElementById("six");
	let seven = document.getElementById("seven");
	let eight = document.getElementById("eight");
	let nine = document.getElementById("nine");
	let ten = document.getElementById("ten");
	let eleven = document.getElementById("eleven");
	let twelve = document.getElementById("twelve");
	let thirteen = document.getElementById("thirteen");
	let fourteen = document.getElementById("fourteen");
	let fifteen = document.getElementById("fifteen");
	let sixteen = document.getElementById("sixteen");
	let seventeen = document.getElementById("seventeen");
	let eighteen = document.getElementById("eighteen");
	let nineteen = document.getElementById("nineteen");
	let twenty = document.getElementById("twenty");
	let twentyone = document.getElementById("twenty-one");
	let twentytwo = document.getElementById("twenty-two");
	let twentythree = document.getElementById("twenty-three");
	let twentyfour = document.getElementById("twenty-four");
	let twentyfive = document.getElementById("twenty-five");
	let twentysix = document.getElementById("twenty-six");
	let twentyseven = document.getElementById("twenty-seven");
	let twentyeight = document.getElementById("twenty-eight");
	let twentynine = document.getElementById("twenty-nine");
	let thirty = document.getElementById("thirty");

	console.log("in keyup", e.which);

	// 'a' on keyboard -- osc1
	if (e.which === 65) {
		arr[0].stop();
		one.style.backgroundColor = "transparent";
	}

	// 's' on keyboard
	if (e.which === 83) {
		arr[1].stop();
		two.style.backgroundColor = "transparent";
	}

	// 'd' on keyboard
	if (e.which === 68) {
		arr[2].stop();
		three.style.backgroundColor = "transparent";
	}

	// 'f' on keyboard
	if (e.which === 70) {
		arr[3].stop();
		four.style.backgroundColor = "transparent";
	}

	// 'j' on keyboard
	if (e.which === 74) {
		arr[4].stop();
		five.style.backgroundColor = "transparent";
	}

	// 'k' on keyboard
	if (e.which === 75) {
		arr[5].stop();
		six.style.backgroundColor = "transparent";
	}

	// 'l' on keyboard
	if (e.which === 76) {
		arr[6].stop();
		seven.style.backgroundColor = "transparent";
	}

	// ';' on keyboard
	if (e.which === 186) {
		arr[7].stop();
		eight.style.backgroundColor = "transparent";
	}

	// 'q' on keyboard
	if (e.which === 81) {
		arr[8].stop();
		nine.style.backgroundColor = "transparent";
	}

	// 'w' on keyboard
	if (e.which === 87) {
		arr[9].stop();
		ten.style.backgroundColor = "transparent";
	}

	// 'e' on keyboard
	if (e.which === 69) {
		arr[10].stop();
		eleven.style.backgroundColor = "transparent";
	}

	// 'r' on keyboard
	if (e.which === 82) {
		arr[11].stop();
		twelve.style.backgroundColor = "transparent";
	}

	// 'z' on keyboard
	if (e.which === 90) {
		arr[8].stop();
		thirteen.style.backgroundColor = "transparent";
	}

	// 'x' on keyboard
	if (e.which === 88) {
		arr[9].stop();
		fourteen.style.backgroundColor = "transparent";
	}

	// 'c' on keyboard
	if (e.which === 67) {
		arr[10].stop();
		fifteen.style.backgroundColor = "transparent";
	}

	// 'v' on keyboard
	if (e.which === 86) {
		arr[11].stop();
		sixteen.style.backgroundColor = "transparent";
	}

	// 't' on keyboard
	if (e.which === 84) {
		arr[12].stop();
		seventeen.style.backgroundColor = "transparent";
	}

	// 'y' on keyboard
	if (e.which === 89) {
		arr[13].stop();
		eighteen.style.backgroundColor = "transparent";
	}

	// 'g' on keyboard
	if (e.which === 71) {
		arr[14].stop();
		nineteen.style.backgroundColor = "transparent";
	}

	// 'h' on keyboard
	if (e.which === 72) {
		arr[15].stop();
		twenty.style.backgroundColor = "transparent";
	}

	// 'b' on keyboard
	if (e.which === 66) {
		arr[16].stop();
		twentyone.style.backgroundColor = "transparent";
	}

	// 'n' on keyboard
	if (e.which === 78) {
		arr[17].stop();
		twentytwo.style.backgroundColor = "transparent";
	}

	// 'u' on keyboard
	if (e.which === 85) {
		arr[18].stop();
		twentythree.style.backgroundColor = "transparent";
	}

	// 'i' on keyboard
	if (e.which === 73) {
		arr[19].stop();
		twentyfour.style.backgroundColor = "transparent";
	}

	// 'o' on keyboard
	if (e.which === 79) {
		arr[20].stop();
		twentyfive.style.backgroundColor = "transparent";
	}

	// 'p' on keyboard
	if (e.which === 80) {
		arr[21].stop();
		twentysix.style.backgroundColor = "transparent";
	}

	// 'm' on keyboard
	if (e.which === 77) {
		arr[22].stop();
		twentyseven.style.backgroundColor = "transparent";
	}

	// ',' on keyboard
	if (e.which === 188) {
		arr[23].stop();
		twentyeight.style.backgroundColor = "transparent";
	}

	// '.' on keyboard
	if (e.which === 190) {
		arr[24].stop();
		twentynine.style.backgroundColor = "transparent";
	}

	// '/' on keyboard
	if (e.which === 191) {
		arr[25].stop();
		thirty.style.backgroundColor = "transparent";
	}

});

// keypress -- events that rely on single keypress
window.addEventListener('keypress', (e) => {

	console.log("in keypress", e.which);

	const notes = createNoteTable();
	const linearNotes = createLinearNoteTable();

	// left bracket to decrease pitch
	if (e.which === 91) {
		arr.forEach(osc => {
			osc.frequency.value -= (Math.floor(Math.random() * 100) / 2);
		});
	}

	// right bracket to increase pitch
	if (e.which === 93) {
		arr.forEach(osc => {
			osc.frequency.value += (Math.floor(Math.random() * 100) / 2);
		});
	}

	// enter key
	if (e.which === 13) {
		arr.forEach((osc) => {
			sequencer.call(null, osc, notes);
		});
	}

	// 1 key
	if (e.which === 49) {
		sequencerA.call(null, arr[0], notes);
		sequencerB.call(null, arr[1], notes);
		var go = setInterval(() => {
			sequencerA.call(null, arr[0], notes);
			sequencerB.call(null, arr[1], notes);
		}, 5400)
	}

	// 2 key
	if (e.which === 50) {
		chromaA.call(null, arr[2], linearNotes);
		chromaB.call(null, arr[3], linearNotes);
		var go = setInterval(() => {
			chromaA.call(null, arr[2], linearNotes);
			chromaB.call(null, arr[3], linearNotes);
		}, 5200)
	}

	// 3 key
	if (e.which === 51) {
		chromaA.call(null, arr[2], linearNotes);
		sequencerB.call(null, arr[1], notes);
		var go = setInterval(() => {
			chromaA.call(null, arr[2], linearNotes);
			sequencerB.call(null, arr[1], notes);
		}, 5200)
	}

})
