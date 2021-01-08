import React, {useEffect, useState} from 'react';
import Todo from "./todo";
import "./main.css"

function Main(props){

    if(localStorage.getItem("todos") === ""){
        localStorage.setItem("todos","[]")
    }
    var init = JSON.parse(localStorage.getItem("todos"))
    
    const [todos,setTodos] = useState(init);
    const [heading,setHeading] = useState("")
    const [body,setBody] = useState("")
    

    const abmelden = () =>{
        localStorage.removeItem("name")
        localStorage.setItem("todos","")
        props.lift(false)
    }

    
    const addTodo = async (title,content) => {
       if(content !== ""){
            setTodos([...todos, {
            id: todos.length,
             title: title,
             content: content
         }]); 
         setHeading("")
         setBody("")  
       } else {

       }
        
    }

    const clearAll = () => {
        setTodos([])
    }

    const onChangeHeading = (e) => [
        setHeading(e.currentTarget.value)
    ]

    const onChangeBody = (e) => [
        setBody(e.currentTarget.value)
    ]
    

    useEffect(() =>{
            var newArray = todos;
            localStorage.setItem("todos",JSON.stringify(newArray)) 
         })

    var begruessung = ["Guten Morgen","Hallo","Guten Abend"];
    var texte = ["Was steht heute an?","Soll ich die Peitsche schonmal rausholen?","Deine Aufgaben für heute:","Struktur ist das A und O !","Trau lieber deiner Todo Liste als deinem Glück."];
    var randomNumber = Math.floor(Math.random() * 6);
    console.log(randomNumber);
    console.log(texte[randomNumber]);

    return(
        <div className="main container py-5">
            <h1>Hi, {localStorage.getItem("name")}</h1>
            <h2 className="text-dark">{texte[randomNumber]}</h2>
            <div className="row">
            
            </div>
            <div className="row my-4">
            <input className="input p-2 mx-2 text-center" type="text" onChange={onChangeHeading} placeholder="Überschrift" value={heading} name="Überschrift" />
            <input className="input p-2 mx-2 text-center" type="text" onChange={onChangeBody} placeholder="Inhalt" value={body} name="Inhalt" />
            <button className="btn btn-warning mx-2 addBtn" onClick={() => addTodo(heading,body)}>Notiz hinzufügen</button>
            </div>
            
            
             <div className="my-4">{todos.map(todo => (
                 
             <Todo remove={setTodos} id={todo.id}  key={todo.id} all={todos} titel={todo.title}  inhalt={todo.content}/>
             ))}
            
             </div>

             <div className="row pb-5">
                <button className="btn btn-warning mx-2" onClick={() => abmelden()}>Abmelden</button>
                <button className="btn btn-warning mx-2" onClick={() => clearAll()}>Alles löschen</button> 
             </div>
             
        </div>
    )
}

export default Main;