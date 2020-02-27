import React, { Component } from 'react'
import Drumpad from './Drumpad'
import {pads} from './pads'
import Header from './Header'
import ControlDrum from './ControlDrum'
import Footer from './Footer'

export class Container extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display:''
        }
    }
    
    handleDisplay=display=>this.setState({ display })
    
    render() {
        return (
            <div id="drum-machine">
                <Header />
                <div className="keyboard">
                <ControlDrum display={this.state.display} />
                <div className="all-buttons">
                {pads.map(sound=>(<Drumpad id={sound.id} 
                                           keyTrigger={sound.keyTrigger} 
                                           src={sound.src} 
                                           handleDisplay={this.handleDisplay} />
                ))}
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default Container
