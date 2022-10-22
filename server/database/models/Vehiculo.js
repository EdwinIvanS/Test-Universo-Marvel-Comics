module.exports = (sequelize, DataTypes) => {

    let alias = "Vehiculo";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        tipo: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    };
    
    let config = {
        tableName: 'vehiculo',
        timestamps: false
        };

    const Vehiculo = sequelize.define(alias, cols, config);

    Vehiculo.associate = function (models) {
        
        Vehiculo.hasMany(models.Seres_has_vehiculo, { 
            as: "Seres_has_vehiculo",
            foreignKey: 'vehiculo_id',
            timestamps: false,
            onDelete: 'cascade'
        })
       /*
        Vehiculo.belongsToMany(models.Seres, { 
            through : "Seres_has_vehiculo",
            foreignKey: "vehiculo_id"
        })
         */
        
    }

    return Vehiculo;
};