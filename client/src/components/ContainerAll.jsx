import React from "react";
import Container from "react-bootstrap/Container";
import { UseFetchAllCharacters } from "./hooks/UseFetchAllCharacters";

const ContainerAll = () => {

    const { seleccion } = UseFetchAllCharacters();
    
    UseFetchAllCharacters();

    return(
        <>
            { 
                seleccion && seleccion.map((element, i)=>{
                    return (
                    <Container className="container-all" key={i}>
                        <div className="card"  >
                            <div className="card-img">
                            <img src={element.imagen} alt=""/>
                            </div>
                            <div className="card-description">
                                <h3 className="title">{element.nombre}</h3>
                                <p><strong>Condicion :</strong> {element.condicion}</p>
                                <p><strong>Lugar Operacion :</strong> {element.lugar_operacion}</p>
                                <p><strong>Grupo :</strong> {element.grupos}</p>
                            </div>
                        </div>
                    </Container>
                    )
                })
            }
        </>          
    )
}

export default ContainerAll;