const db = require('./DB')

//Criando tabela de cadastro de ONG no banco de dados
const doacaoCadastro = db.sequelize.define('doacaocadastros',{
   categoria:{
       type:db.Sequelize.STRING
   },descricao:{
    type:db.Sequelize.STRING
},descricao:{
    type:db.Sequelize.STRING
},nivel:{
    type:db.Sequelize.STRING
},idOng:{
    type:db.Sequelize.INTEGER
},
})


//Cria tabela - somente uma vez
//doacaoCadastro.sync({force:true})


//exportando a constante
module.exports= doacaoCadastro