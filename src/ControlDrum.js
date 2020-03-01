import React from 'react'

const ControlDrum=props=>{
    const style={backgroundColor:'yellowgreen'}
    const style2={backgroundColor:'red'}
    const volumeUp=()=>{
        if(props.vol < 101)
        {
            props.setVol(props.vol + 1)
            document.getElementById("display").innerText=props.handleDisplay;
        }
        else{
            return;
        }
    }
    const volumeDown=()=>{
        if(props.vol > 0)
        {
            props.setVol(props.vol - 1)
            document.getElementById("display").innerText=props.handleDisplay;
        }
        else{
            return;
        }
    }
    return (
        <div className="controlDrum">
            <div id="display">{props.display}</div>
            <div>
            <button className="button" 
                    title="POWER ON or OFF the DEVICE"
                    style={props.power ? style : style2} 
                    onClick={()=>props.setPower(!props.power)}
            >
                <i className="fa fa-power-off"></i>
            </button>
            <button className="button" 
                    title="Increase VOLUME"
                    onClick={volumeUp} 
                    disabled={props.power === false ? "disabled" : ''}
            >
                <i className="fa fa-volume-up"></i>
            </button>
            <button className="button"
                    title="Decrease the VOLUME"  
                    onClick={volumeDown} 
                    disabled={props.power === false ? "disabled" : ''}
            >
                <i className="fa fa-volume-down"></i></button>
            </div>
        </div>
    )
}

export default ControlDrum