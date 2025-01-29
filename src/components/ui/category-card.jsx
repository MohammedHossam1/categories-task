import Link from "next/link";
import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { Button } from "./button";

export default function CategoryCard({
  image,
  title,
  description,
  price,
  rating,
  numberOfRatings,
  discount,
  oldPrice,
}) {
  return (
    <div className=" group relative  rounded-xl  h-full overflow-hidden bg-white">
      {/* Image */}
      <div className="relative border  lg:pt-6 overflow-hidden  p-2 rounded-3xl group-hover:bg-secondary duration-300 transition-all">
        <img src={image} alt={title} className="w-full h-32 group-hover:translate-y-0 max-lg:translate-y-7 lg:h-56 object-contain duration-300 transition-all" />
        <Button className="btn-main text-nowrap translate-y-20 group-hover:translate-y-0 duration-300 transition-all">Add to cart 
          <FaCartArrowDown className="max-lg:hidden"/>
        
        </Button>
      </div>

      {/* discount */}
      {discount ? (
        <div className="absolute top-2 end-2 lg:end-5 lg:top-5 p-1 px-2 lg:p-2 lg:px-4 text-[10px] leading-4 bg-discountColor lg:font-[600] text-white rounded-[10px]">
          {discount}
        </div>
      ) : (
        ""
      )}

      {/* Content */}
      <div className="p-2 space-y-2">
        {/* Rating */}
        <div className="flex items-center  gap-2 mt-2">
          {/* Stars */}
          <div className="flex lg:gap-x-1">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                size={20}
                className={`max-lg:size-4 ${
                  index < Math.round(rating) ? "text-main" : "text-main/40"
                }`}
              />
            ))}
          </div>
          {/* Rating number and total ratings */}
          <span className="text-sm text-nowrap lg:text-lg text-black">
            {rating}{" "}
            <span className="text-[#545454] text-sm"> ({numberOfRatings})</span>
          </span>
        </div>
        {/* Title */}
        <Link href={""} className="hover:text-main text-sm lg:text-base font-[600] text-gray-800 line-clamp-2 lg:h-12">
          {title}
        </Link>

        {/* Description */}
        <p className="mt-2 text-[10px]  text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="mt-4 text-base lg:text-xl font-semibold text-[#020202]">
          ${price}{" "}
          {oldPrice ? <span className="line-through mx-1 font-medium text-base text-[#8A8A8A]">${oldPrice}</span> : ""}
        </div>
      </div>
    </div>
  );
}
