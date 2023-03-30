//api/getbill

const nodemailer = require('nodemailer')
const Mailgen = require('mailgen');
require('dotenv').config();

/**enviar correos desde cuenta gmail  */

const getbill = (req, res) => {

  const { userEmail } = req.body;

  let config = {
      service: 'gmail',
      auth: {
          user: config.EMAIL,
          pass: config.AWS_ACCESS_KEY_ID
      }
  }
  let transporter = nodemailer.createTransport(config)
  let MailGenerator = new Mailgen({
      theme: 'default',
      product: {
          name: "Mailgen",
          link: "https://mailgen.js"
      }
  })

  let response = {
      body: {
          name: "Daily Tuition",
          intro: "your bill arrived",
          table: {
              data: [
                  {
                      item: "Nodemailer Stack Bock",
                      description: "A Backend application",
                      price: "$10.99",
                  }
              ]
          },
          outro: "Looking forward to do more businnes"
      }
  }
  let mail = MailGenerator.generate(response)

  let message = {
      from: config.EMAIL,
      to: userEmail,
      subject: "Place Order",
      html: mail

  }

  transporter.sendMail(message).then(() => {
      return res.status(201).json({
          msg: "you should recive an email"
      })
  }).catch(error => {
      return res.status(500).json({ error })
  })

  //res.status(201).json('getbill Sucessfully')

}

module.exports = {
getbill
}
