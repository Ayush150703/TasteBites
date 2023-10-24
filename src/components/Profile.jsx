import { useState } from "react";

const Profile=(props)=>{
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(0);
return (  
    <div>
        <h2>this is profile tag</h2>
        <h3>Name:{props.name}</h3>
        <h4>Count:{count}</h4>
        <h5>Count:{count2}</h5>
        <button onClick={()=>{setCount(1);setCount2(2)}}>Count</button>
    </div>
);
};
export default Profile;