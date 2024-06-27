//Local-State variable here defined is title and description
import { useState } from "react";

export function CreateTodo() {
    const [title , setTitle] = useState("");
const [description , setdescription] = useState("");

    return <div>
        <input style={{
         margin:10,
         padding:10
        }} type="text" placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} /><br/>
        <input style={{
         margin:10,
         padding:10
        }} type="text" placeholder="Description" onChange={function(e){
            const value = e.target.value;
            setdescription(e.target.value);
        }}/><br/> 
        <button style={{
         margin:10,
         padding:10,
         marginLeft:50
        }} onClick={() => {
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers: {
                    "Content-Type":"application/json"
                }
            })

            .then(async function(res){
                const json = await res.json();
                alert("Todo Added");
            })
        }}>Add a Todo</button>

    </div>
}