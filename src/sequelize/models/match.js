'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Match extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Match.belongsTo(models.Player, {as: 'Player1', foreignKey: 'player1Id'});
            Match.belongsTo(models.Player, {as: 'Player2', foreignKey: 'player2Id'});
            Match.belongsTo(models.Player, {as: 'Winner', foreignKey: 'winnerId'});
        }
    }

    Match.init(
        {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                type: DataTypes.UUID,
            },
            player1Id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Player',
                    key: 'id',
                },
            },
            player2Id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Player',
                    key: 'id',
                },
            },
            winnerId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Player',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: 'Match',
        }
    );
    return Match;
}
