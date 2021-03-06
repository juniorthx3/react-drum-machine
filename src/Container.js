import React, { useState } from 'react'
import Drumpad from './Drumpad'
import {pads} from './pads'
import Header from './Header'
import ControlDrum from './ControlDrum'
import Footer from './Footer'

const Container = props=> {
    
    const [display] = useState('DEVICE ON');
    const [power, setPower]=useState(true);
    const [vol, setVol]=useState(40);
    const audio=document.getElementsByClassName('clip')

     //VOLUME
     const volumeUp=()=>{
        if(vol < 100)
        {
            setVol(vol + 1)
            audio.volume=vol / 100;
            document.getElementById("display").innerText="VOLUME: "+vol;
            
        }
        else{
           return;
        }
    }
    const volumeDown=()=>{
        if(vol > 0 )
        {
            setVol(vol - 1)
            document.getElementById("display").innerText="VOLUME: "+vol;
            audio.volume=vol / 100;
        }
        else{
            return;
        }
    }
     //END VOLUME
        return (
            <div id="drum-machine">
                <Header />
                <div className="keyboard">
                <ControlDrum display={power ? display : 'DEVICE OFF'} 
                             power={power} 
                             setPower={setPower}
                             vol={vol}
                             setVol={setVol}
                             handleDisplay={power ? "VOLUME: "+ vol : 'DEVICE OFF'}
                             volumeUp={volumeUp}
                             volumeDown={volumeDown}
                />
                <div className="all-buttons">
                {pads.map(sound=>(<Drumpad key={sound.id} 
                                           id={sound.id} 
                                           keyTrigger={sound.keyTrigger} 
                                           src={sound.src} 
                                           display={sound.id}
                                           handleDisplay={sound.id} 
                                           power={power}
                                           vol={vol / 100}
                                  />
                ))}
                </div>
                </div>
                <Footer />
            </div>
        )
}


export default Container
