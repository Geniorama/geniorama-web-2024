"use client"

import styles from "./NewsletterForm.module.css";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function NewsletterForm() {
  const tFooter = useTranslations('footer');
  const locale = useLocale();
  const initialData = {
    email: '',
    language: locale,
    section: 'newsletter'
  }

  const [formData, setFormData] = useState(initialData);
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
        alert(
          "Error al enviar datos al servidor. Por favor, inténtalo de nuevo más tarde."
        );
      });
  };

  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData({
      ...formData,
      email: value
    })
  };

  const resetData = () => {
    setFormData(initialData)
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!formData.email){
      setError('You must enter an email address')
      return
    }

    sendWebhookData(formData)
    setSuccess('¡Thanks for subscribing! Welcome Genius')
    
    resetData()
    setTimeout(() => {
      setSuccess(null)
      if(error){
        setError(null)
      }
    },5000)
    
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{width: '100%'}} action="">
      <div className={`${styles.formGroup}`}>
        <input value={formData.email} onChange={(e) => handleInput(e)} required className={`${styles.input} bg-transparent text-black`} type="email" name="" id="" placeholder="Email"/>
        <button className={`${styles.button}`} type="submit">{tFooter('send')}</button>
      </div>
      {success && (
        <div className="bg-white p-1 mt-2 rounded-sm px-3">
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="bg-red-600 p-1 mt-2 rounded-sm px-3 text-white">
          <span>{error}</span>
        </div>
      )}
    </form>
  )
}
