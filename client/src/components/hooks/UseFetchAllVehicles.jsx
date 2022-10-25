import {useEffect, useState} from "react";
import { ServiceFetchAllVehicle } from '../services/ServiceFetchAllVehicle'

export const UseFetchAllVehicles = () =>{

    const[seleccion, setSeleccion] = useState([]);

    useEffect(()=>{
        const fetchVehicleAll = async () => {
            ServiceFetchAllVehicle()
            .then( resultado => {
                let array =[];
                resultado.allvehiculos?.forEach(e => { array.push(e)}); 
                setSeleccion(array);
            })
        }
        try { fetchVehicleAll()} 
        catch (error) { console.log(error)}
    },[])

    return { seleccion, setSeleccion} 
}