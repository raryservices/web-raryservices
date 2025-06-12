import nodemailer from 'nodemailer';

export async function sendVerificationEmail(token: string, email: string) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, 
    },
  });

  let info = await transporter.sendMail({
    from: '"RARY Service" <raryinc@gmail.com>',
    to: email,
    subject: "Verifique seu E-mail",
    html: `<h1>Olá!</h1>
           <h4>Seu link de verificação está abaixo. Clique nele para confirmar o seu e-mail:</h4>
           <a href="http://localhost:3000/api/email?token=${token}">verifique clicando aqui</a>`,
  });

  console.log(info.messageId);
}
