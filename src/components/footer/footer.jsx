'use client';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t text-gray-800 pt-10">
      <div className="container mx-auto px-6">
        <Image
          src="/logo.png"
          alt="NWAA Logo"
          width={300}
          height={400}
          className="mb-4 w-20"
        />
        <div className="grid grid-cols-12  gap-6">
          {/* About Us Section */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-semibold lg:text-2xl mb-4">{t("aboutUs")}</h3>
            <p className="text-sm text-gray-600 leading-6 lg:w-3/4">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam in eos qui consequatur ab .Soluta dolor quae Ipsam in eos quconsequatur ab cum maxime.Soluta dolor quae                 </p>
          </div>
          {/* Contact Us Section */}
          <div className="col-span-12 md:col-span-3 max-lg:order-4">
            <h3 className="font-semibold lg:text-2xl mb-4">{t("contactUs")}</h3>
            <ul className="space-y-1">
              <li className="text-sm flex items-center">
                <FaPhoneAlt />
                <span className="ml-2">{t("phone")}</span>
              </li>
              <li className="text-sm flex items-center">
                <SiGmail />
                <span className="ml-2">{t("email")}</span>
              </li>
              <li className="text-sm flex items-center">
                <FaLocationDot />
                <span className="ml-2">{t("address")}</span>
              </li>
            </ul>
          </div>

          {/* Let Us Help Section */}
          <div className="col-span-6 md:col-span-3">
            <h3 className="font-semibold lg:text-2xl mb-4">{t("letUsHelp")}</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">{t("myAccount")}</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">{t("faqs")}</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">{t("contactSupport")}</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">{t("categories")}</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">{t("allProducts")}</a>
              </li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div className="col-span-6 md:col-span-2 ">
            <h3 className="font-semibold lg:text-2xl mb-4">{t("ourCompany")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">{t("aboutUs")}</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">{t("ourPrivacy")}</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">{t("termsAndConditions")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8">
        <div className=" py-6 container flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>{t("copyright")}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-main hover:text-blue-800 transition-colors text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-main hover:text-blue-600 transition-colors text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-main hover:text-pink-800 transition-colors text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-main hover:text-blue-700 transition-colors text-lg">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-main hover:text-blue-700 transition-colors text-lg">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
