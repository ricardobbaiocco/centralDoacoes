const db = require('./db')

const usuario = db.sequelize.define('usuarios',{
    usuario:{
        type:db.Sequelize.STRING
    },
    senha:{
        type:db.Sequelize.STRING
    },
    foto:{
        type:db.Sequelize.STRING
    },
    Pessoaid:{
        type:db.Sequelize.STRING
    }
})


//Cria tabela - somente uma vez
//usuario.sync({force:true})



module.exports= usuario