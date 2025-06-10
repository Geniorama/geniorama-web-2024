import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { 
      to, 
      templateId, 
      templateData, 
      subject, 
      fromName = "Geniorama Web",
      fromEmail = "noreply@geniorama.co",
      html, // Para fallback SMTP
      text // Para fallback SMTP
    } = await request.json();

    console.log("Datos recibidos:", { to, templateId, subject, fromName, fromEmail, html, text, templateData });

    // Validar datos requeridos
    if (!to || !templateId) {
      console.error("Faltan campos requeridos: to o templateId", { to, templateId });
      return NextResponse.json(
        { success: false, error: "Se requieren 'to' y 'templateId'", received: { to, templateId } },
        { status: 400 }
      );
    }

    // Intentar primero con la API de Brevo
    const brevoApiKey = process.env.BREVO_API_KEY;
    if (brevoApiKey) {
      try {
        const recipients = Array.isArray(to) ? to : [{ email: to }];
        console.log("Destinatarios normalizados:", recipients);

        const emailData = {
          to: recipients.map(email => ({ email })),
          templateId: parseInt(templateId),
          params: templateData || {},
          subject: subject,
          sender: {
            name: fromName,
            email: fromEmail
          }
        };

        console.log("Enviando con Brevo API:", JSON.stringify(emailData, null, 2));

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': brevoApiKey
          },
          body: JSON.stringify(emailData)
        });

        const result = await response.json();

        if (response.ok) {
          console.log("Respuesta exitosa de Brevo API:", result);
          return NextResponse.json({
            success: true,
            messageId: result.messageId,
            data: result,
            method: 'brevo_api',
            recipients: recipients
          });
        } else {
          console.error("Error de Brevo API:", result);
          return NextResponse.json({
            success: false,
            error: "Error al enviar el email con template (Brevo API)",
            details: result,
            sentData: emailData
          }, { status: response.status });
        }
      } catch (apiError) {
        console.error("Error al conectar con Brevo API:", apiError);
        // Continuar con el fallback SMTP
      }
    }

    // Fallback: Usar SMTP con nodemailer
    console.log("Usando fallback SMTP...");
    
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASSWORD,
      },
    });

    // Para SMTP necesitamos HTML o texto
    if (!html && !text) {
      console.error("Faltan html o text para SMTP", { html, text });
      return NextResponse.json(
        { 
          success: false, 
          error: "Para usar SMTP se requiere 'html' o 'text' en el body",
          received: { html, text }
        },
        { status: 400 }
      );
    }

    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Respuesta de nodemailer:", info);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      method: 'smtp_fallback'
    });

  } catch (error) {
    console.error("Error al enviar el email con template:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 