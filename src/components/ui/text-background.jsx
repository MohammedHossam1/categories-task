'use client'
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
export default function TextBackground({ text }) {
  const locale = useLocale();
  const t = useTranslations("links");
  let [, ...pathnames] = usePathname().split('/');
  const defaultPath = pathnames[0] == '' ? 'home' : pathnames[0];
  return (
    <div className="lg:text-2xl text-base text-bold  text-center ">
      <div className="relative">
        <h2 className="text-3xl text-nowrap lg:text-7xl opacity-5 font-bold ">{text || t(defaultPath)}</h2>
        <h2 className={`absolute  text-nowrap top-1/2 ${locale == 'ar' ? 'end-1/2' : 'start-1/2'} -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-5xl `}>
          {text || t(defaultPath)}
        </h2>
      </div>
    </div >
  );
}
