import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from 'react-select'
import {optionsConditions} from './list/listCondicion';
import {optionsGrups} from './list/listGrup';
import {optionsTipoPower} from './list/listTipoPower';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const ContainerCreate = () =>{

    const [nombre, setNombre] = useState({});
    const [id_grupo, setId_grupo] = useState({});
    const [id_operacion, setId_operacion] = useState({});
    const [id_condicion, setId_condicion] = useState({});
    const [imagen, setImagen] = useState({});
        
    const navigate = useNavigate();

    const storade = async e =>{ 
        console.log(nombre + id_grupo + id_operacion+ id_condicion + imagen);        
        e.prevent.dafault();
        await axios.post('http://localhost:3001/api/createCharacters',{nombre:nombre, id_grupo:id_grupo, id_operacion:id_operacion, id_condicion:id_condicion, imagen:imagen})
        navigate('/');
    }


    return(
        <Container className="container-create-register">
            <div>
                <span className="registister-title">Registro de Mutantes</span>
                
                <form onSubmit={storade}>
                    <div className="mb-3">
                        <label> Nombre del Mutante : </label>
                        <Form.Control name="nombre" onChange={e => setNombre(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label> Grupo : </label>
                        <Select options={optionsGrups} 
                                name="id_grupo"
                                onChange={e => setId_grupo(e)}
                                defaultValue={{ label : "  Select by ", value:''}}
                        />
                    </div>              
                    <div className="mb-3">
                        <label> Ciudad de operacion : </label>
                        <Form.Control name="id_operacion" onChange={e => setId_operacion(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label> Condicion : </label>
                        <Select options={optionsConditions} 
                                name="id_condicion"
                                onChange={e => setId_condicion(e)}
                                defaultValue={{ label : "  Select by ", value:''}}
                        />
                    </div>
                    <div className="mb-3">
                        <label> URL de la Imagen : </label>
                        <Form.Control name="imagen" onChange={e => setImagen(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label> Tipo de poder : </label>
                        <Select options={optionsTipoPower} 
                                name="tipoPower"
                                defaultValue={{ label : "  Select by ", value:''}}
                        />
                    </div>                    
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Container>
    )
}
export default ContainerCreate;