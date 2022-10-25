import React,{  useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ServiceFetchNameId } from '../components/services/ServiceFetchNameId'

const ContainerUpdate  = () => {
    
    //const URL = 'http://localhost:3001/api/updateCharacters/:id';
    const [id, setId] = useState("");
    const [response, setResponse] = useState([]);
    const [nombre, setNombre] = useState("");
    const [id_operacion, setId_operacion] = useState("");

    const consultaId = () =>{
        try {
        ServiceFetchNameId(id)
        .then(resultado => {
            setResponse(resultado.character[0]);
        })
        } catch (error) {console.log(error)}
    }


    /*
    const storade = async(e)=>{
        try {
            await axios.post(URL,{
                method: "post",
                headers: {
                "Accept": "application/JSON",
                "Content-Type": "application/json"
                },    
                nombre: nombre, 
                id_operacion: id_operacion
            })
            Navigate('/');
        } catch (error) {console.log(error)}
    }

    */

    return (
        <Container className="container-update-register">
            <div className="container-update">
                <span className="registister-title">Actualizacion del Registro</span>
                <input type="search" className="input-searchs" placeholder="Search for Id"  onChange={(e)=> setId(e.target.value)}/>
                <button className="bto_search" onClick={consultaId}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>  
                <form >
                    <div className="mb-3">
                        <label> Nombre del Mutante : </label>
                        <Form.Control   name="nombre"
                                        type="text"
                                        value={response.nombre} 
                                        onChange={(e)=> setNombre(e.target.value)}
                        />
                        {/*state.errors.nombre && <p>{state.errors.nombre}</p>*/}
                    </div>

                    <div className="mb-3">
                        <label> Ciudad de operacion : </label>
                        <Form.Control   name="id_operacion" 
                                        type="text"
                                        value={response.Lugar_operacion} 
                                        onChange={(e)=> setId_operacion(e.target.value)}
                        />
                        {/*state.errors.id_operacion && <p>{state.errors.id_operacion}</p>*/}
                    </div>
                                        
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Container>
    )
}

export default ContainerUpdate;