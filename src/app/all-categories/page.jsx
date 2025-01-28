import CategoriesUi from "@/components/categories-ui/categories-ui";
import { fetchData } from "@/components/shared/fetch-data";
import { getLocale } from "next-intl/server";
export default async function page() {
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
  const locale = await getLocale()
  const res = await fetchData({ url: "/categories/main", lang: locale });
  if (res.status_code == 200) {
    categories = res?.data?.data
  } else if (res.error) {
    alert('error')
  }

  return (
    <CategoriesUi categoriesData={categoriesCards} categories={categories} />
  );
}
