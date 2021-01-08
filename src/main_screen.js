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

    
    const addTodo = (title,content) => {
       
       if(content !== "" || title !== ""){
            setTodos([...todos, {
            id: todos.length,
             title: title,
             content: content,
             completed:false,
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
         var begruessung = ["Guten Morgen","Hey","Guten Abend","Ab ins Bett"];
         var time = new Date();
        var hours = time.getHours();
        

         var textBegr = () => {
             if (hours > 5 && hours < 12){
                 return 0;
             }
             if (hours > 11 && hours <= 17){
                return 1;
            }
            if (hours > 17 && hours <= 23){
                return 2;
            }
            if (hours >= 0 && hours <= 5){
                return 3;
            }
         }
         
         
         var texte = ["Was steht heute an?","Hoffe du hattest bisher einen schönen Tag :)","Struktur ist das A und O!","Traue eher deiner Todo Liste als deinem Glück.","Lieber Arm ab als arm dran... oder?"]
         


    return(
        <div className="main container py-5">
            <h1>{begruessung[textBegr()]}, {localStorage.getItem("name")}</h1>
            <h2 className="text-dark">{texte[props.zahl]}</h2>
            <div className="row">
            
            
            </div>
            <div className="row my-4">
                <form className="formular" onSubmit={(event) => event.preventDefault()} >
                    <input className="input p-2  text-center" type="text" onChange={onChangeHeading} placeholder="Überschrift" value={heading} name="Überschrift" />
                    <input className="input p-2  text-center" type="text" onChange={onChangeBody} placeholder="Inhalt" value={body} name="Inhalt" />
                    <button className="btn btn-warning  addBtn" onClick={() => addTodo(heading,body)}>Notiz hinzufügen</button>
                </form>
            
            </div>
            
            
             <div className="my-4">{todos.map(todo => (
                 
             <Todo remove={setTodos} id={todo.id} complete={todo.completed}  key={todo.id} all={todos} titel={todo.title}  inhalt={todo.content}/>
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