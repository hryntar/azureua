import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['uk', 'en'];

export default getRequestConfig(async ({ locale }) => {
   if (!locales.includes(locale as any)) notFound();

   return {
      messages: {
         ...(await import(`/locales/${locale}/skeleton.json`)).default,
         ...(await import(`/locales/${locale}/content.json`)).default,
         // ...(await import(`/locales/${locale}/buttons.json`)).default,
      }
   };
});