import React from "react";


export default function Child(props){



    return(
        <div>
            <h1>My name is:{props.name}</h1>
            <h2>My add is:{props.add}</h2>
        </div>
        
    )
}