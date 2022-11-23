import React from "react";
import Product from "../components/Product";

export const getServerSideProps = async () => {
  const response = await fetch(`http://localhost:3000/api/getProducts?category=Hoodies`);
  const data = await response.json();
  return {
    props: {
      data: Object.bind data,
    },
  };
};

export default function Hoodies({ data }) {
  return (
    <div>
      <section className="text-gray-400 bg-gray-50 body-font">
        <div className="container px-5 py-14 md:py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((product, index) => (
              <Product
                key={index}
                image={product.img}
                title={product.title}
                category={product.category}
                color={product.color}
                slug={product.slug}
                size={product.size}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
