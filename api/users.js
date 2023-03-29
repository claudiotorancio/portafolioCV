//api/users
//const path = require('path')
const nodemailer = require('nodemailer')
//const Mailgen = require('mailgen');
require('dotenv').config();


/** enviar correos de prueba */

const users = async (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;
    
    const contentHTML = `
    <ul>
    <h1> User Inforamtion</h1>
    <li>Nombre: ${nombre}</li>
    <li>email: ${email}</li>
    <li>asunto: ${asunto}</li>
    <li>mensaje</li>
    </ul>
    <p>${mensaje}</p>
    `
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.AWS_ACCESS_KEY_ID, // generated ethereal password

        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let message = {
        from: '"Claudio Torancio" <foo@example.com>', // sender address
        to: process.env.EMAIL, // list of receivers
        subject: `website contact form`, // Subject line
        text: "hello world", // plain text body
        html: contentHTML, // html body
    };
    transporter.sendMail(message).then((info) => {
       res.status(200).redirect('/success')
         //res.status(200).json({redirectURL : '/success'})
          /* app.get('/success',(req, res) => {
            res.sendFile(path.join(__dirname, 'public'))
        })*/
        

            //window.location.href = '/success.html'
    }).catch (error => {
        res.status(500).redirect('/error')
        console.log(error)
        //res.status(500).json({ error});
        //res.redirect('/error.html')
        //res.status(500).json({ success: false, message: 'Ha ocurrido un error al enviar el correo electrónico' });
    })

    //res.status(201).json('Singnup Sucessfully')
}

module.exports = {
    users
  
}

