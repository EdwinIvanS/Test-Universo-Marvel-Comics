module.exports = (sequelize, DataTypes) => {

    let alias = "Lugar_operacion";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        ciudad: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    };
    
    let config = {
        tableName: 'lugar_operacion',
        timestamps: false
        };

    const Lugar_operacion = sequelize.define(alias, cols, config);

    Lugar_operacion.associate = function (models) {
        Lugar_operacion.hasMany(models.Seres, { 
            as: "Seres",
            foreignKey: 'id_operacion',
            timestamps: false,
            onDelete: 'cascade'
        });
    }

    return Lugar_operacion;
};