"use client";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import CategoriesFilter from "@/components/filter/filter";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "@/components/ui/category-card";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useCategoryNameContext } from "@/context/category-name";

export default function CategoriesUi({ categoriesData, categories }) {
  const t = useTranslations('categories');

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const { categoryName, setCategoryName } = useCategoryNameContext()
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
    <div>
      <CustomBreadcrumb route={categoryName} />
      <div className="container my-2">
        {/* categories slider */}
        {categories ? (
          <div className="xl:pb-20">
            <Carousel className="w-full" dir="ltr">
              <CarouselContent >
                {categories.map((category, index) => (
                  <CarouselItem
                    onClick={() => setCategoryName(category?.name)}
                    key={index}
                    className=" basis-1/3 md:basis-1/4 lg:basis-[calc(100%/7)]"
                  >
                    <Card className="shadow-none border-none">

                      <CardContent className="bg-light rounded-3xl flex flex-col items-center justify-between ">
                        <div className=" p-2">
                          <Image
                            src={category.image}
                            width={300}
                            height={300}
                            alt={category.name}
                            className="w-full h-20 xl:h-32 object-contain"
                          />
                        </div>
                      </CardContent>
                      <h2 className="p-2 text-sm text-nowrap lg:text-lg font-bold w-full line-clamp-1 text-center">
                        {category.name}
                      </h2>

                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ) : (
          <FaSpinner className="text-2xl animate-spin" />
        )}

        <div className="py-10 my-5 ">
          <div className="lg:grid grid-cols-12   gap-x-10">
            <div className=" lg:col-span-3 max-lg:hidden  ">
              <div className="flex mb-2 lg:mb-5 items-center gap-x-16">
                <h2 className="text-3xl font-medium text-nowrap">
                  {t("filter_option")}
                </h2>
                <span className="text-discountColor text-nowrap text-sm font-semibold underline cursor-pointer">
                  {t("clear_all")}
                </span>
              </div>
              <CategoriesFilter />
            </div>
            <div className=" lg:col-span-9  text-black">
              <div className="flex mb-2 lg:mb-5 max-lg:my-4 max-lg:justify-between items-center gap-x-16">
                <h2 className="text-sm lg:text-xl text-[#545454] font-medium text-nowrap">
                  {t("showing_results", {
                    start: (currentPage - 1) * itemsPerPage + 1,
                    end: Math.min(currentPage * itemsPerPage, categoriesData.length),
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
                        {/* <h2 className="text-3xl font-medium text-nowrap">
                          Filter Option
                        </h2> */}
                        <span className="text-discountColor max-lg:hidden text-nowrap font-bold underline cursor-pointer">
                          {t("clear_all")}
                        </span>
                      </div>

                      <CategoriesFilter />
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
                  <MdKeyboardDoubleArrowLeft />
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
                    className={`size-9 border rounded-lg ${currentPage === i + 1
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
                      className={`px-4 py-2 border rounded-lg ${currentPage === totalPages
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
                  <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
