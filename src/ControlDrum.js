import React from 'react'

const ControlDrum=props=>{
    const style={backgroundColor:'yellowgreen'}
    const style2={backgroundColor:'red'}

    return (
        <div className="controlDrum">
            <div id="display">{props.display}</div>
            <div>
            <button className="button" 
                    title="POWER ON or OFF the DEVICE"
                    style={props.power ? style : style2} 
                    onClick={()=>props.setPower(!props.power)}
                    vol={props.vol}
            >
                <i className="fa fa-power-off"></i>
            </button>
            <button className="button" 
                    title="Increase VOLUME"
                    onClick={props.volumeUp} 
                    disabled={props.power === false ? "disabled" : ''}
            >
                <i className="fa fa-volume-up"></i>
            </button>
            <button className="button"
                    title="Decrease the VOLUME"  
                    onClick={props.volumeDown} 
                    disabled={props.power === false ? "disabled" : ''}
            >
                <i className="fa fa-volume-down"></i></button>
            </div>
        </div>
    )
}

export default ControlDrum