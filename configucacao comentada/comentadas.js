/*
 //configuração do nodemailer
 const nodemailer = require('nodemailer')
 const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 587,
     secure: false, // true for 465,false for other ports
     auth:{
         user: "ricardobaiocco.17@gmail.com",
         pass: "XXXXXXXXXXX"
     },
     tls: { rejectUnauthorized: false}
 });


 const mailOptions = {
     from: 'ricardobaiocco.17@gmail.com',
     to: 'renan.balen@gmail.com',
     subject: 'E-mail enviado usando Node!',
     text: 'Bem fácil, negócio está enviando certo! '
 };

//execução do email
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email enviado: ' + info.response);
    }
});
*/



//chamada principal de teste da ligação entre tabelas

/*app.get('/', function(req,res){
    if(req.session.cpf != undefined){
        pessoa.findAll({where:{cpf:req.session.cpf}}).then(function(pessoas){
            res.render('index',{pessoa: pessoas.map(p => p.toJSON())})
        })
    }else{
        res.render("index")
    }
})


app.get('/novo',function(req,res){
    if(req.session.idusuario =! undefined){
        res.render("cadastrar")
    }else{
        res.redirect('/')
    }
})

*/





/*
//rota criada para chamar o formulario de login
app.get('/loginAdm',function(req,res){
    res.render('loginAdm')
})


//criando a rota da session para fazer login
app.post('/loginAdm',function (req,res){

    req.session.nome = 'andre';
    req.session.senha = 'repolho123'

    if(req.session.nome == req.body.email && req.body.senha == 'repolho123'){
        res.send ("usuario logado")
    }else{
        res.send ("usuario não existe")
    }
})

req.session.email = req.body.email;
req.session.senha = req.body.senha;
usuario.count({where: { email: req.session.email } && {senha: req.session.senha }}).then(function(dadosadm){
    if(dadosadm >=1){
        res.render('index')

    }else{
        res.send("UsuÃƒÂ¡rio invÃƒÂ¡lido")
    }
})
})*/

//CRIAR USUARIO DE ADM
 //criando usuario de administrador na pasta usuarios
 /*app.post('/cadUsuario',function(req,res){
    usuario.create({
        email:req.body.email,
        senha:req.body.senha
    }).then(function(){
        res.render('/formulario')
    }).catch(function(erro){
        res.send("Erro "+erro)
    })
})

app.get('/formulario',function(req,res){
  usuario.findAll().then(function(administrador){
      res.render('formulario',{usuario: administrador.map(cadastrousuario => cadastrousuario.toJSON())})
  })
})
*/




/*
app.post('/perfilOng',function(req,res){
    ongCadastro.findAll().then(function(ongs){
        res.render('perfilOng',{ong: ongs.map(cadastramento => cadastramento.toJSON())})
})
})
*/



/*
//Criando relacionamento entre tabelas teste

app.get("/restrita", function(req,res){
    if(req.session.idusuario != undefined){
        usuario.findAll({
            raw:true,
            //attibutes: ['id'],
            include :[{
                model: pessoa,
                required: true, //elimina registro no encontrado na parental
            }], where:{id:req.session.idusuario},
            order:[['id']]

        }).then(function(usuario2){
            res.render('arearestrita',{usuario2})
            console.log(usuario2)
        })
    }else{
        req.redirect("/")
    }
})


// rota de login para teste de relação de 2 tabelas
app.get('/login',function(req,res){
    res.render('login')
})

app.post("/login", function(req,res){
    console.log(req.body)
    usuario.count({ where: { usuario: req.body.usuario,senha: req.body.senha}}).then(function(dados){
        if(dados>=1){
            usuario.findAll({ where: {usuario: req.body.usuario,senha: req.body.senha}}).then(function(usuario){
                idUsuario = usuario.map(pagamento => pagamento.toJSON().id)
                id = idUsuario.toString();
                req.session.idusuario = id;
                console.log('isto veio da session ->' + req.session.idusuario)
                res.redirect("restrita")
            })

        }else{
            res.render("login",{mensagem:"Usuário ou senha não existe"})
        }
    })
})

// aqu faz o cadastro em 2 tabelas ao mesmo tempo
app.post('/cadPessoa', upload.single('imagem_prod'),function(req,res){
    req.session.cpf = req.body.cpf
    if(req.file){
        var imagem = req.file.originalname
    }else{
        var imagem = 'naoveio.png'
    }//verificando se a pessoa ja existe antes de fazer novo cadastro
    pessoa.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        cpf: req.body.cpf
    }).then(function(){
        pessoa.findAll({where: { cpf:req.session.cpf}}).then(function(doadores){
            idPessoa = doadores.map(pagamento => pagamento.toJSON().id)
            console.log(idPessoa)   
            usuario.create({
                usuario: req.session.cpf,
                senha: 'user123',
                foto: imagem,
                Pessoaid:idPessoa.toString()
            }).then(function(){
                res.redirect("/")
            })
        })
    })

})
*/

