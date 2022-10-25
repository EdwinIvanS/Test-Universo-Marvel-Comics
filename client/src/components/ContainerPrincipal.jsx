import React, { useState } from "react";
import Select from 'react-select'
import Container from "react-bootstrap/Container";
import {options} from './list/listSearch';
import ContainerAll from "./ContainerAll";
import ContainerNameCity from "./ContainerNameCity";
import ContainerCreate from "./ContainerCreate";
import VehicleAll from "./VehiclesAll";
import ContainerUpdate from "./ContainerUpdate";
import { ServiceFetchAllCharacters } from '../components/services/ServiceFetchAllCharacters'


const ContainerPrincipal = () =>{
    
    const[seleccion, setSeleccion] = useState([]);
    const[modal, setModal] = useState("");

    const searchFor = (e) =>{
        let busqueda = e.value;
        setModal(busqueda);
        if(busqueda === 'All'){
            const fetchSelectAll = async () => {
                ServiceFetchAllCharacters()
                .then( resultado => {
                    let array =[];
                        resultado.descripctionAllCharacters?.forEach(e => { array.push(e)}); 
                        setSeleccion(array);
                    })
            }
            try { fetchSelectAll() } 
            catch (error) {console.log(error)}
        }
    }

    return(        
        <React.Fragment>
            <div className="container-general">
                <form className="list" >
                    <Select options={options} 
                        defaultValue={{ label : "  Filter by ", value:''}}
                        className="input-filter"
                        onChange={searchFor}
                    />
                </form> 
            </div>
            <Container className="container-search-all">
                {modal === 'All' && seleccion.map((key,i) => {
                        return(
                            <ContainerAll key={i} nombre={key.nombre} condicion={key.condicion} lugar_operacion={key.lugar_operacion} grupos={key.grupos} imagen={key.imagen} />
                        )
                    })
                }
                {(modal === 'All_Name' || modal === 'All_City') && (<ContainerNameCity consulta={modal}/>)}
                { modal === 'Create' && (<ContainerCreate/>)}
                { modal === 'All_Card' && (<VehicleAll/>) } 
                { modal === 'Update' && (<ContainerUpdate/>) }                

            </Container>

        </React.Fragment>
    )
}

export default ContainerPrincipal;