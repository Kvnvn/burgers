const connection = require("./connection");

const orm = {
    getAll:(table,callback)=>{
        connection.query("SELECT * FROM ??",[table],(error,data)=>{
            callback(data);
        })
    }
}
module.exports = orm;

orm.getAll("burgers",burgers=>console.log(burgers));

// [
// RowDataPacket { id: 1, burger_name: 'DOUBLE-DOUBLE', devoured: 1 },
// RowDataPacket { id: 2, burger_name: 'Cheese-burger', devoured: 0 },
// RowDataPacket { id: 3, burger_name: 'Veggie-Burger', devoured: 0 }
// ]