import React,{ useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ServiceFetchNameId } from '../components/services/ServiceFetchNameId';
import Select from 'react-select';
import { optionsCiudad } from "./list/listCiudad";


const ContainerUpdate  = () => {

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");  
    const [idOperacion, setIdOperacion] = useState("");

    const update = async(e)=>{
        try {
            await axios.put(`http://localhost:3001/api/updateCharacters/${id}`,{
                method: "put",
                headers: {
                "Accept": "application/JSON",
                "Content-Type": "application/json"
                },
                id : id,    
                nombre: nombre,
                id_Ope : idOperacion
            })
            Navigate('/');
        } catch (error) {console.log(error)}
    }

    const consultaId = () =>{
        try {
        ServiceFetchNameId(id)
        .then(resultado => {
            if(resultado.code==='200'){ 
                setNombre(resultado.character[0].nombre);  
                setIdOperacion(resultado.character[0].id_operacion);
            }
            else{
                return alert("No existe informacion para el registro consultado");                
            }
        })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="container-update-register">
            <div className="container-update">
                <span className="registister-title">Actualizacion del Registro</span>
                <input type="search" className="input-searchs" placeholder="Search for Id"  onChange={(e)=> setId(e.target.value)}/>
                <button className="bto_search" onClick={consultaId}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>  
                <form onSubmit={update}>
                    <div className="mb-3">
                        <label> Nombre del Mutante : </label>
                        <Form.Control   name="nombre"
                                        type="text"
                                        value={nombre} 
                                        onChange={(e)=> setNombre(e.target.value)
                                        }
                        />
                        {/*state.errors.nombre && <p>{state.errors.nombre}</p>*/}
                    </div>

                    <div className="mb-3">
                        <label> Ciudad de operacion : </label>
                        <Select options={optionsCiudad} 
                                name="id_operacion"                           
                                value={ optionsCiudad[idOperacion-1] }
                                onChange={(e)=> setIdOperacion(e.value)}                                
                        />
                        {/*
                        <Form.Control   name="id_operacion" 
                                        type="text"
                                        value={Lugar_operacion} 
                                        onChange={(e)=> setLugar_operacion(e.target.value)}
                        />
                        */}
                        {/*state.errors.id_operacion && <p>{state.errors.id_operacion}</p>*/}
                    </div>
                                        
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Container>
    )
}

export default ContainerUpdate;