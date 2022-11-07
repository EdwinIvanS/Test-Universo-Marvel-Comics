import {useEffect, useState} from "react";
import { ServiceFetchAllVehicle } from '../services/task.api'

export const UseFetchAllVehicles = () =>{

    const[seleccion, setSeleccion] = useState([]);

    useEffect(()=>{
        ServiceFetchAllVehicle()
        .then( resultado => {
            let array =[];
            resultado.allvehiculos?.forEach(e => { array.push(e)}); 
            setSeleccion(array);
        })      
        .catch(error => console.log(error))
    },[])

    return { seleccion } 
}