/*app.get('/cadastroDoador',function(req,res){
    res.render('cadastroDoador')
})

app.get('/categoriaOng',function(req,res){
    res.render('categoriaOng')
})

app.get('/formulario',function(req,res){
    res.render('formulario')
})
*/


/*//CRIANDO ROTA DE CADASTRO DE PESSOA PARA TESTE DE LOGIN COM MENSAGEM
// aqui faz o cadastro em 2 tabelas ao mesmo tempo
app.post('/cadPessoa', upload.single('imagem_prod'),function(req,res){
    req.session.cpf = req.body.cpf
    if(req.file){
        var imagem = req.file.originalname
    }else{
        var imagem = 'naoveio.png'
    }//verificando se a pessoa ja existe antes de fazer novo cadastro
    pessoa.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        cpf: req.body.cpf
    }).then(function(){
        pessoa.findAll({where: { cpf:req.session.cpf}}).then(function(doadores){
            idPessoa = doadores.map(pagamento => pagamento.toJSON().id)
            console.log(idPessoa)   
            usuario_padrao = req.session.cpf,
            senha_padrao =  'user123',
            usuario.create({
                usuario:usuario_padrao,
                senha:senha_padrao,
                foto: imagem,
                Pessoaid:idPessoa.toString()
            }).then(function(){
                res.redirect("/")

                notificar.notificando(
                    'ricardobaiocco.17@gmail.com',
                    '',
                    'ricardobaiocco.17@gmail.com',
                    usuario_padrao,
                    senha_padrao
                )
            })
        })
    })

})
// rota de login para teste de relação de 2 tabelas
//ESTA ROTA DEVE SER CHAMADA DIRETO NO BROWSER POIS NÃO TEM BOTÃO PARA CHAMAR, É UMA DE TESTE
app.get('/login',function(req,res){
    res.render('login')
    req.session.usuario1 = 1
})

app.post("/login", function(req,res){
    console.log(req.body)
    usuario.count({ where: { usuario: req.body.usuario,senha: req.body.senha}}).then(function(dados){
        if(dados>=1){
            usuario.findAll({ where: {usuario: req.body.usuario,senha: req.body.senha}}).then(function(usuario){
                idUsuario = usuario.map(pagamento => pagamento.toJSON().id)
                id = idUsuario.toString();
                req.session.idusuario = id;
                console.log('isto veio da session ->' + req.session.idusuario)
                res.redirect("restrita")
            })

        }else if(req.session.usuario1 == 1){
            res.render("login",{mensagem:"Usuário Inválido"})
            req.session.usuario1++
        }else{
            res.redirect("login")
            
        }
    })
})
//TERMINANDO ROTA DE CADASTRO DE PESSOA PARA TESTE DE LOGIN COM MENSAGEM
*/

/*

//INICIANDO ROTAS DE FALE_CONOSCO
app.get('/fale_conosco',function(req,res){
    res.render('fale_conosco')
})

app.post('/fale_conosco',function(req,res){
    fale_conosco.create({

        nome_solicitante:req.body.nome_solicitante,
        email_solicitante:req.body.email_solicitante,
        relato_solicitante:req.body.relato_solicitante,
    }).then(function(){
        res.render('fale_conosco',{mensagem:'Cadastro com sucesso!!'})
    })
})
//TERMINANDO ROTAS DE FALE_CONOSCO
*/