import React, { Component } from 'react'

class Drumpad extends Component {

    handleClick=()=>{
       this.audio.play(); 
       this.audio.currentTime=0;
       this.props.handleDisplay(this.props.id)
    }
    handleKeydown=event=>{
        if(event.keyCode === this.props.keyTrigger.charCodeAt()){
          this.audio.play();
          this.audio.currentTime=0;
          this.props.handleDisplay(this.props.id);

        }
    }
    componentDidMount(){
      document.addEventListener('keydown', this.handleKeydown)
    }
    componentWillMount(){
      document.removeEventListener('keydown', this.handleKeydown)
    }

    render() {
        return (
        <div>
        <button className="drum-pad" id={this.props.id} onClick={this.handleClick}>{this.props.keyTrigger}
        <audio className="clip" ref={ref => this.audio=ref} id={this.props.keyTrigger} src={this.props.src}
               onClick={this.handleClick}>
        </audio>
        </button>
        </div>
        )
    }
}

export default Drumpad