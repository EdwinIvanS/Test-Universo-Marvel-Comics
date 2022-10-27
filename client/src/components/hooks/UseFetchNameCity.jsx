import {useState} from "react";
import { ServiceFetchAllCharacters } from '../components/services/ServiceFetchAllCharacters';

export const UseFetchNameCity = () =>{
    const[seleccion, setSeleccion] = useState([]);
    const fetchSelectAll = async () => {
            ServiceFetchAllCharacters()
            .then( resultado => {
                let array =[];
                resultado.descripctionAllCharacters?.forEach(e => { array.push(e)}); 
                setSeleccion(array);
            })
        }
        return {fetchSelectAll , seleccion }
}