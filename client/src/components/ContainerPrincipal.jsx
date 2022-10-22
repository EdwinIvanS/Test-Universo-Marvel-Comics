import React, { useState } from "react";
import Select from 'react-select'
import Container from "react-bootstrap/Container";
import {options} from './list/listSearch';
import ContenedorAll from "./ContenedorAll";


const ContainerPrincipal = () =>{

    const[seleccion, setSeleccion] = useState([]);

    const searchFor = (e) =>{
        console.log(e.value)
        let busqueda = e.value;
        if(busqueda === 'All'){
            const fetchSelectAll = async () => {
            await fetch(`http://localhost:3001/api/allCharacters`)
            .then(consulta =>  consulta.json())
            .then( resultado => {
                console.log(resultado)
                let array =[];
                    resultado.descripctionAllCharacters?.forEach(e => { array.push(e)}); 
                    console.log(array)
                    setSeleccion(array);
                })
            }
            try { 
                fetchSelectAll() 
            } 
            catch (error) { 
                console.log(error) 
            }
        }
        else if (busqueda === 'All_Name_City'){

        }
        else if (busqueda === 'Create'){

        }
        else if (busqueda === 'Update'){

        }
        else{

        }
    }


    return(        
        <React.Fragment>
            <div className="container-general">
                <form className="list" >
                    <Select options={options} 
                        defaultValue={{ label : "  Filter by Region", value:''}}
                        className="input-filter"
                        onChange={searchFor}
                    />
                </form> 
            </div>
            <Container className="container-search-all">
                { 
                    seleccion.map((key,i) => {
                        return(
                            <ContenedorAll key={i} nombre={key.nombre}  condicion={key.condicion} lugar_operacion={key.lugar_operacion} grupos={key.grupos} />
                        )
                    })
                }
            </Container>

        </React.Fragment>
    )
}

export default ContainerPrincipal;