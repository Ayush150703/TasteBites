import React from "react";



class Profile extends React.Component{
    constructor(props){
        super(props);


     this.state={
      userInfo:{
        name:"Dummy Name",
        location:"Dummy Location",
      },
    }
        console.log("child-Constructor")
    }
    async componentDidMount(){
        
    const data=await fetch("https://api.github.com/Ayush150703r");
    const json=await data.json();
    this.setState({
        userInfo:json,
    });
        console.log("child-componentDidMount");
    }
    render()
    {
        console.log("child-render");
        const {count}=this.state;
        return (<div>
        <h1>Profile class component</h1>
               <h2>Name:{this.state.name}</h2>
               <h3>Count:{count}</h3>
              
               </div>)
    }

}

export default Profile;