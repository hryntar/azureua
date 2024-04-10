import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import { NextIntlClientProvider, useMessages } from "next-intl";

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
         <body className={inter.className}> 
            <NextIntlClientProvider messages={messages}> 
                  <Header />
                  {children} 
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
