const db = require("../database/models");

const mainController = {
    allCharacters :( async (req,res) => {
        try {
            await db.Seres.findAll({
                include : [                    
                    {association:'Condicion'},
                    {association:'Lugar_operacion'},
                    {association:'Grupos'},
                    {association : 'Seres_has_tipo_poder'},
                    {association:'Seres_has_vehiculo'}
                ],
                order: [ ['id', 'ASC'] ]
            })
            .then((allCharacters) => {   
                if(allCharacters[0]){
                    const descripctionAllCharacters = [];
                    allCharacters.map((element,i) =>{
                        descripctionAllCharacters.push({
                            id : element.id,
                            nombre : element.nombre,
                            condicion : element.Condicion.condicion,
                            lugar_operacion : element.Lugar_operacion.ciudad,
                            grupos : element.Grupos.categoria,
                            seres_has_tipo_poder : element.Seres_has_tipo_poder,
                            Seres_has_vehiculo : element.Seres_has_vehiculo,
                            imagen : element.imagen
                        })
                    })
                    return res.status(200).json({
                        code : "200",
                        status : "Consulta exitosa",
                        descripctionAllCharacters
                    })
                }                
                else{
                    console.log("no registro")
                    return res.status(404).json({
                        code : "404",
                        status : "Búsquedas sin resultados",
                    })
                }
            })
        } catch (error) {
            return res.status(500).json({
                code : "500",
                status : "Internal Server Error"
            })
        }        
    }),

    createCharacters :(async(req, res)=>{
        
        if((req.body.nombre!=='') && (req.body.id_grupo!=='') && (req.body.id_operacion!=='') && (req.body.id_condicion!=='') && (req.body.imagen!=='') ){
            try {
                await db.Seres.create({
                    nombre: req.body.nombre, 
                    id_grupo: req.body.id_grupo,
                    id_operacion : req.body.id_operacion,
                    id_condicion : req.body.id_condicion,
                    imagen : req.body.imagen
                })
                .then(result => {
                    if((!result)){
                        return res.status(400).json({
                            code : "400",
                            status : "Datos faltantes para actualizar el registro"
                        })
                    }
                    return res.status(200).json({
                        code : "200",
                        status : "Registro exitoso"
                    })  
                })            
            } catch (error) {
                return res.status(500).json({
                    code : "500",
                    status : "Internal Server Error"
                })    
            } 
        }
        else{
            return res.status(400).json({
                code : "400",
                status : "Datos faltantes para actualizar el registro"
            })
        }
    }),
    
    allVehicle :(async (req, res)=>{
        try {
            await db.Vehiculo.findAll({
                include:[ {association:'Seres_has_vehiculo'} ],
                order: [ ['id', 'ASC'] ]
            })
            .then((allvehiculos) => {
                if(!allvehiculos[0]){
                    return res.status(404).json({
                        code : "404",
                        status : "Búsquedas sin resultados",
                    })
                }
                return res.status(200).json({
                    code : "200",
                    status : "Consulta exitosa",
                    allvehiculos
                })
            });
        }
        catch (error) {
            return res.status(500).json({
                code : "500",
                status : "Internal Server Error"
            })
        }
    }),

    Character:(async (req, res)=>{
        const id = req.params.id;
        try {
            await db.Seres.findOne({
                include : [
                    {association:'Lugar_operacion'}
                ],                    
                where: {
                    id: id
                }
            })
            .then((idCharacters) => { 
                if(idCharacters!== null){
                    const character = [];
                    character.push({
                        id : idCharacters.id,
                        nombre : idCharacters.nombre,
                        imagen : idCharacters.imagen,
                        id_operacion: idCharacters.Lugar_operacion.id,
                        Lugar_operacion : idCharacters.Lugar_operacion.ciudad,
                    })
                    return res.status(200).json({
                        code : "200",
                        status : "Consulta exitosa",
                        character
                    })
                }
                if(idCharacters== null){
                    return res.status(404).json({
                        code : "404",
                        status : "No existe registro para el valor consultado",
                    })
                }                            
            });
        } catch (error) {
            return res.status(500).json({
                code : "500",
                status : "Internal Server Error"
            })
        }
    }),
    
    updateCharacters :( async (req, res)=>{
        try {
            const updateNombre = db.Seres.update(
                {nombre : req.body.nombre},
                {where: { id: req.params.id} }
            )
            .then( resultado => {
                db.Seres.findOne(
                    {where: { id: req.params.id }
                })
                .then(resp =>{
                    db.Lugar_operacion.update(
                        {ciudad : req.body.Lugar_operacion},
                        {where: { id: resp.id_operacion} }
                    )
                    if(!resp){
                        return res.status(404).json({
                            code : "404",
                            status : "El registro no puede ser actualizado",
                        })
                    }
                    return res.status(200).json({
                        code : "200",
                        status : "Registro actualizado"
                    })
                })
            })
        } catch (error) {
            return res.status(500).json({
                code : "500",
                status : "Internal Server Error"
            })
        }        
    })    
}

module.exports = mainController;

