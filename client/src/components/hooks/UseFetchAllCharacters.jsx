import  { useEffect, useState } from "react";
import { ServiceFetchAllCharacters } from "../services/task.api"

export const UseFetchAllCharacters = () =>{

    const[seleccion, setSeleccion] = useState([]);

    useEffect(()=>{
        ServiceFetchAllCharacters()
        .then( resultado => {
            let array =[];              
            resultado.descripctionAllCharacters?.forEach(e => { array.push(e)}); 
            setSeleccion(array);
        })
        .catch(error => console.log(error))
    },[])

    return { seleccion } 
}