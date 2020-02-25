import React, { Component } from 'react'
import Drumpad from './Drumpad'
import {pads} from './pads'
import Header from './Header'
import ControlDrum from './ControlDrum'

export class Container extends Component {
    render() {
        return (
            <div id="drum-machine">
                <Header />
                <ControlDrum />
                <Drumpad />
            </div>
        )
    }
}

export default Container
