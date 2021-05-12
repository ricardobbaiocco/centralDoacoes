const db = require('./DB')

//Criando tabela de cadastro doador no banco de dados
const doadorCadastro = db.sequelize.define('doadorcadastros',{
    nome:{
        type:db.Sequelize.STRING
    },
    cpfcnpj:{
        type:db.Sequelize.STRING
    },
    endereco:{
        type:db.Sequelize.STRING
    },
    numero:{
        type:db.Sequelize.STRING
    },
    bairro:{
        type:db.Sequelize.STRING
    },
   cidade:{
       type:db.Sequelize.STRING
   },
   estado:{
       type:db.Sequelize.STRING
   },
    email:{
        type:db.Sequelize.STRING
    },
    whatsapp:{
        type:db.Sequelize.STRING
    },
    notificacao:{
        type:db.Sequelize.STRING
    }
})


//Cria tabela - somente uma vez
//doadorCadastro.sync({force:true})


//exportando a constante
module.exports= doadorCadastro
