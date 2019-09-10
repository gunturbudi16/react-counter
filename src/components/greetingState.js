import React from 'react';

//statefull component
class GreetingState extends React.Component{
constructor(props){
    super(props);
    this.state={
        nama:"guntur",
        umur:24,
        province:"Jakarta",
        pets:["kucing","anjing","ular"],
        toggle:false
    };
}
changeName=()=>{
    this.setState(prevState=>({
        nama:"statefull component",
        toggle: !prevState.toggle
    }));
}
render(){
    return(
        <div style={{cursor:"pointer",textAlign:"center"}} onClick={this.changeName}>hallo dari {this.state.toggle ?`Hallo Guntur ${this.state.pets[2]}`:`Hallo Budi ${this.state.pets[0]}`} {this.state.umur} {this.state.province} </div>
    )
}
}
export default GreetingState;