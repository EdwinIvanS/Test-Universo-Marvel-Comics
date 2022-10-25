export const ServiceFetchNameId = (id) => {
    return fetch(`http://localhost:3001/api/Character/${id}`)
    .then(consulta =>  consulta.json())
}