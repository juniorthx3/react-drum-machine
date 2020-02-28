import React from 'react'

const ControlDrum=props=>{
    return (
        <div className="controlDrum">
            <div id="display">{props.display}</div>
            <div>
            <button className="button"><i className="fa fa-power-off"></i></button>
            <button className="button"><i className="fa fa-volume-up"></i></button>
            <button className="button"><i className="fa fa-volume-down"></i></button>
            </div>
        </div>
    )
}

export default ControlDrum