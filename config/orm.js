const connection = require("./connection");

const orm = {
    getAll:(table,callback)=>{
        connection.query("SELECT * FROM ??",[table],(error,data)=>{
            callback(data);
        })
    }
}
module.exports = orm;

// orm.getAll("todos",todos=>console.log(todos))