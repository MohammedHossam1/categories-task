"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "next-intl";
import Image from "next/image";
import { fetchData } from "../shared/fetch-data";
import { useCategoryNameContext } from "@/context/category-name";
import { useEffect, useState, useRef } from "react";

export default function CategoriesCarousel() {
  const { setCategoryName } = useCategoryNameContext();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastPage, setLastPage] = useState(1);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const isFirstRender = useRef(true);
  const locale = useLocale();

  const categoriesFetch = async (page) => {
    setIsLoading(true);
    const res = await fetchData({
      url: `/categories/main?page=${page}`,
      lang: locale,
    });

    if (res.status_code === 200) {
      setLastPage(res?.data?.meta.last_page);
      setCategories((prev) => (page === 1 ? res.data.data : [...prev, ...res.data.data]));
    } else if (res.error) {
      alert("Error fetching categories");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setCategories([]); 
    setCurrentPage(1);
    categoriesFetch(1);
  }, [locale]);

  useEffect(() => {
    if (currentPage > 1) {
      categoriesFetch(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    if (!canScrollNext && currentPage < lastPage) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      setCurrentPage((prev) => prev + 1);
    }
  }, [canScrollNext]);

  if (isLoading && categories.length === 0)
    return <div className="h-full py-10 text-center text-main">Loading..</div>;

  return (
    <Carousel className="w-full py-2" dir="ltr">
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem
            onClick={() => setCategoryName(category?.name)}
            key={index}
            className="basis-1/3 md:basis-1/4 lg:basis-[calc(100%/7)]"
          >
            <Card className="shadow-none border-none">
              <CardContent className="bg-light rounded-3xl flex flex-col items-center justify-between">
                <div className="p-2">
                  <Image
                    src={category.image}
                    width={300}
                    height={300}
                    alt={category.name}
                    className="w-full h-20 xl:h-32 object-contain"
                  />
                </div>
              </CardContent>
              <h2 className="p-2 text-[14px] lg:text-lg font-bold w-full  text-center">
                {category.name}
              </h2>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext setCanScrollNext={setCanScrollNext} />
    </Carousel>
  );
}
