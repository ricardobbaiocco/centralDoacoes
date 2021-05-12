const nodemailer = require('nodemailer');

exports.notificando = function(remetente,senha1,destinatario,usuario_p,senha_p){
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: remetente,
            pass: senha1
        },
        tls: {rejectUnauthorized: false }
    });

    const mailOptions = {
        from: remetente,
        to: destinatario,
        subject: 'E-mail enviado usando Node!',
        text: 'Olá, seu usuário é'+ usuario_p+ 'e a senha é '+senha_p
    };

    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log('E-mail enviado'+ info.response);
        }
    });
}