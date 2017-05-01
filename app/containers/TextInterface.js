import React, { Component } from 'react';
import { Link } from 'react-router'; 

function findValueOfWordsByChar(str) {
      var arrOfWords = str.split(" ");
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
            scale: [],
            bpm: 400,
            fun: {},
            harm: {},
            tone: "sine"
        }
        this.handleClickListenByChar = this.handleClickListenByChar.bind(this);
        this.handleClickListenArpByChar = this.handleClickListenArpByChar.bind(this);
        this.handleClickListenChord = this.handleClickListenChord.bind(this);
        this.handleClickStop = this.handleClickStop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFun = this.handleFun.bind(this);
        this.handleTone = this.handleTone.bind(this);
    }

    componentWillMount() {
        let osc = new createOscillator(audioCtx, this.state.feel, this.state.tone);
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

    handleClickListenByChar() {
    	var feelsByChar = this.state.feels.reduce((acc, curr) => {
	      	return acc.concat(curr);
	    });
        this.state.oscArray = feelsByChar.map((freq, i) => {
        	var note = this.state.scale[Math.floor((freq / 2) * Math.random())];
            var osc = new createOscillator(audioCtx, note, this.state.tone);
            setTimeout(() => {
                osc.osc.start();
            }, (100 + (i * this.state.bpm)));
            osc.osc.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 12)
            return osc;
        });
    }

    handleClickListenChord() {
        this.state.oscArray = this.state.feels.map((chord) => {
            var oscChord = [];
	        	for (var i = 0; i < chord.length; i++) {
		        	var note = this.state.scale[Math.floor((chord[i] / 2) * Math.random())];
		            var osc = new createOscillator(audioCtx, note, this.state.tone);
		            oscChord.push(osc);
	        	}
            return oscChord;
        });
        this.state.oscArray.forEach((chord, indexOne) => {
        	var currentTime = indexOne * 1000;
        	chord.forEach((osc, indexTwo) => {
	        	setTimeout(() => {
		        	osc.osc.start();
		        	if (indexOne > 0) {
		        		setTimeout(() => {
			        		this.state.oscArray[indexOne - 1].forEach(osc => {
			        			osc.osc.stop();
			        		}, audioCtx.currentTime + currentTime);
		        		});
		        	}
	            }, audioCtx.currentTime + currentTime);
        	});
        });
    }

	// normal timeouts -- gives it portamento! //
	/////////////////////////////////////////////
    // handleClickListenArpByChar() {
    // 	var feelsByChar = this.state.feels.reduce((acc, curr) => {
	   //    	return acc.concat(curr);
	   //  });
    //     this.state.osc.osc.start();
    //     this.state.interval = setInterval(() => {
    //         this.state.osc.osc.frequency.value = this.state.scale[Math.floor(feelsByChar.shift() / 3)];
    //     }, 400)
    // };

    handleClickListenArpByChar() {
    	this.state.osc.osc.type = this.state.tone;
    	var feelsByChar = this.state.feels.reduce((acc, curr) => {
	      	return acc.concat(curr);
	    });
        this.state.osc.osc.start();
        this.state.interval = setInterval(() => {
            this.state.osc.osc.frequency.setValueAtTime(this.state.scale[Math.floor(feelsByChar.shift() / 3)], audioCtx.currentTime);
        }, this.state.bpm)
    };

    handleClickStop() {
        if (this.state.fun.osc) {
        	this.state.fun.osc.stop();
	    	this.state.harm.osc.stop();
        }
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
        if (this.state.osc.osc) {
        	this.state.osc.osc.stop();
	        let osc = new createOscillator(audioCtx, this.state.feel, this.state.tone);
	        this.setState({
	            osc: osc
	        })
        }
    }

    handleTone(e) {
    	this.setState({
    		tone: e.target.value 
    	})
    }

    handleBPM(evt) {
    	this.setState({
    		bpm: evt.target.value
    	})
    }

    handleFun() {
    	var fun = new createOscillator(audioCtx, 220, this.state.tone);
    	var harm = new createOscillator(audioCtx, 293.664767917407560, this.state.tone);
    	this.setState({
    		fun: fun,
    		harm: harm
    	})
    	fun.osc.start();
    	harm.osc.start();
    	var bool = false;
    	setInterval(() => {
    		if (!bool) {
		    	fun.osc.frequency.setValueAtTime(this.state.scale[24], audioCtx.currentTime);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[26], audioCtx.currentTime + 0.2);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[20], audioCtx.currentTime + 0.4);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[25], audioCtx.currentTime + 0.6);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[23], audioCtx.currentTime + 0.8);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[25], audioCtx.currentTime + 1);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[26], audioCtx.currentTime + 1.2);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[23], audioCtx.currentTime + 1.4);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[41], audioCtx.currentTime + 1.6);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[40], audioCtx.currentTime + 1.8);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[39], audioCtx.currentTime + 2);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[40], audioCtx.currentTime + 2.2);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[36], audioCtx.currentTime + 2.4);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[35], audioCtx.currentTime + 2.6);
		    	fun.osc.frequency.setValueAtTime(this.state.scale[30], audioCtx.currentTime + 2.8);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[29], audioCtx.currentTime);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[31], audioCtx.currentTime + 0.1);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[25], audioCtx.currentTime + 0.2);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[30], audioCtx.currentTime + 0.3);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[28], audioCtx.currentTime + 0.4);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[30], audioCtx.currentTime + 0.5);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[31], audioCtx.currentTime + 0.6);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[28], audioCtx.currentTime + 0.7);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[31], audioCtx.currentTime + 0.8);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[25], audioCtx.currentTime + 0.9);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[30], audioCtx.currentTime + 1);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[28], audioCtx.currentTime + 1.1);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[30], audioCtx.currentTime + 1.2);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[31], audioCtx.currentTime + 1.3);
		    	harm.osc.frequency.setValueAtTime(this.state.scale[28], audioCtx.currentTime + 1.4);
    		} else {
		    	fun.osc.frequency.setValueAtTime(220, audioCtx.currentTime);
		    	harm.osc.frequency.setValueAtTime(293.664767917407560, audioCtx.currentTime);
    		}
	    	bool = !bool;
    	}, this.state.bpm * 2)
    }

    render() {
        return (
        <div id='main'>
        <div id="text-interface">
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
                <select value={this.state.tone} onChange={this.handleTone}>
	                <option value="sine">Sine</option>
	                <option value="square">Square</option>
	                <option value="triangle">Triangle</option>
	                <option value="sawtooth">Sawtooth</option>
                </select>
                <br/>
                <br/>
                <div id="bpm">
                	<label>Time Interval</label>
                    <input id="bpm" className= "form-control" type="range" min="100" max="1000" step="10"
                        defaultValue={this.state.bpm} list="volumes" name="volume" onChange={(evt) => this.handleBPM(evt)}/>
                </div>
                <div id="volume">
                	<label>Volume</label>
                    <input id="volume" className= "form-control" type="range" min="0.0" max="0.6" step="0.01"
                        defaultValue={gainNode.gain.value} list="volumes" name="volume" onChange={(evt) => this.handleChangeVolume(evt)}/>
                </div>
                <div id="pitch">
                	<label>Pitch (Arp Only)</label>
                    <input id="pitch" className= "form-control" type="range" min="200" max="1000" step="10"
                        defaultValue={this.state.osc.osc.frequency.value} list="volumes" name="pitch" onChange={(evt) => this.handleChangePitch(evt)}/>
                </div>
                <br/>
                {/*<button>PRINT</button>*/}
                </form>
                <button onClick={this.handleClickListenArpByChar}>ARP</button>
                <br/>
                <button onClick={this.handleClickListenByChar}>SUS</button>
                <button id="stop" onClick={this.handleClickStop}>STOP</button>
                <button onClick={this.handleClickListenChord}>CHORDS</button>
                <button onClick={this.handleFun}>FUN</button>
                <br/>
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