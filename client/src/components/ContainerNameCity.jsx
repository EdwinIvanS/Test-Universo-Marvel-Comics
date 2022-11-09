import React,{ useState } from "react";
import Container from "react-bootstrap/Container";
import Table  from "react-bootstrap/Table";
import { UseFetchNameCity } from "./hooks/UseFetchNameCity";

const ContainerNameCity = (props) =>{

    const { seleccion } = UseFetchNameCity();
    const[search, setSearch] = useState("");
    const[modal , setModal] = useState("");
    let resultado=""; 

    UseFetchNameCity();
    
    const searcher = (e) =>{    
        setModal(props.consulta)    
        setSearch(e.target.value)
    }    

    if(modal==="All_Name"){       
        if(!search) resultado = seleccion;
        else resultado = seleccion.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLowerCase()))        
    } else{
        if(!search) resultado = seleccion;
        else resultado = seleccion.filter((dato)=> dato.lugar_operacion.toLowerCase().includes(search.toLowerCase()))
    }
    
    return(
        <Container className="container-NameCity">
            <input value={search} onChange={searcher} type="text" className="input-searchs" placeholder="Filter By" />
            <Table  className="table-searchs">
                <thead>
                    <tr className="bg-encabezado text-white">
                        <th>Nombre</th>
                        <th>Condicion</th>
                        <th>Pais</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                {   
                    resultado.map( (element,i) => (
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