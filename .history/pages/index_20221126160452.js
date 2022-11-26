import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";

const styles = {
  container: "",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        width={1920}
        height={1080}
        src={"/assets/home.jpg"}
        className={styles.homeImage}
        alt=""
      />
      <div className="my-5">
        <div className="p-4 w-full text-center space-y-3">
          <p className={styles.header}>CodesWear.com</p>
          <p className="font-semibold">
            Whatever You want, Do you want to Code why dont you just wear the
            Code
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
