module.exports = (sequelize, DataTypes) => {

    let alias = "Seres";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    };
    
    let config = {
        tableName: 'seres',
        timestamps: false
        };

    const Seres = sequelize.define(alias, cols, config);

    Seres.associate = function (models) {
        Seres.belongsTo(models.Condicion, { 
            as: "Condicion",
            foreignKey: 'id_condicion',
            timestamps: false,
            onDelete: 'cascade'
        });
        Seres.belongsTo(models.Lugar_operacion, { 
            as: "Lugar_operacion",
            foreignKey: 'id_operacion',
            timestamps: false,
            onDelete: 'cascade'
        });
        Seres.belongsTo(models.Grupos, { 
            as: "Grupos",
            foreignKey: 'id_grupo',
            timestamps: false,
            onDelete: 'cascade'
        });
        
        Seres.hasMany(models.Seres_has_tipo_poder, { 
            as: "Seres_has_tipo_poder",
            foreignKey: 'seres_id',
            timestamps: false,
            onDelete: 'cascade'
        });
        
        Seres.hasMany(models.Seres_has_vehiculo, { 
            as: "Seres_has_vehiculo",
            foreignKey: 'seres_id',
            timestamps: false,
            onDelete: 'cascade'
        });
        

        /*
        Seres.belongsToMany(models.Tipo_poder, { 
            through : "Seres_has_tipo_poder",
            foreignKey: "seres_id"
        })
        
        Seres.belongsToMany(models.Vehiculo, {
            through : "Seres_has_vehiculo",
            foreignKey: "seres_id"
        })
        */
    }

    return Seres;
};