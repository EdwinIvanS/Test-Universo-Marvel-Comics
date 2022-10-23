import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Table  from "react-bootstrap/Table";

const VehicleAll = () => {

    const[seleccion, setSeleccion] = useState([]);

    
    
    useEffect(()=>{
        const fetchVehicleAll = async () => {
        await fetch(`http://localhost:3001/api/allVehicle`)
        .then(consulta =>  consulta.json())
        .then( resultado => {
            console.log(resultado)
            let array =[];
            console.log(resultado);
                resultado.allvehiculos?.forEach(e => { array.push(e)}); 
                console.log(array)
                setSeleccion(array);
            })
        }
        try { fetchVehicleAll()} 
        catch (error) { console.log(error)}
    },[])

    

    return(
        <Container className="container-Vehicle">
            <Table className="table-searchs">
                <thead>
                    <tr className="bg-encabezado text-white">
                        <th>Id</th>
                        <th>Tipo de Vehiculo</th>
                    </tr>                    
                </thead>
                <tbody >
                {   
                    seleccion.map( (element,i) => (
                        <tr key={i} className="tr-encabezado">
                            <td>{element.id}</td>
                            <td>{element.tipo}</td>
                        </tr>
                        )
                    ) 
                }

                </tbody>
            </Table>
        </Container>
    )
}

export default VehicleAll;