import { useTranslations } from "next-intl";

const Banner = () => {
   const t = useTranslations("Index");

   return (
      <section className="py-[100px] bg-[#00bfff] flex flex-col items-center text-white">
         <h1 className="font-bold text-[48px]">{t("banner_title")}</h1>
         <p className="mt-3 font-semibold text-2xl">{t("banner_subtitle")}</p>
      </section>
   );
};

export default Banner;
