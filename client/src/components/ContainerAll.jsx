import React from "react";
import Container from "react-bootstrap/Container";

const ContainerAll = (props) => {
    return(
        <Container className="container-all">
            <div className="card" >
                    <div className="card-img">
                        <img src={props.imagen} alt=""/>
                    </div>
                    <div className="card-description">
                        <h3 className="title">{props.nombre}</h3>
                        <p><strong>Condicion :</strong> {props.condicion}</p>
                        <p><strong>Lugar Operacion :</strong> {props.lugar_operacion}</p>
                        <p><strong>Grupo :</strong> {props.grupos}</p>
                    </div>
                </div>
        </Container>
    )
}

export default ContainerAll;