const orm = require('../config/orm');

const burger = {
    all: (callback)=> orm.getAll("burgers", callback),
    create: (burger_name,callback) => orm.createOne("burgers",{ burger_name }, callback),
};

module.exports = burger;

// burger.all(burgers =>console.log(burgers));
// [
    //     RowDataPacket { id: 1, burger_name: 'DOUBLE-DOUBLE', devoured: 1 },
    //     RowDataPacket { id: 2, burger_name: 'Cheese-burger', devoured: 0 },
    //     RowDataPacket { id: 3, burger_name: 'Veggie-Burger', devoured: 0 }
    //   
// burger.create("american burger",(result) => console.log(result));

// }
// OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 10,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0
// }