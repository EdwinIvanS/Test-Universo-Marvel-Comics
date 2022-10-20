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
        Vehiculo.belongsTo(models.seres, { 
            as: "Seres",
            foreignKey: 'id_seres',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Vehiculo;
};