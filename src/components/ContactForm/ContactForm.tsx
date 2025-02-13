'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const tContact = useTranslations('contact')

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    privacy: false
  })

  const sendWebhookData = async (formData:any) => {
    const webhoook_url = "https://hook.us1.make.com/q60qnqkoin0s5i5h9v4x292yaww0i2n1"
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


  const handleInput = (e:any) => {
    setFormData({...formData, [e.target.name]:(e.target.type === "checkbox" ? e.target.checked : e.target.value)})
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    sendWebhookData(formData);

    setFormData({
        fullName: '',
        email: '',
        message: '',
        privacy: false
    })
  }

  return (
    <form action="" className='font-extralight'>
        <div className='flex flex-col'>
            <label className='font-normal' htmlFor="" >{tContact('full_name')}*</label>
            <input value={formData.fullName} required type="text" name="fullName" id="" onChange={(e) => handleInput(e)} className='bg-transparent border-b border-slate-500 focus:border-white outline-0 pb-2 text-sm' />
        </div>

        <div className='flex flex-col mt-8'>
            <label className='font-normal' htmlFor="" >{tContact('email')}*</label>
            <input value={formData.email} required type="email" name="email" id="" onChange={(e) => handleInput(e)} className='bg-transparent border-b border-slate-500 focus:border-white outline-0 pb-2 text-sm' />
        </div>

        <div className='flex flex-col mt-8'>
            <label className='font-normal' htmlFor="" >{tContact('whats_on_your_mind')} ({tContact('optional')})</label>
            <textarea value={formData.message} rows={5} name="message" id="" onChange={(e) => handleInput(e)} className='bg-transparent border-b border-slate-500 focus:border-white outline-0 pb-2 text-sm'></textarea>
        </div>

        <div className='mt-3 flex items-center gap-5 justify-between'>
            <div className='flex align-items-center'>
                <input type="checkbox" checked={formData.privacy} onChange={(e) => handleInput(e)} name="privacy" id="privacy" />
                <label htmlFor="privacy" className='ml-2 text-xs'>{tContact('agree_to')} <Link target='_blank' className='underline' href={"#"}>{tContact('terms_and_conditions')}</Link></label>
            </div>
            
            <button type="submit" onClick={(e) => handleSubmit(e)} className={`${formData.privacy ? 'bg-white' : 'bg-slate-500 pointer-events-none'} text-black font-bold px-3 rounded-full`}>{tContact('send')}</button>
        </div>
    </form>
  )
}
