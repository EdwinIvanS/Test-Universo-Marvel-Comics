module.exports = (sequelize, DataTypes) => {

    let alias = "Grupos";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        categoria: {
            type: DataTypes.STRING(45),
            allowNull: false
        } 
    };
    
    let config = {
        tableName: 'grupos',
        timestamps: false
        };

    const Grupos = sequelize.define(alias, cols, config);

    Grupos.associate = function (models) {
        Grupos.hasMany(models.Seres, { 
            as: "Seres",
            foreignKey: 'id_grupo',
            timestamps: false,
            onDelete: 'cascade'
        });
    }

    return Grupos;
};