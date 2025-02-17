// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { to, subject, text, html } = await request.json();

  // Configura el transporter de nodemailer con las credenciales de Brevo
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587, // Usa 465 para SSL
    secure: false, // true para SSL
    auth: {
      user: process.env.BREVO_SMTP_USER, // Tu correo registrado en Brevo
      pass: process.env.BREVO_SMTP_PASSWORD, // Tu clave SMTP
    },
  });

  try {
    // Envía el correo
    const info = await transporter.sendMail({
      from: `"Geniorama Web" <noreply@geniorama.co>`, // Remitente
      to, // Destinatario
      subject, // Asunto
      text, // Cuerpo del correo en texto plano
      html, // Cuerpo del correo en HTML
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { success: false, error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
