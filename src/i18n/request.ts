import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: {
      common: (await import(`../../locales/${locale}/common.json`)).default,
      footer: (await import(`../../locales/${locale}/footer.json`)).default,
      homepage: (await import(`../../locales/${locale}/homepage.json`)).default,
      about: (await import(`../../locales/${locale}/about.json`)).default,
    }
  };
});