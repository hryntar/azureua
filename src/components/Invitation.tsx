import { useTranslations } from "next-intl";
import Image from "next/image";

const Invitation = () => {
   const t = useTranslations("Invitation");

   return (
      <section className=" bg-[#00bfff]">
         <div className="container mx-auto px-3 py-10">
            <div className="flex justify-between items-center gap-10">
               <div className="flex flex-col gap-5 text-white text-lg">
                  <p className="max-w-2xl">{t("text1")}</p>
                  <p className="max-w-2xl">{t("text2")}</p>
               </div>
               <div> 
                  <Image className="rounded-md" src="/invitation.jpg" alt="Azure Lecture" width={500} height={300} />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Invitation;
