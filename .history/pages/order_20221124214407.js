import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderedProduct from "../components/OrderedProduct";
import { clearCart, selectBasket, selectBasketTotal } from "../redux/cart";

const styles = {
  headings: "flex flex-items w-full justify-between p-2 text-pink-500 text-lg",
};

export const getServerSideProps = async (context) => {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_ID);
  }
};

const Headings = () => (
  <div className={styles.headings}>
    <div>Description</div>
    <div>Quantity</div>
    <div>Price</div>
  </div>
);

export default function Order() {
  const basket = useSelector(selectBasket);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
    if (router.query.session === "succeeded") {
      dispatch(clearCart());
    }
    if (!router.query.session) {
      router.push("/");
    }
  }, [dispatch, router]);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 space-y-3">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Codeswear
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id : #8877
            </h1>
            <Headings />
            {basket.map((item, index) => (
              <OrderedProduct key={index} item={item} />
            ))}
            <div className="flex items-center my-5">
              <span className="title-font font-semibold text-xl text-gray-900">
                Subtotal:
                <span className="text-base text-red-500 ml-4">$</span>
                <span className="font-semibold">{basketTotal}</span>
              </span>
              <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                Track Order
              </button>
            </div>
          </div>
          <Image
            width={1920}
            height={1080}
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
}
