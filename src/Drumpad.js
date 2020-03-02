import React, {useEffect} from 'react'

const Drumpad = props=> {
  let audio=document.getElementsByClassName("clip");
        const handleClick = ()=>{
            if(props.power){
              audio.currentTime=0;
              audio.play(); 
              document.getElementById("display").innerText=props.handleDisplay;
            }
            else{
              return;
            }
        }
        const handleKeydown=event=>{
          if(event.keyCode === props.keyTrigger.charCodeAt()){
            if(props.power){
              audio.currentTime=0;
              audio.play();
              document.getElementById("display").innerText=props.handleDisplay;
            }
            else{
              return;
            }
          }
        }
 
        useEffect(()=>{
            document.addEventListener("keydown", handleKeydown);
          return ()=>{
            document.removeEventListener("keydown", handleKeydown)
          }
        })

        return (
        <div>
        <button className="drum-pad" id={props.id} 
                title={props.id}
                onClick={handleClick} 
                disabled={props.power === false ? "disabled" : ''}
        >
        {props.keyTrigger}
        <audio className="clip" ref={ref => audio=ref} id={props.keyTrigger} src={props.src}>
        </audio>
        </button>
        </div>
        )
    
}

export default Drumpad