"use client"

import ContactForm from "@/components/ContactForm/ContactForm";
import { useTranslations, useLocale } from "next-intl";

export default function WorkWithUs() {
  const tContact = useTranslations('contact')
  const locale = useLocale()

  return (
    <section className="pb-20 md:py-56 text-white">
      <div className="container">
        <div className="px-3 md:max-w-4xl md:mx-auto">
          <div className="relative">
            <span style={{left: '-50px', fontFamily: 'Poppins'}} className="font-light text-8xl absolute top-3">/</span>
            <p className={`font-light text-4xl leading-none ${locale === 'es' ? 'max-w-60': 'max-w-40'}`}>
                {tContact('title_form')}
            </p>
          </div>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
