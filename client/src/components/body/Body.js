import React from "react";
import ItemsContainer from "./ItemsContainer";


function Body(props) {

    return (
        
        <div className="Body" onClick={props.onBodyClick} onContextMenu={props.onBodyClick}>
            {
                !props.words 

                ? 
                <div style={{padding: "50px", color: "white"}}>
                    There are no groups created. Click  
                    <span style={{color: "gold", fontSize: "20px"}}> "create group" </span>
                    to create a group.
                </div>


                : 
                <React.Fragment>
                    <div style={{margin: "0 10px", textAlign: "end", color: "rgb(248, 252, 3)"}}>{props.group}</div>
                   {props.words.length 
                        ?
                        <ItemsContainer {...props.propsToBody} />

                        : <div style={{ margin: "50px", color: "white" }}>
                            There are no words in this group yet. Click 
                            <span style={{color: "gold", fontSize: "18px"}}> "Add word" </span> 
                            to add a word
                        </div>
                    } 
                </React.Fragment>
                
            }
        </div>
    )
}


export default Body;