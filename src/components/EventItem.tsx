import { useTranslations } from "next-intl";
import Image from "next/image";

const EventItem = ({ eventKey }: { eventKey: string }) => {
   const t = useTranslations("Events"); 

   return (
      <article className="flex justify-between gap-x-10">
         <Image src={t(`${eventKey}.imageURL`)} width={250} height={150} alt="Devops Event" />
         <div>
            <div className="flex justify-between items-center mb-5">
               <h3 className="font-semibold text-xl">{t(`${eventKey}.event_title`)}</h3>
               <time dateTime={t(`${eventKey}.date_time`)}>{t(`${eventKey}.date_time`)}</time>
            </div>
            <p>{t(`${eventKey}.description`)}</p>
         </div>
      </article>
   );
};

export default EventItem;
