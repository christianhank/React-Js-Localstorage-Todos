import React, {useEffect, useState} from 'react';
import "./main.css"

function Todo(props){

    const check = () => {
        const arr1 = props.all
        const id = props.id
        var test = arr1.filter((el) => el.id !== id)
        props.remove(test)  
    }

    return(
        <div className="row border my-3 shadow-sm rounded bg-white">
            <div className="col-md-10 p-3">
                <h2>{props.titel}</h2>
                        <p>{props.inhalt}</p>
            </div>
            <div className="col-md-2 d-flex  justify-content-center align-items-center">
                <button className="btn btn-danger deleteBtn" onClick={() => check()}>X</button>
            </div>
       
         
        </div>
    )
}

export default Todo;