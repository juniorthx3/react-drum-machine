import React, { useState } from 'react'
import Drumpad from './Drumpad'
import {pads} from './pads'
import Header from './Header'
import ControlDrum from './ControlDrum'
import Footer from './Footer'

const Container = ()=> {
    
    const [display, handleDisplay] = useState('')
    
    //handleDisplay=display=>this.setState({ display })


        return (
            <div id="drum-machine">
                <Header />
                <div className="keyboard">
                <ControlDrum display={display} />
                <div className="all-buttons">
                {pads.map(sound=>(<Drumpad id={sound.id} 
                                           keyTrigger={sound.keyTrigger} 
                                           src={sound.src} 
                                           handleDisplay={()=>handleDisplay({display: sound.id})} />
                ))}
                </div>
                </div>
                <Footer />
            </div>
        )
}


export default Container
