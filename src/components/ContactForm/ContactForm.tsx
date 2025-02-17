"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Recaptcha from "@/components/Recaptcha/Recaptcha";


interface RecaptchaResponse {
  success: boolean;
}

interface FormDataProps {
  fullName: string,
  email: string,
  message: string,
  privacy: boolean,
  section: string,
  language: string
}

export default function ContactForm() {
  const tContact = useTranslations("contact");
  const locale = useLocale()
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const initialData:FormDataProps = {
    fullName: "",
    email: "",
    message: "",
    privacy: false,
    section: "contact",
    language: locale
  };

  const [formData, setFormData] = useState<FormDataProps>(initialData);
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const sendWebhookData = async (formData: any) => {
    const webhoook_url = "https://hook.us1.make.com/62f9x7ts6rptu224ab86vm88t49qi6y7";
    fetch(webhoook_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log(
            "Datos enviados al servidor a través del webhook con éxito."
          );
          setSuccess('Your message has been sent successfully')
        } else {
          console.error(
            "Error al enviar datos al servidor a través del webhook."
          );
          alert(
            "Error al enviar datos al servidor. Por favor, inténtalo de nuevo más tarde."
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error al enviar datos al servidor a través del webhook:",
          error
        );
        setError('Error sending data to server. Please try again later.')
      });
  };

  const sendEmail = async (data:FormDataProps, toEmail:string) => {
    if(!toEmail){
      console.log('falta el correo del destinatario')
      return
    }

    console.log('destinatario', toEmail)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: toEmail.trim(), // Correo del destinatario
          subject: "Nuevo mensaje de contacto",
          text: `Correo: ${data.email}\nMensaje: ${data.message}`,
          html: `<p><strong>Correo:</strong> ${data.email}</p><p><strong>Mensaje:</strong> ${data.message}</p><p><strong>Nombre:</strong> ${data.fullName}</p>`,
        }),
      });

      const responseJson = await response.json();

      if(!responseJson.success){
        setError("Error sending email")
        return
      }

      setSuccess("The email has been send")
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  }

  const resetData = () => {
    setFormData(initialData);
    setTimeout(() => {
      setError(null)
      setSuccess(null)
    }, 4000)
  };

  const handleInput = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]:
      e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!recaptchaValue) {
      setError('Please verify that you are not a robot.')
      return;
    }

    try {
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recaptchaValue }),
      });

      const data: RecaptchaResponse = await response.json();

      if (data.success) {
        sendEmail(formData, "geniorama.info@gmail.com")
        sendWebhookData(formData);
      } else {
        alert("Error en la verificación de reCAPTCHA.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }

    resetData();
  };

  return (
    <form action="" className="font-extralight">
      <div className="flex flex-col">
        <label className="font-normal" htmlFor="">
          {tContact("full_name")}*
        </label>
        <input
          value={formData.fullName}
          required
          type="text"
          name="fullName"
          id=""
          onChange={(e) => handleInput(e)}
          className="bg-transparent border-b border-slate-500 focus:border-white outline-0 pb-2 text-sm"
        />
      </div>

      <div className="flex flex-col mt-8">
        <label className="font-normal" htmlFor="">
          {tContact("email")}*
        </label>
        <input
          value={formData.email}
          required
          type="email"
          name="email"
          id=""
          onChange={(e) => handleInput(e)}
          className="bg-transparent border-b border-slate-500 focus:border-white outline-0 pb-2 text-sm"
        />
      </div>

      <div className="flex flex-col mt-8">
        <label className="font-normal" htmlFor="">
          {tContact("whats_on_your_mind")} ({tContact("optional")})
        </label>
        <textarea
          value={formData.message}
          rows={5}
          name="message"
          id=""
          onChange={(e) => handleInput(e)}
          className="bg-transparent border-b border-slate-500 focus:border-white outline-0 pb-2 text-sm"
        ></textarea>
      </div>

      <div className="mt-5">
        <Recaptcha onChange={(value) => setRecaptchaValue(value)} />
      </div>

      <div className="mt-3 lg:flex items-center gap-5 justify-between">
        <div className="flex align-items-center mb-5 lg:mb-0">
          <input
            type="checkbox"
            checked={formData.privacy}
            onChange={(e) => handleInput(e)}
            name="privacy"
            id="privacy"
          />
          <label htmlFor="privacy" className="ml-2">
            {tContact("agree_to")}{" "}
            <Link target="_blank" className="underline" href={"#"}>
              {tContact("terms_and_conditions")}
            </Link>
          </label>
        </div>

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className={`${formData.privacy ? "bg-white" : "bg-slate-500 pointer-events-none"} text-black font-bold px-5 py-2 rounded-full w-full lg:w-auto`}
        >
          {tContact("send")}
        </button>
      </div>
      {success && (
        <div className="bg-white text-black p-1 mt-2 rounded-sm px-3">
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="bg-red-600 p-1 mt-2 rounded-sm px-3 text-white">
          <span>{error}</span>
        </div>
      )}
    </form>
  );
}
