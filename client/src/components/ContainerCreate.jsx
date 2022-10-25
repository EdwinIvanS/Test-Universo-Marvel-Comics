import React,{ useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from 'react-select'
import {optionsConditions} from './list/listCondicion';
import {optionsGrups} from './list/listGrup';
import {optionsTipoPower} from './list/listTipoPower';
import axios from 'axios';
import { Navigate } from "react-router-dom"


const ContainerCreate = () =>{
    const URL = 'http://localhost:3001/api/createCharacters';

    const [nombre, setNombre] = useState("");
    const [id_grupo, setId_grupo] = useState("");
    const [id_operacion, setId_operacion] = useState("");
    const [id_condicion, setId_condicion] = useState("");
    const [imagen, setImagen] = useState("");

        
    const storade = async(e)=>{
        //e.preventDefault();
        try {
            await axios.post(URL,{
                method: "post",
                headers: {
                "Accept": "application/JSON",
                "Content-Type": "application/json"
                },    
                nombre:nombre, 
                id_grupo: id_grupo, 
                id_operacion: id_operacion, 
                id_condicion: id_condicion, 
                imagen:imagen 
            })
            Navigate('/');
        } catch (error) {console.log(error)}
    }

    return(
        <Container className="container-create-register">
            <div>
                <span className="registister-title">Registro de Mutantes</span>
                
                <form onSubmit={storade} >
                    <div className="mb-3">
                        <label> Nombre del Mutante : </label>
                        <Form.Control   name="nombre"
                                        type="text"
                                        value={nombre} 
                                        onChange={(e)=> setNombre(e.target.value)}
                        />
                        {/*state.errors.nombre && <p>{state.errors.nombre}</p>*/}
                    </div>

                    <div className="mb-3">
                        <label> Grupo : </label>
                        <Select options={optionsGrups} 
                                name="id_grupo"                                 
                                defaultValue={{ label : "  Select by ", value:''}}
                                onChange={(e)=> setId_grupo(e.value)}                                
                        />
                        {/*state.errors.id_grupo && <p>{state.errors.id_grupo}</p>*/}
                    </div>  

                    <div className="mb-3">
                        <label> Ciudad de operacion : </label>
                        <Form.Control   name="id_operacion" 
                                        type="text"
                                        value={id_operacion} 
                                        onChange={(e)=> setId_operacion(e.target.value)}
                        />
                        {/*state.errors.id_operacion && <p>{state.errors.id_operacion}</p>*/}
                    </div>

                    <div className="mb-3">
                        <label> Condicion : </label>
                        <Select options={optionsConditions} 
                                name="id_condicion"
                                defaultValue={{ label : "  Select by ", value:''}}
                                onChange={(e)=> setId_condicion(e.value)}                                
                        />
                        {/*state.errors.id_condicion && <p>{state.errors.id_condicion}</p>*/}
                    </div>

                    <div className="mb-3">
                        <label> URL de la Imagen : </label>
                        <Form.Control   name="imagen"
                                        type="text"
                                        value={imagen}  
                                        onChange={(e)=> setImagen(e.target.value)}
                        />
                        {/*state.errors.imagen && <p>{state.errors.imagen}</p>*/}
                    </div>

                    <div className="mb-3">
                        <label> Tipo de poder : </label>
                        <Select options={optionsTipoPower} 
                                name="tipoPower"
                                defaultValue={{ label : "  Select by ", value:''}}
                        />
                        {/*state.errors.tipoPower && <p>{state.errors.tipoPower}</p>*/}
                    </div>
                    
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Container>
    )
}
export default ContainerCreate;