import React, { Component } from 'react'
import Drumpad from './Drumpad'
import {pads} from './pads'
import Header from './Header'
import ControlDrum from './ControlDrum'
import Footer from './Footer'

export class Container extends Component {
    render() {
        return (
            <div id="drum-machine">
                <Header />
                <div className="keyboard">
                <ControlDrum />
                <div className="all-buttons">
                {pads.map(sound=>(<Drumpad id={sound.id} 
                                           keyTrigger={sound.keyTrigger} 
                                           src={sound.src} />
                ))}
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Container
