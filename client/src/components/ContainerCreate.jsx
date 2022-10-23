import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from 'react-select'
import {optionsConditions} from './list/listCondicion';
import {optionsGrups} from './list/listGrup';
import {optionsTipoPower} from './list/listTipoPower';


const ContainerCreate = () =>{
    return(
        <Container className="container-create-register">
            <div>
                <span className="registister-title">Registro de Mutantes</span>
                <Form action="" method="post">
                    <Form.Group className="mb-3">
                        <Form.Label> Nombre del Mutante : </Form.Label>
                        <Form.Control id="nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Condicion : </Form.Label>
                        <Select options={optionsConditions} 
                                id="condicion" 
                                defaultValue={{ label : "  Select by ", value:''}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Ciudad de operacion : </Form.Label>
                        <Form.Control id="lugar_operacion" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Grupo : </Form.Label>
                        <Select options={optionsGrups} 
                                id="grupos" 
                                defaultValue={{ label : "  Select by ", value:''}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Tipo de poder : </Form.Label>
                        <Select options={optionsTipoPower} 
                                id="grupos" 
                                defaultValue={{ label : "  Select by ", value:''}}
                        />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}
export default ContainerCreate;