import React from "react";
import Container from "react-bootstrap/Container";
import Table  from "react-bootstrap/Table";
import {UseFetchAllVehicles} from "./hooks/UseFetchAllVehicles"


const VehicleAll = () => {
    
    const { seleccion } = UseFetchAllVehicles();
    UseFetchAllVehicles();

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