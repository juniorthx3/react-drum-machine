import React, { useState } from 'react'
import Drumpad from './Drumpad'
import {pads} from './pads'
import Header from './Header'
import ControlDrum from './ControlDrum'
import Footer from './Footer'

const Container = ()=> {
    
    const [display] = useState('')
    
        return (
            <div id="drum-machine">
                <Header />
                <div className="keyboard">
                <ControlDrum display={display} />
                <div className="all-buttons">
                {pads.map(sound=>(<Drumpad key={sound.id} 
                                           id={sound.id} 
                                           keyTrigger={sound.keyTrigger} 
                                           src={sound.src} 
                                           display={sound.id}
                                           handleDisplay={sound.id} />
                ))}
                </div>
                </div>
                <Footer />
            </div>
        )
}


export default Container
