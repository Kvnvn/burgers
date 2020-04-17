const orm = require('../config/orm');

const burger = {
    all: (callback)=> orm.getAll("burgers", callback)
};

module.exports = burger;
// burger.all(burgers =>console.log(burgers));
// [
//     RowDataPacket { id: 1, burger_name: 'DOUBLE-DOUBLE', devoured: 1 },
//     RowDataPacket { id: 2, burger_name: 'Cheese-burger', devoured: 0 },
//     RowDataPacket { id: 3, burger_name: 'Veggie-Burger', devoured: 0 }
//   ]