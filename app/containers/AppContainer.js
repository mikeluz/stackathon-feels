import React, { Component } from 'react';
import { Link } from 'react-router';

export default function App({children}) {
    return (
        <div>
        <div id='main'>
        <hr/>
        <h1 id="headline">FEELS</h1>
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
            <form method="POST" action={"/api/howamifeeling"}>
            <textarea name="feels" id="text-area" autoFocus placeholder="How goes it?" rows="20" cols="20"></textarea>
            <hr/>
            <button>PRINT</button>
            </form>
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
    )
}