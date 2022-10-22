import React,{ useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Table  from "react-bootstrap/Table";

const ContainerNameCity = () =>{

    const[seleccion, setSeleccion] = useState([]);

    const captureValue = (e) =>{
        const value = e.target.value;
        console.log(value);
     }

    useEffect (() =>{ 
        const fetchSelectAll = async () => {
            await fetch(`http://localhost:3001/api/allCharacters`)
            .then(consulta =>  consulta.json())
            .then( resultado => {
                let array =[];
                resultado.descripctionAllCharacters?.forEach(e => { array.push(e)}); 
                setSeleccion(array);
            })
        }
        try { fetchSelectAll()} 
        catch (error) { console.log(error)}        
    },[])

    return(
        <Container className="container-NameCity">
            <input className="input-searchs" placeholder="Filter By" onChange={captureValue}/>
            <Table  className="table-searchs">
                <thead>
                    <tr className="bg-encabezado">
                        <th>NAME</th>
                        <th>CONDITION</th>
                        <th>COUNTRY</th>
                        <th>COUNTRY</th>
                    </tr>
                </thead>
                <tbody>
                {   seleccion.map( (element,i) => (
                        <tr key={i} className="tr-encabezado">
                            <td>{element.nombre}</td>
                            <td>{element.condicion}</td>
                            <td>{element.lugar_operacion}</td>
                            <td>{element.grupos}</td>
                        </tr>
                        )
                    ) 
                }
                </tbody>
            </Table>
        </Container>
    )
}
export default ContainerNameCity;