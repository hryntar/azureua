"use client";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import Navigation from "./Navigation";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
   const t = useTranslations("Header");
   const [isPending, startTransition] = useTransition();
   const router = useRouter();
   const localActive = useLocale();
   const pathname = usePathname();
   const [localeVal, setLocaleVal] = useState(localActive);

   useEffect(() => {
      startTransition(() => {
         const currentPath = pathname.split("/").slice(2).join("/");
         router.replace(`/${localeVal}/${currentPath}`);
      });
   }, [localeVal, router, localActive, pathname]);

   return (
      <header className="py-5 flex items-center justify-between px-3 mx-auto container">
         <Image width={100} height={100} src="/azure-logo.png" alt="Azure" />
         <Navigation />
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
