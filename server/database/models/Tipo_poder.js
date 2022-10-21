module.exports = (sequelize, DataTypes) => {

    let alias = "Tipo_poder";
    
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
        tableName: 'seres',
        timestamps: false
        };

    const Tipo_poder = sequelize.define(alias, cols, config);

    
    Tipo_poder.associate = function (models) {
        Tipo_poder.hasMany(models.Seres_has_tipo_poder, { 
            as: "Seres_has_tipo_poder",
            foreignKey: 'tipo_poder_id',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Tipo_poder;
};