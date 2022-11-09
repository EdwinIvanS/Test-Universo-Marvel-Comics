import { useState, useEffect } from "react";
import { ServiceFetchAllNameCity } from '../services/task.api'

export const UseFetchNameCity = () =>{

    const[seleccion, setSeleccion] = useState([]);

    useEffect(()=>{
        ServiceFetchAllNameCity()
        .then( resultado => {
            let array =[];
            resultado.descripctionAllCharacters?.forEach(e => { array.push(e)}); 
            setSeleccion(array);
        })
    },[])

    return { seleccion }
}