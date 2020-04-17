const orm = require('../config/orm');

const burger = {
    all:(callback)=> orm.getAll("burgers", callback)
};

module.burger;
burger.all(burgers =>console.log(burgers));