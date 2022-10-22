module.exports = (sequelize, DataTypes) => {

    let alias = "Seres_has_tipo_poder";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    };
    
    let config = {
        tableName: 'seres_has_tipo_poder',
        timestamps: false
    };

    const Seres_has_tipo_poder = sequelize.define(alias, cols, config);

    Seres_has_tipo_poder.associate = function (models) {
        
        Seres_has_tipo_poder.belongsTo(models.Seres, { 
            as: "Seres",
            foreignKey: 'seres_id',
            timestamps: false,
            onDelete: 'cascade'
        });
        
        Seres_has_tipo_poder.belongsTo(models.Tipo_poder, { 
            as: "Tipo_poder",
            foreignKey: 'tipo_poder_id',
            timestamps: false,
            onDelete: 'cascade'
        });
        
    }

    return Seres_has_tipo_poder;
};