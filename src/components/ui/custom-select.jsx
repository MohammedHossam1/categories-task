import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { setUserLocale } from "@/services/locale";
import { useCategoryNameContext } from "@/context/category-name";
import { RiArrowDownSLine } from "react-icons/ri";

const LanguageSwitcher = ({ options, onChange, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || "");
  const { setCategoryName } = useCategoryNameContext();
  const [isPending, startTransition] = useTransition();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    startTransition(() => {
      setUserLocale(value);
      setCategoryName("");
    });
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 flex items-center text-black "
      >
        {selected || "Select an Option"}
        <RiArrowDownSLine className="size-5  text-gray-600 hover:text-main" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-10 mt-2 w-20 xl:w-32 bg-white text-black rounded-lg shadow-lg"
        >
          <div
            className="absolute top-[-15px] start-6 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-white border-r-[10px] border-r-transparent"
          ></div>

          <ul className="py-2 text-balck text-start">
            {options.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(item.value)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
