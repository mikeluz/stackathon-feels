import React, { Component } from 'react';
import { Link } from 'react-router'; 

// function findValueOfWords(str) {
//       var arrOfWords = str.split(" ");
//       var arrOfFreq = arrOfWords.map(word => {
//         for (let i = 0; i < word.length; i++) {
// 	        let sum = 0;
//             sum += (word.charCodeAt(i) * (Math.random() * 8) + arrOfWords.length);
//             return sum;
//         }
//       })
//       return arrOfFreq;
// }

function findValueOfWordsByChar(str) {
      var arrOfWords = str.split(" "); // ["hello", "world"]
      var arrOfFreq = arrOfWords.map(word => {
      	let chord = [];
        for (let i = 0; i < word.length; i++) {
	        chord.push(word.charCodeAt(i));
        }
        return chord;
      })
      return arrOfFreq;
}

export default class TextInterface extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            feels: [],
            feel: 0,
            oscArray: [],
            osc: {},
            interval: 0,
            scale: []
        }
        // this.handleClickListen = this.handleClickListen.bind(this);
        this.handleClickListenByChar = this.handleClickListenByChar.bind(this);
        // this.handleClickListenArp = this.handleClickListenArp.bind(this);
        this.handleClickListenArpByChar = this.handleClickListenArpByChar.bind(this);
        this.handleClickListenChord = this.handleClickListenChord.bind(this);
        this.handleClickStop = this.handleClickStop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        let osc = new createOscillator(audioCtx, this.state.feel, toneTypes[2]);
        this.setState({
            osc: osc
        })
    }

    componentDidMount() {
		const scale = createLinearNoteTable();
    	this.setState({
    		scale: scale
    	})
    }

    handleChange(text) {
        // let feels = findValueOfWords(text);
        let feels = findValueOfWordsByChar(text);
        let feel = reduceValues(feels);
        this.setState({
            text: text,
            feels: feels,
            feel: feel
        });
    }

    handleChangeVolume(evt) {
        gainNode.gain.value = evt.target.value;
    }

    handleChangePitch(evt) {
        this.state.osc.osc.frequency.value = evt.target.value;
    }

    handleSubmit(e) {
        console.log("state", this.state);
    }

    // handleClickListen() {
    //     this.state.oscArray = this.state.feels.map((freq, i) => {
    //         var osc = new createOscillator(audioCtx, freq, toneTypes[0]);
    //         setTimeout(() => {
    //             osc.osc.start();
    //         }, (100 + (i * 400)));
    //         return osc;
    //     });
    // }

    handleClickListenByChar() {
    	var feelsByChar = this.state.feels.reduce((acc, curr) => {
	      	return acc.concat(curr);
	    });
        this.state.oscArray = feelsByChar.map((freq, i) => {
        	var note = this.state.scale[Math.floor((freq / 2) * Math.random())];
            var osc = new createOscillator(audioCtx, note, toneTypes[0]);
            setTimeout(() => {
                osc.osc.start();
            }, (100 + (i * 400)));
            return osc;
        });
    }

    handleClickListenChord() {
        this.state.oscArray = this.state.feels.map((chord) => {
            var oscChord = [];
	        	for (var i = 0; i < chord.length; i++) {
		        	var note = this.state.scale[Math.floor((chord[i] / 2) * Math.random())];
		            var osc = new createOscillator(audioCtx, note, toneTypes[0]);
		            oscChord.push(osc);
	        	}
            return oscChord;
        });
        this.state.oscArray.forEach((chord, indexOne) => {
        	var currentTime = indexOne * 600;
        	chord.forEach((osc, indexTwo) => {
	        	setTimeout(() => {
		        	osc.osc.start();
		        	if (indexOne > 0) {
		        		setTimeout(() => {
			        		this.state.oscArray[indexOne - 1].forEach(osc => {
			        			console.log("in Stop", osc);
			        			osc.osc.stop();
			        		}, currentTime);
		        		});
		        	}
	            }, currentTime);
        	});
        });
    }

    // handleClickListenArp() {
    //     this.state.osc.osc.start();
    //     this.state.interval = setInterval(() => {
    //         this.state.osc.osc.frequency.value = this.state.feels.pop();
    //     }, 400)
    // };

    handleClickListenArpByChar() {
    	var feelsByChar = this.state.feels.reduce((acc, curr) => {
	      	return acc.concat(curr);
	    });
        this.state.osc.osc.start();
        this.state.interval = setInterval(() => {
            this.state.osc.osc.frequency.value = this.state.scale[Math.floor(feelsByChar.shift() / 3)];
        }, 400)
    };

    handleClickStop() {
    	console.log("oscArray on state", this.state.oscArray);
        this.state.oscArray.forEach(osc => {
        	if (Array.isArray(osc)) {
        		osc.forEach(osc => {
        			osc.osc.stop();
        		});
        	} else {
	            osc.osc.stop();
        	}
        });
        clearInterval(this.state.interval);
        this.state.osc.osc.stop();
        let osc = new createOscillator(audioCtx, this.state.feel, toneTypes[2]);
        this.setState({
            osc: osc
        })
    }

    render() {
        return (
        <div id='main'>
        <div id="text-interface">
        <br />
        <h1 id="headline">FEELS</h1>
            <div className='row'>
                <div className='col-sm-2'>
                    <div className='box' id='thirty-one'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <h1 id="happy-face">:)</h1>
                </div>
                <div className='col-sm-4'>
                <form method="POST" action={"/api/howamifeeling"} onSubmit={this.handleSubmit}>
                <textarea 
                onChange={(evt) => this.handleChange(evt.target.value)}
                name="feels" 
                id="text-area"
                autoFocus 
                placeholder="Write something..."
                value={this.state.text} 
                rows="10" 
                cols="20"></textarea>
                <hr/>
                <div id="volume">
                    <input id="volume" className= "form-control" type="range" min="0.0" max="0.8" step="0.01"
                        defaultValue="0.25" list="volumes" name="volume" onChange={(evt) => this.handleChangeVolume(evt)}/>
                </div>
                <div id="pitch">
                    <input id="pitch" className= "form-control" type="range" min="200" max="1000" step="10"
                        defaultValue={this.state.osc.osc.frequency.value} list="volumes" name="volume" onChange={(evt) => this.handleChangePitch(evt)}/>
                </div>
                <br/>
                <button>PRINT</button>
                </form>
                <button onClick={this.handleClickListenByChar}>LISTEN</button>
                <button onClick={this.handleClickListenChord}>CHORDS</button>
                <button onClick={this.handleClickListenArpByChar}>ARP</button>
                <button onClick={this.handleClickStop}>STOP</button>
                <br/>
                <button id="play">BEAT</button>
                </div>
                <div className='col-sm-2'>
                    <h1 id="sad-face">:(</h1>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='thirty-four'><p></p>
                    </div>
                </div>
            </div>
        	<h2><Link to={"/"}>Back 2 Synth</Link></h2>
        	<br/>
        </div>
        </div>
    )}
}