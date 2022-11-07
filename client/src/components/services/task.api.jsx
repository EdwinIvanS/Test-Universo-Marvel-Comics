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

export const ServiceFetchNameId = async (id) => {
    return await fetch(`http://localhost:3001/api/Character/${id}`)
    .then(consulta =>  consulta.json())
}