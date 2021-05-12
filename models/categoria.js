const db = require('./DB')

//Criando tabela de cadastro de ONG no banco de dados
const categoriaCadastro = db.sequelize.define('categoriacadastros',{
   categoria:{
       type:db.Sequelize.STRING
   }
})


//Cria tabela - somente uma vez
//categoriaCadastro.sync({force:true})


//exportando a constante
module.exports= categoriaCadastro