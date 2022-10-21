module.exports = (sequelize, DataTypes) => {

    let alias = "Seres_has_vehiculo";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    };
    
    let config = {
        tableName: 'seres_has_vehiculo',
        timestamps: false
        };

    const Seres_has_vehiculo = sequelize.define(alias, cols, config);

    Seres_has_vehiculo.associate = function (models) {
        Seres_has_vehiculo.belongsTo(models.Seres, { 
            as: "Seres",
            foreignKey: 'seres_id',
            timestamps: false,
            onDelete: 'cascade'
        });

        Seres_has_vehiculo.belongsTo(models.Vehiculo, { 
            as: "Vehiculo",
            foreignKey: 'vehiculo_id',
            timestamps: false,
            onDelete: 'cascade'
        });
        
    }

    return Seres_has_vehiculo;
};