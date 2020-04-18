const connection = require("./connection");

const orm = {
    getAll:(table,callback)=>{
        connection.query("SELECT * FROM ??",[table],(error,data)=>{
            if (error) {
                throw error;
            }
            callback(data);
        });
    },
    createOne:(table,newRowValues,callback) => {
        const query="INSERT INTO ?? SET ?"
        connection.query(query,[table, newRowValues],(err,data)=>{
            if (err){
                throw err;
            }
            callback(data)
        })
    }
}
module.exports = orm;
// orm.createOne("burgers", {burger_name: "american burger"}, result =>{
//     console.log(result);

// });
// orm.getAll("burgers",burgers=>console.log(burgers));

// [
// RowDataPacket { id: 1, burger_name: 'DOUBLE-DOUBLE', devoured: 1 },
// RowDataPacket { id: 2, burger_name: 'Cheese-burger', devoured: 0 },
// RowDataPacket { id: 3, burger_name: 'Veggie-Burger', devoured: 0 }
// ]

// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 5,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
// //   }