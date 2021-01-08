import React, {useEffect, useState} from 'react';
import "./main.css"
import Delete from "./loeschen.png"
import Check from "./pruefen.png"

function Todo(props){

    var klasse = "done";

    const check = () => {
        const arr1 = props.all
        const id = props.id
        var test = arr1.filter((el) => el.id !== id)
        props.remove(test)  
    }
    const line = () => {
       props.remove(props.all.map(item => {
           if(item.id === props.id){    
               return {
                ...item, completed: !item.completed
               }
           }
           return item;
       }))
    }

    return(
        <div className="row todo-main border todo my-3 shadow-sm bg-white">
            <div className="col-md-10 pl-4 py-3">
                <h4 className={`${props.complete ? 'done' : ''}`}>{props.titel}</h4>
                        <p className={`mb-0 ${props.complete ? 'done' : ''}`}>{props.inhalt}</p>
            </div>
            <div className="col-md-2 todo-buttons todo d-flex bg-light border-left  justify-content-around align-items-center">
                <div className="" onClick={line}><img className="icons" src={Check}/></div>
                <div className="" onClick={() => check()}><img className="icons"  src={Delete}/></div>
            </div>
        </div>
    )
}

export default Todo;