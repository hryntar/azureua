import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Navigation = ({ className }: { className?: string }) => {
   const t = useTranslations("Header");

   return (
      <nav>
         <ul className={`flex items-center gap-x-[60px] ${className}`}>
            <li>
               <Link href="/">{t("link_home")}</Link>
            </li>
            <li>
               <Link href="/about-us">{t("link_about-us")}</Link>
            </li>
            <li>
               <Link href="/calendar">{t("link_calendar")}</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
