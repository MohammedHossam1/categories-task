"use client";

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";



export default function CustomBreadcrumb({ route, subs = false, number = 1 }) {
   const locale = useLocale();
   const t = useTranslations("links");
   let [, ...pathnames] = usePathname().split('/');
   pathnames = subs ? pathnames.slice(0, -number) : pathnames;


   return (
      <div className=" px-4 py-6">
         <div className="container">
            <Breadcrumb>
               <BreadcrumbList className="text-black">
                  <BreadcrumbItem>
                     <BreadcrumbLink className="text-sm lg:text-lg" href="/">{locale == "ar" ? "الصفحة الرئيسية" : "home"}</BreadcrumbLink>
                  </BreadcrumbItem>
                  {
                     pathnames.map((path, index) => (
                        <div key={index} className="flex items-center gap-1">
                           <BreadcrumbSeparator>
                              {locale == "ar" ? '\\' :  '/'
                              }
                           </BreadcrumbSeparator>
                           <BreadcrumbItem >
                              <BreadcrumbLink className={`text-sm lg:text-lg ${index ? "text-gray-400" : ""}`}>
                                 {t(path)}
                              </BreadcrumbLink>
                           </BreadcrumbItem>
                        </div>
                     ))
                  }
                  {
                     route && <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                           <BreadcrumbLink>{route}</BreadcrumbLink>
                        </BreadcrumbItem>
                     </>
                  }
               </BreadcrumbList>
            </Breadcrumb>
         </div>
      </div>

   );
}
