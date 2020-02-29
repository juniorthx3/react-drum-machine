import React, { useState } from 'react'
import Drumpad from './Drumpad'
import {pads} from './pads'
import Header from './Header'
import ControlDrum from './ControlDrum'
import Footer from './Footer'

const Container = ()=> {
    
    const [display] = useState('DEVICE ON')
    const [power, setPower]=useState(true)
    
        return (
            <div id="drum-machine">
                <Header />
                <div className="keyboard">
                <ControlDrum display={power ? display : 'DEVICE OFF'} power={power} setPower={setPower} />
                <div className="all-buttons">
                {pads.map(sound=>(<Drumpad key={sound.id} 
                                           id={sound.id} 
                                           keyTrigger={sound.keyTrigger} 
                                           src={sound.src} 
                                           display={sound.id}
                                           handleDisplay={sound.id} 
                                           power={power}
                                  />
                ))}
                </div>
                </div>
                <Footer />
            </div>
        )
}


export default Container
