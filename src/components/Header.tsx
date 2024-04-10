"use client";
import Image from "next/image";
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from 'next/navigation';

const Header = () => {
   const t = useTranslations("Header");
   const [isPending, startTransition] = useTransition();
   const router = useRouter();
   const localActive = useLocale();
   const [localeVal, setLocaleVal] = useState(localActive);

   useEffect(() => {
      startTransition(() => {
         router.replace(`/${localeVal}`);
      });
   }, [localeVal, router]);

   return (
      <header className="py-5 flex items-center justify-between px-3 mx-auto container">
         <Image width={100} height={100} src="/azure-logo.png" alt="Azure" />
         <nav>
            <ul className="flex items-center gap-x-[60px]">
               <li>
                  <Link href="/">{t("link_home")}</Link>
               </li>
               <li>
                  <Link href={`${localActive}/about-us`}>{t("link_about-us")}</Link>
               </li>
               <li>
                  <Link href={`${localActive}/calendar`}>{t("link_calendar")}</Link>
               </li>
            </ul>
         </nav>
         <Select disabled={isPending} defaultValue={localActive} value={localeVal} onValueChange={(val) => setLocaleVal(val)}>
            <SelectTrigger className="w-[130px]">
               <SelectValue placeholder={t("lang_choose")} />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  <SelectLabel>{t("lang_choose")}</SelectLabel>
                  <SelectItem value="uk">Українська</SelectItem>
                  <SelectItem value="en">English</SelectItem>
               </SelectGroup>
            </SelectContent>
         </Select>
      </header>
   );
};

export default Header;
