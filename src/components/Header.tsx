import Image from "next/image";
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

const Header = () => {
   return (
      <header className="py-5 flex items-center justify-between px-3 mx-auto container">
            <Image width={50} height={50} src="/azure-logo.png" alt="Azure" />
            <nav>
               <ul className="flex items-center gap-x-[60px]">
                  <li>
                     <Link href="/">Головна</Link>
                  </li>
                  <li>
                     <Link href="/about-us">Про нас</Link>
                  </li>
                  <li>
                     <Link href="/calendar">Календар подій</Link>
                  </li>
               </ul>
            </nav>
         <Select defaultValue="ua">
            <SelectTrigger className="w-[130px]">
               <SelectValue placeholder="Оберіть мову" />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  <SelectLabel>Оберіть мову</SelectLabel>
                  <SelectItem value="ua">Українська</SelectItem>
                  <SelectItem value="en">English</SelectItem> 
               </SelectGroup>
            </SelectContent>
         </Select>
      </header>
   );
};

export default Header;
