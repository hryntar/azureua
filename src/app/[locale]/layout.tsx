import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Azure UA",
   description: "Microsoft Azure Ukrainian Community",
};

export default function RootLayout({
   children,
   params: { locale },
}: Readonly<{
   children: React.ReactNode;
   params: {
      locale: string;
   };
}>) {
   const messages = useMessages();
   return (
      <html lang={locale}>
         <body className={inter.className + ' min-h-[100vh] m-0 flex flex-col'}>
            <NextIntlClientProvider messages={messages}>
               <Header />
               <main className="flex-1 flex-grow">
                  {children} 
               </main>
               <Footer />
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
