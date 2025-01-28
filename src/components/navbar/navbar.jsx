"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCategoryNameContext } from "@/context/category-name";
import { setUserLocale } from "@/services/locale";
import { motion } from "framer-motion";
import { Menu, User } from "lucide-react";
import { useLocale, useTranslations } from "next-intl"; // Import the translation hook
import Link from "next/link";
import { useState, useTransition } from "react";
import { BiBell } from "react-icons/bi";
import { PiHandbagSimple } from "react-icons/pi";
import TextBackground from "../ui/text-background";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import LanguageSwitcher from "../ui/custom-select";

const Navbar = () => {
  const menuItems = ["home", "categories", "aboutUs", "contactUs", "faqs"];

  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { categoryName, setCategoryName } = useCategoryNameContext();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  console.log(locale);

  const t = useTranslations("navbar"); // Use the translation hook for 'navbar' namespace

  const toggleLanguage = (value) => {
    startTransition(() => {
      setUserLocale(value);
      setCategoryName("");
    });
  };

  const languages = [
    {
      id: 1,
      title: "Arabic",
      value: "ar",
    },
    {
      id: 2,
      title: "English",
      value: "en",
    },
  ];

  return (
    <nav className="py-2 relative bg-secondary lg:space-y-10 h-32 lg:h-64 bg-[url('/bg.png')] bg-cover bg-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-between xl:gap-20 max-lg:w-full">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Menu items */}
          <div className="hidden md:flex gap-x-2 xl:gap-x-10">
            {menuItems.map((item) => (
              <Link
                href={"/"}
                key={item}
                className="relative space-y-1"
                onClick={() => setActiveTab(item)}
              >
                <span
                  className={`cursor-pointer text-md text-nowrap font-medium ${
                    activeTab === item ? "font-bold text-main" : "text-gray-600"
                  }`}
                >
                  {t(item)} {/* Translate menu item */}
                </span>
                {activeTab == item && (
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-main"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className="flex md:hidden">
            <button
              className="p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Right section: Icons and Language/Profile selectors */}
        <div className="items-center gap-x-7 hidden md:flex">
          <Link href={"#"} className="p-2 rounded-full hover:bg-gray-100">
            <Image
              src={"/shopping.svg"}
              width={100}
              height={100}
              className="size-5 xl:size-6 text-gray-600 hover:text-main"
              alt={"cart"}
            />
          </Link>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <BiBell className="size-5 xl:size-7 text-gray-600 hover:text-main" />
          </button>

          <LanguageSwitcher defaultValue={locale} options={languages} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center">
                <Image
                  src={"/user.svg"}
                  width={100}
                  height={100}
                  className="size-5 xl:size-6 text-gray-600 hover:text-main"
                  alt={"cart"}
                />
                <RiArrowDownSLine className="size-5  text-gray-600 hover:text-main" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 bg-white rounded-lg">
              <DropdownMenuLabel>{t("profile")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="text-center">
                <DropdownMenuItem className="">
                  <Link href="/profile" className="m-auto">
                    {t("profile")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile" className="m-auto">
                    {t("account")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile" className="m-auto">
                    {t("logOut")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* text background */}
      <TextBackground text={categoryName} />

      {/* Collapsible menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 left-0 right-0 text-center z-10 lg:hidden"
        >
          <div className="flex flex-col space-y-4 p-4 container bg-white shadow-md">
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer text-lg font-medium ${
                  activeTab === item ? "font-bold text-main" : "text-gray-600"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {t(item)} {/* Translate menu item */}
              </motion.div>
            ))}

            <motion.div
              className="flex  justify-center items-center gap-x-7"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={"#"} className="p-2 rounded-full hover:bg-gray-100">
                <Image
                  src={"/shopping.svg"}
                  width={100}
                  height={100}
                  className="size-5 xl:size-7 text-gray-600 hover:text-main"
                  alt={"cart"}
                />
              </Link>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <BiBell className="size-5 xl:size-7 text-gray-600 hover:text-main" />
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Image
                    src={"/user.svg"}
                    width={100}
                    height={100}
                    className="size-5 xl:size-6 text-gray-600 hover:text-main"
                    alt={"cart"}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-44 bg-white rounded-lg">
                  <DropdownMenuLabel>{t("profile")}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup className="text-center">
                    <DropdownMenuItem className="">
                      <Link href="/profile" className="m-auto">
                        {t("profile")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/profile" className="m-auto">
                        {t("account")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/profile" className="m-auto">
                        {t("logOut")}
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <LanguageSwitcher defaultValue={locale} options={languages} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
