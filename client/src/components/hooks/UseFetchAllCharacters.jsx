import { useState } from "react";

export const UseFetchAllCharacters = () =>{ 

    const[seleccion, setSeleccion] = useState([]);    
        const fetchSelectAll = async () => {
            fetch(`http://localhost:3001/api/allCharacters`)       
	        .then(response => response.json())
                .then( resultado => {
                    let array =[];
                    resultado.descripctionAllCharacters?.forEach(e => { array.push(e)}); 
                    setSeleccion(array);
                })
        }
        try { fetchSelectAll()} 
        catch (error) { console.log(error)}   

    return { seleccion, setSeleccion}
}