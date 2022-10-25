export const ServiceFetchAllNameCity = () => {
    return fetch(`http://localhost:3001/api/allCharacters`)
    .then(consulta =>  consulta.json())
}