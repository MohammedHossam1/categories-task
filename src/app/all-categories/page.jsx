'use client'
import CategoriesCarousel from "@/components/categories-carousel/categories-carousel";
import CategoriesUi from "@/components/categories-ui/categories-ui";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { useCategoryNameContext } from "@/context/category-name";
export default  function page() {
  let categories = [];
  const categoriesCards = [
    {
      image: "/bottles.png",
      title: "MD STAY FIT Unisex Duffle Bag Microfiber MD-1250",
      description:
        "Grab attention and drive sales with eye-catching outdoor signage. Choose from a ",
      price: 49.99,
      rating: 3.5,
      numberOfRatings: 219,
    },
    {
      image: "/bottles.png",
      title: "MD STAY FIT Unisex Duffle Bag Microfiber MD-1250",
      description:
        "Grab attention and drive sales with eye-catching outdoor signage. Choose from a ",
      price: 49.99,
      rating: 3.5,
      numberOfRatings: 219,
    },
    {
      image: "/bottles.png",
      title: "MD STAY FIT Unisex Duffle Bag Microfiber MD-1250",
      description:
        "Grab attention and drive sales with eye-catching outdoor signage. Choose from a ",
      price: 49.99,
      rating: 3.5,
      numberOfRatings: 219,
    },
    {
      image: "/bottles.png",
      title: "Smart Watch",
      description:
        "Grab attention and drive sales with eye-catching outdoor signage. Choose from a ",
      price: 149.99,
      rating: 4.7,
      numberOfRatings: 340,
    },
    {
      image: "/bottles.png",
      title: "Gaming Mouse",
      description:
        "Grab attention and drive sales with eye-catching outdoor signage. Choose from a ",
      price: 29.99,
      rating: 4.6,
      discount: "25% OFF",
      numberOfRatings: 125,
    },
    {
      image: "/bottles.png",
      title: "4K Monitor",
      description:
        "Grab attention and drive sales with eye-catching outdoor signage. Choose from a ",
      price: 399.99,
      rating: 4.8,
      numberOfRatings: 89,
    },
    {
      image: "/bottles.png",
      title: "Bluetooth Speaker",
      description:
        "Grab attention and drive sales with eye-catching outdoor signage. Choose from a ",
      price: 127,
      rating: 4.4,
      discount: "25% OFF",
      numberOfRatings: 412,
    },
    {
      image: "/bottles.png",
      title: "Bluetooth Speaker",
      description:
        "Grab attention and drive sales with eye-catching outdoor signage. Choose from a ",
      price: 59.99,
      rating: 4.4,
      discount: "25% OFF",
      numberOfRatings: 412,
      oldPrice: 300,
    },
  ];
 const { categoryName} = useCategoryNameContext()

  return (
    <>
      <CustomBreadcrumb route={categoryName} />
      <div className="container ">
        <CategoriesCarousel />
        <CategoriesUi categoriesData={categoriesCards} categories={categories} />
      </div>
    </>
  );
}
