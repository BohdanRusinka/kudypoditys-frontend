const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    User = require('./User'),
    Room = require('./Room'),
    PaymentType = require('./PaymentType');

let Reservation = orm.define('reservation', {
    dateIn: {
        type: Sequelize.DATE
    },
    dateOut: {
        type: Sequelize.DATE
    },
    guestsCount: {
        type: Sequelize.INTEGER
    }
})

Reservation.belongsTo(User);
Reservation.belongsTo(Room);
Reservation.belongsTo(PaymentType);

module.exports = Reservation;