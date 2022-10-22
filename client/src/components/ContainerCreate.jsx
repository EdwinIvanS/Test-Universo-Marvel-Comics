import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
                        <Form.Select id="condicion" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Ciudad de operacion : </Form.Label>
                        <Form.Control id="lugar_operacion" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Grupo : </Form.Label>
                        <Form.Select id="grupos" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Tipo de poder : </Form.Label>
                        <Form.Select id="grupos" />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}
export default ContainerCreate;