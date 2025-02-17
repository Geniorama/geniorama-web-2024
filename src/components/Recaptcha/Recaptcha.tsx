// components/Recaptcha.tsx
"use client"

import ReCAPTCHA from "react-google-recaptcha";
import { useLocale } from "next-intl";

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

const Recaptcha = ({ onChange }: RecaptchaProps) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const locale = useLocale()

  return (
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onChange}
      theme="dark"
      hl={locale}
    />
  );
};

export default Recaptcha;