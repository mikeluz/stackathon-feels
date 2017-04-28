import React, { Component } from 'react';
import { Link } from 'react-router'; 

function findValueOfWords(str) {
      var arrOfWords = str.split(" ");
      var arrOfFreq = arrOfWords.map(word => {
        for (let i = 0; i < word.length; i++) {
          let sum = 0;
            sum += (word.charCodeAt(i) * (Math.random() * 8) + arrOfWords.length);
            return sum;
        }
      })
      return arrOfFreq;
}

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            feels: [],
            feel: 0,
            oscArray: []
        }
        this.handleClickListen = this.handleClickListen.bind(this);
        this.handleClickStop = this.handleClickStop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(text) {
        let feels = findValueOfWords(text);
        let feel = reduceValues(feels);
        this.setState({
            text: text,
            feels: feels,
            feel: feel
        });
        console.log(this.state);
    }

    handleSubmit(e) {
        console.log("state", this.state);
    }

    handleClickListen() {
        var osc = new createOscillator(audioCtx, this.state.feel, toneTypes[0]);
        this.state.oscArray = this.state.feels.map((freq, i) => {
            var osc = new createOscillator(audioCtx, freq, toneTypes[0]);
            setTimeout(() => {
                osc.osc.start();
            }, (100 + (i * 200)));
            return osc;
        });
    }

    handleClickStop() {
        this.state.oscArray.forEach(osc => {
            osc.osc.stop();
        });
    }

    render() {
        return ( <div>
        <div id='main'>
        <hr/>
        <h1 id="headline">FEELS</h1>
        <h2>Hear Yourself Think</h2>
{/*<!--        <div id="volume">
            <h4>Volume</h4>
            <input class= "form-control" type="range" min="0.0" max="1.0" step="0.01"
                value="0.5" list="volumes" name="volume">
            <datalist id="volumes">
              <option value="0.2" label="Mute">
              <option value="0.6" label="100%">
            </datalist>
            </div>
            <hr/> -->*/}
        <div className='row'>
            <div className='col-sm-2'>
                <div className='box' id='thirty-one'><p></p>
                </div>
            </div>
            <div className='col-sm-2'>
                <h1 id="face">:)</h1>
            </div>
            <div className='col-sm-4'>
            <form method="POST" action={"/api/howamifeeling"} onSubmit={this.handleSubmit}>
            <textarea 
            onChange={(evt) => this.handleChange(evt.target.value)}
            name="feels" 
            id="text-area" 
            autoFocus 
            placeholder="How goes it?"
            value={this.state.text} 
            rows="5" 
            cols="20" 
            maxLength="120"></textarea>
            <hr/>
            <button>PRINT</button>
            </form>
            <button onClick={this.handleClickListen}>LISTEN</button>
            <button onClick={this.handleClickStop}>STOP</button>
            </div>
            <div className='col-sm-2'>
                <h1 id="face">:(</h1>
            </div>
            <div className='col-sm-2'>
                <div className='box' id='thirty-four'><p></p>
                </div>
            </div>
        </div>
            <br />
            <div className='row'>
                <div className='col-sm-2'>
                    <div className='box' id='one'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='two'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='three'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='four'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='five'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='six'><p></p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'>
                    <div className='box' id='seven'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='eight'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='nine'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='ten'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='eleven'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twelve'><p></p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'>
                    <div className='box' id='thirteen'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='fourteen'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='fifteen'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='sixteen'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='seventeen'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='eighteen'><p></p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'>
                    <div className='box' id='nineteen'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-one'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-two'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-three'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-four'><p></p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-five'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-six'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-seven'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-eight'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='twenty-nine'><p></p>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div className='box' id='thirty'><p></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )}
}