import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";

const CategoriesFilter = () => {
  const t = useTranslations('filter');

  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [size, setSize] = useState("");
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });

  const materials = [
    "Wood",
    "Leather",
    "Fabric",
    "Plastic",
    "Rubber",
    "Felt",
    "Wool",
  ];
  const colors = [
    "#788737",
    "#92C9FF",
    "#2FE900",
    "#1A510D",
    "#CB1313",
    "#BF007C",
    "#C9D16C",
    "#020202",
    "#B55701",
    "#6686A7",
  ];

  const handleMaterialChange = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((item) => item !== material)
        : [...prev, material]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };

  return (
    <Accordion type="multiple" className="space-y-4 ">
      <AccordionItem value="materials" className="  ">
        <AccordionTrigger className="rounded-2xl px-3 text-xl mb-1 lg:bg-light text-[#333333]">
          {t("materials")}

        </AccordionTrigger>
        <AccordionContent className="p-2 pb-5 space-y-2 ">
          {materials.map((material) => (
            <div key={material} className="flex items-center gap-2">
              <Checkbox
                id={material}
                checked={selectedMaterials.includes(material)}
                className={`rounded-lg shadow-none size-6 border-main  ${selectedMaterials.includes(material)
                  ? "bg-main text-white "
                  : ""
                  }`}
                onCheckedChange={() => handleMaterialChange(material)}
              />
              <label htmlFor={material} className="cursor-pointer text-base">
                {material}
              </label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="colors">
        <AccordionTrigger className="rounded-2xl px-3 text-xl mb-1 lg:bg-light text-[#333333]">
          {t("colors")}

        </AccordionTrigger>
        <AccordionContent className="p-2 pb-5 space-y-2 ">
          <div className="flex flex-wrap items-center gap-2">
            {colors.map((color) => (
              <div
                key={color}
                className={`size-9 rounded-full cursor-pointer ${selectedColors.includes(color)
                  ? " outline-2 outline-dotted border-black"
                  : ""
                  }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="size">
        <AccordionTrigger className="rounded-2xl px-3 text-xl mb-1 lg:bg-light text-[#333333]">
          {t("size")}

        </AccordionTrigger>
        <AccordionContent className="p-2 pb-5 space-y-2 ">
          <Input
            type="text"
            className="bg-white py-7 "
            placeholder="Enter size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="price">
        <AccordionTrigger className="rounded-2xl px-3 text-xl mb-1 lg:bg-light text-[#333333]">
          {t("price")}

        </AccordionTrigger>
        <AccordionContent className="p-2 pb-5 space-y-2 ">
          <div className="flex items-center gap-2">
            <div className="space-y-1">
              <label htmlFor="" className="text-base text-[#545454]">
                {t("from")}

              </label>
              <Input
                type="number"
                value={priceRange.from}
                className="py-6 rounded-xl bg-white"
                onChange={(e) =>
                  setPriceRange((prev) => ({ ...prev, from: e.target.value }))
                }
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="" className="text-base text-[#545454]">
                {t("to")}

              </label>
              <Input
                type="number"
                value={priceRange.to}
                className="py-6 rounded-xl bg-white border"
                onChange={(e) =>
                  setPriceRange((prev) => ({ ...prev, to: e.target.value }))
                }
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <div className="max-lg:fixed inset-x-0 bottom-0 max-lg:py-2 max-lg:shadow max-lg:rounded-t-xl max-lg:bg-white">
        <div className="mt-4 flex gap-2 max-lg:container ">
          <Button className="btn-outline-main lg:hidden !py-6">
            {t("clear_all")}
          </Button>
          <Button className="btn-main !py-6">{t("apply")} </Button>
        </div>
      </div>
    </Accordion>
  );
};

export default CategoriesFilter;
