import axios from 'axios';

export const ServiceFetchAllCharacters = async () => {
    return await fetch(`http://localhost:3001/api/allCharacters`)       
	.then(consulta => consulta.json())
}

export const ServiceFetchAllNameCity = async () => {
    return await fetch(`http://localhost:3001/api/allCharacters`)
    .then(consulta =>  consulta.json())
}

export const ServiceFetchAllVehicle = async () => {
    return await fetch(`http://localhost:3001/api/allVehicle`)
    .then(consulta =>  consulta.json())

}

export const ServiceFetchId = async (id) => {
    return await fetch(`http://localhost:3001/api/Character/${id}`)
    .then(consulta =>  consulta.json())
}

export const ServiceUpdate = async (id, nombre, idOperacion) => {
    return await axios.put(`http://localhost:3001/api/updateCharacters/${id}`,{
        method: "put",
        headers: {
            "Accept": "application/JSON",
            "Content-Type": "application/json"
        },
        id : id,    
        nombre: nombre,
        id_Ope : idOperacion
    })
}

export const ServiceCreate = async (nombre, id_grupo, id_operacion, id_condicion, imagen) => {
    return await axios.post('http://localhost:3001/api/createCharacters',{
        method: "post",
        headers: {
            "Accept": "application/JSON",
            "Content-Type": "application/json"
        },    
        nombre:nombre, 
        id_grupo: id_grupo, 
        id_operacion: id_operacion, 
        id_condicion: id_condicion, 
        imagen:imagen 
    })
}