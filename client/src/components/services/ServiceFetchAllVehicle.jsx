export const ServiceFetchAllVehicle = () => {
    return fetch(`http://localhost:3001/api/allVehicle`)
    .then(consulta =>  consulta.json())
}