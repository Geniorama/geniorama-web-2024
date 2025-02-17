// app/api/verify-recaptcha/route.ts
import { NextResponse } from "next/server";

interface RecaptchaVerificationResponse {
  success: boolean;
  "error-codes"?: string[];
}

export async function POST(request: Request) {
  const { recaptchaValue }: { recaptchaValue: string } = await request.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY || "";
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaValue}`;

  try {
    const response = await fetch(verificationUrl, {
      method: "POST",
    });
    const data: RecaptchaVerificationResponse = await response.json();

    return NextResponse.json({ success: data.success });
  } catch (error) {
    console.error("Error al verificar reCAPTCHA:", error);
    return NextResponse.json({ success: false });
  }
}