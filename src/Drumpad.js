import React, {useEffect} from 'react'

const Drumpad = props=> {
        let audio=document.querySelector('#clip')
        const handleClick = ()=>{
            audio.play(); 
            audio.currentTime=0;
            document.getElementById("display").innerText=props.handleDisplay;
          
        }
        const handleKeydown=event=>{
          if(event.keyCode === props.keyTrigger.charCodeAt()){
            audio.play();
            audio.currentTime=0;
            document.getElementById("display").innerText=props.handleDisplay;
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
        <button className="drum-pad" id={props.id} onClick={handleClick}>{props.keyTrigger}
        <audio className="clip" ref={ref => audio=ref} id={props.keyTrigger} src={props.src}
               onClick={handleClick}>
        </audio>
        </button>
        </div>
        )
    
}

export default Drumpad