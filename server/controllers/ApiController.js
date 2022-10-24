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
                if(!allCharacters){
                    res.status(404).json({
                        code : "404",
                        status : "Búsquedas sin resultados",
                    })
                }
                res.status(200).json({
                    code : "200",
                    status : "Consulta exitosa",
                    descripctionAllCharacters
                })
            });
        } catch (error) {
            res.status(500).json({
                code : "500",
                status : "Internal Server Error"
            })
        }        
    }),

    createCharacters :(async(req, res)=>{
        try {
            db.Seres.create({
                nombre: req.body.nombre, 
                id_grupo: req.body.id_grupo,
                id_operacion : req.body.id_operacion,
                id_condicion : req.body.id_condicion,
                imagen : req.body.imagen
            })
            .then(result => {
                if(!result.dataValues.nombre){
                    res.status(400).json({
                        code : "400",
                        status : "Datos faltantes para actualizar el registro"
                    })
                }
                res.status(200).json({
                    code : "200",
                    status : "Consulta exitosa"
                })  
            })            
        } catch (error) {
            res.status(500).json({
                code : "500",
                status : "Internal Server Error"
            })    
        } 
    }),

    updateCharacters :((req, res)=>{
        try {
            db.Seres.update(
                {
                    nombre : nombre,
                    id_operacion : operacion
                },
                { 
                    where: {id: req.params.id}
                }            
            )
            .then((updateCharacters) => { 
                if(!updateCharacters){
                    res.status(400).json({
                        code : "400",
                        status : "Datos faltantes para actualizar el registro"
                    })
                }
                res.status(201).json({
                    code : "201",
                    status : "Registro actualizado "
                })
            });

        } catch (error) {
            res.status(500).json({
                code : "500",
                status : "Internal Server Error"
            })
        }
        
    }),

    allVehicle :( async (req, res)=>{
        try {
            await db.Vehiculo.findAll({
                include:[ {association:'Seres_has_vehiculo'} ],
                order: [ ['id', 'ASC'] ]
            })
            .then((allvehiculos) => {
                if(!allvehiculos){
                    res.status(404).json({
                        code : "404",
                        status : "Búsquedas sin resultados",
                    })
                }
                res.status(200).json({
                    code : "200",
                    status : "Consulta exitosa",
                    allvehiculos
                })
            });
        }
        catch (error) {
            res.status(500).json({
                code : "500",
                status : "Internal Server Error"
            })
        }
    })
}

module.exports = mainController;

