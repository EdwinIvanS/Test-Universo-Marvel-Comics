import React,{ useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Table  from "react-bootstrap/Table";

const ContainerNameCity = (props) =>{

    const[seleccion, setSeleccion] = useState([]);
    const[search, setSearch] = useState("");
    const[modal , setModal] = useState("");

    const showData = () =>{ 
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
    }
    
    const searcher = (e) =>{    
        setModal(props.consulta)    
        setSearch(e.target.value)
    }

    let resultado="";    
    if(modal==="All_Name"){       
        if(!search) resultado = seleccion;
        else resultado = seleccion.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLowerCase()))        
    } else{
        if(!search) resultado = seleccion;
        else resultado = seleccion.filter((dato)=> dato.lugar_operacion.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(()=>{
        showData()
    },[])

    return(
        <Container className="container-NameCity">
            <input value={search} onChange={searcher} type="text" className="input-searchs" placeholder="Filter By" />
            <Table  className="table-searchs">
                <thead>
                    <tr className="bg-encabezado text-white">
                        <th>NAME</th>
                        <th>CONDITION</th>
                        <th>COUNTRY</th>
                        <th>COUNTRY</th>
                    </tr>
                </thead>
                <tbody>
                {   resultado.map( (element,i) => (
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