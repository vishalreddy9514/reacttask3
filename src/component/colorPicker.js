import { Component } from "react";
import './colorPicker.css';

class ColorPicker extends Component{
   
    state = {bgcolor: "white",colorList: []}

    changeBg=(color)=>{
        this.setState({colorList: [],bgcolor:color})    
    }

    pickColor=()=>{
        this.setState({colorList:this.props.colorArray.map((color) => 
            <button key = {color} onClick = {this.changeBg.bind(this, color)} className = "colorButton" style={{backgroundColor:color, border:color}}></button>
        )});

    }

    render(){
        
        return(
            <div className = "container" style = {{backgroundColor: this.state.bgcolor}}>
                <div>{this.state.colorList}</div>
                <button className = "pickColor" onClick={this.pickColor}>Pick a color</button>
            </div>
          
            
        )
    }

    
}

export default ColorPicker;