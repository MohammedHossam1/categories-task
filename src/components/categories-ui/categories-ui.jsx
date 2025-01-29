"use client";
import CategoriesFilter from "@/components/filter/filter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import CategoryCard from "@/components/ui/category-card";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { SlidersHorizontal } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function CategoriesUi({ categoriesData }) {
  const t = useTranslations("categories");
  const locale = useLocale();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(categoriesData.length / itemsPerPage);

  const currentItems = categoriesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="container my-2 lg:mt-20 xl:mt-0">
      <div className="py-10 xl:pt-32 my-5 ">
        <div className="lg:grid grid-cols-12   gap-x-10">
          <div className=" lg:col-span-3 max-lg:hidden  ">
            <div className="flex mb-2 lg:mb-5 items-center  justify-between">
              <h2 className="text-xl xl:text-3xl font-medium text-nowrap">
                {t("filter_option")}
              </h2>
              <span className="text-discountColor text-nowrap text-sm font-semibold underline cursor-pointer">
                {t("clear_all")}
              </span>
            </div>
            <CategoriesFilter />
          </div>
          <div className=" lg:col-span-9  text-black">
            <div className="flex mb-2 lg:mb-5 max-lg:my-4 max-lg:justify-between items-center ">
              <h2 className="text-sm lg:text-xl text-[#545454] font-medium text-nowrap">
                {t("showing_results", {
                  start: (currentPage - 1) * itemsPerPage + 1,
                  end: Math.min(
                    currentPage * itemsPerPage,
                    categoriesData.length
                  ),
                  total: categoriesData.length,
                })}
              </h2>

              <Sheet className="lg:hidden">
                <SheetTrigger className="t rounded-none flex items-center flex-col justify-center">
                  <div className="lg:hidden bg-secondary p-2 rounded-lg ">
                    <SlidersHorizontal className="size-4 text-main" />
                  </div>
                </SheetTrigger>
                <SheetContent className="z-[101] bg-secondary w-screen">
                  <DialogContent className="">
                    <DialogTitle className="text-2xl font-medium ">
                      {t("filter_options")}
                    </DialogTitle>
                  </DialogContent>
                  <div className="">
                    <div className="flex mb-2 items-center gap-x-16">
                      <span className="text-discountColor max-lg:hidden text-nowrap font-bold underline cursor-pointer">
                        {t("clear_all")}
                      </span>
                    </div>
                    <div className="h-screen pb-44 scrollbar-hide overflow-auto">
                      <CategoriesFilter />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex flex-wrap gap-3  ">
              {currentItems.map((item, index) => {
                return (
                  <div
                    className="max-lg:w-[48%] lg:flex-basis h-full "
                    key={index}
                  >
                    <CategoryCard
                      image={item.image}
                      description={item.description}
                      price={item.price}
                      rating={item.rating}
                      title={item.title}
                      discount={item?.discount}
                      numberOfRatings={item.numberOfRatings}
                      oldPrice={item?.oldPrice}
                    />
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex  justify-center items-center my-10 space-x-2">
              <button
                className="size-9 border hover:bg-gray-200 transition-all duration-500 flex items-center justify-center rounded-lg disabled:opacity-50"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                {locale == "ar" ? (
                  <MdKeyboardDoubleArrowRight />
                ) : (
                  <MdKeyboardDoubleArrowLeft />
                )}
              </button>
              <button
                className="size-9 border rounded-lg  hover:bg-gray-200 transition-all duration-500 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`size-9 border rounded-lg ${
                    currentPage === i + 1
                      ? "bg-main text-white"
                      : "hover:bg-gray-200 transition-all duration-500"
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              {totalPages > 3 ? (
                <>
                  <span className="size-9">...</span>
                  <button
                    className={`px-4 py-2 border rounded-lg ${
                      currentPage === totalPages
                        ? "bg-main text-white"
                        : "hover:bg-gray-200 transition-all duration-500"
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {totalPages}
                  </button>
                </>
              ) : (
                ""
              )}
              <button
                className="size-9 border  hover:bg-gray-200 transition-all duration-500 rounded-lg disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
              <button
                className="size-9 border hover:bg-gray-200 transition-all duration-500 flex items-center justify-center rounded-lg disabled:opacity-50"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                {locale == "ar" ? (
                  <MdKeyboardDoubleArrowLeft />
                ) : (
                  <MdKeyboardDoubleArrowRight />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
