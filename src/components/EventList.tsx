import { useTranslations } from "next-intl";
import EventItem from "./EventItem";

const EventList = () => {
   const t = useTranslations("Events");
   const keys = ["event1", "event2", "event3"] as const;

   return (
      <section className="container mx-auto px-3 py-[60px]">
         <h2 className="font-semibold text-2xl mb-10">{t("title")}</h2>
         <ul className="flex flex-col gap-y-10">
            {keys.map((key) => (
               <li key={key}>
                  <EventItem eventKey={key} />
               </li>
            ))}
         </ul>
      </section>
   );
};

export default EventList;
