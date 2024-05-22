import { useTranslations } from "next-intl";
import { Button } from "./ui/button";


const Banner = () => {
   const t = useTranslations("Index");
   // const t_b = useTranslations("Buttons");

   return (
      <section className="py-[100px] bg-[#00bfff] flex flex-col items-center text-white">
         <h1 className="font-bold text-[48px]">{t("banner_title")}</h1>
         <p className="mt-3 font-semibold text-2xl">{t("banner_subtitle")}</p>
         {/* <Button>{t_b("call_to_action")}</Button> */}
      </section>
   );
}; 

export default Banner;