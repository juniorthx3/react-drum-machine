import React, { Component } from 'react'
import Drumpad from './Drumpad'
import {pads} from './pads'

export class Container extends Component {
    render() {
        return (
            <div id="drum-machine">
                <div id="display"></div>
                <Drumpad />
            </div>
        )
    }
}

export default Container
