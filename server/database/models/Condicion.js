module.exports = (sequelize, DataTypes) => {

    let alias = "Condicion";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        condicion: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    };
    
    let config = {
        tableName: 'condicion',
        timestamps: false
        };

    const Condicion = sequelize.define(alias, cols, config);

    Condicion.associate = function (models) {
        Condicion.hasMany(models.Seres, { 
            as: "Seres",
            foreignKey: 'id_condicion',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Condicion;
};