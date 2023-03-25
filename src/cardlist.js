import React from "react";
import Card from "./card";


const cardList=({robots})=>{

    const cardComponent = robots.map((user,index)=>{
        return <Card key ={index} id ={robots[index].id} name={robots[index].name} email={robots[index].email}/>
    })
    
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default cardList;


//this below will also work

// return (
//     <div>
//         {robots.map((user,index)=>{
//     return <Card key ={index} id ={robots[index].id} name={robots[index].name} email={robots[index].email}/>
// })}
//     </div>
// )