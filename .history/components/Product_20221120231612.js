import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product({
  image,
  title,
  category,
  colors,
  slug,
  size,
  price,
}) {
  return (
    <Link
      href={`/products/${slug}`}
      className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"
    >
      <a className="block relative rounded bg-white shadow-sm overflow-hidden">
        <Image
          width={1980}
          height={1080}
          alt="ecommerce"
          className="h-64 object-contain"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-black title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">${price}</p>
        <div className="flex items-center">
          {size.map((size, index) => (
            <p key={index} className="mr-1 w-fit px-1 border border-gray-600">
              {size}
            </p>
          ))}
        </div>
        <div className="flex items-center">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`mr-1 my-2 rounded-full border border-gray-500 w-6 h-6`}
            ></button>
          ))}
        </div>
      </div>
    </Link>
  );
}
