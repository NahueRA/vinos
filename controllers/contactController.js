const nodemailer = require('nodemailer');

// Configurar nodemailer con tus credenciales de correo electrónico
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'sheila.fahey50@ethereal.email',
        pass: 'RkauPjRgVr46Xwarcr'
    }
});
// Controlador para la ruta de contacto
const contactController = {
  showContactForm: (req, res) => {
    res.render('contact');
  },

  submitContactForm: (req, res) => {
    const { name, email, message } = req.body;

    // Configurar el contenido del correo electrónico
    const mailOptions = {
        from: email,
        to: 'destinatario@ejemplo.com',
        subject: 'Formulario de contacto',
        text: `
        Nombre: ${name}\n
        Email:${email}\n 
        Mensaje:${message}`
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error al enviar el mensaje');
      } else {
        console.log('Mensaje enviado: ' + info.response);
        res.send('Mensaje enviado correctamente');
      }
    });
  }
};

module.exports = contactController;



