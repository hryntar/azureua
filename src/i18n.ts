import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['uk', 'en'];
const fullLocales: { [key: string]: string } = {
   'uk': 'uk-UA',
   'en': 'en-US'
};

export default getRequestConfig(async ({ locale }) => {
   if (!locales.includes(locale as any)) notFound();

   const fullLocale = fullLocales[locale];

   return {
      messages: (await import(`../messages/${fullLocale}.json`)).default
   };
});