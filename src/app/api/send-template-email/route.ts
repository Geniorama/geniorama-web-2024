import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { 
      to, 
      templateId, 
      templateData, 
      subject, 
      fromName = "Geniorama Web",
      fromEmail = "noreply@geniorama.co"
    } = await request.json();

    // Validar datos requeridos
    if (!to || !templateId) {
      return NextResponse.json(
        { success: false, error: "Se requieren 'to' y 'templateId'" },
        { status: 400 }
      );
    }

    // Configurar la petición a la API de Brevo
    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!brevoApiKey) {
      return NextResponse.json(
        { success: false, error: "API key de Brevo no configurada" },
        { status: 500 }
      );
    }

    const emailData = {
      to: Array.isArray(to) ? to : [{ email: to }],
      templateId: parseInt(templateId),
      params: templateData || {},
      subject: subject,
      sender: {
        name: fromName,
        email: fromEmail
      }
    };

    // Enviar email usando la API de Brevo
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

    if (!response.ok) {
      console.error("Error de Brevo API:", result);
      return NextResponse.json(
        { 
          success: false, 
          error: "Error al enviar el email con template",
          details: result
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      data: result
    });

  } catch (error) {
    console.error("Error al enviar el email con template:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 