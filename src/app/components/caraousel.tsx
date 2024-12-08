import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

export default function Carousel() {
  return (
    <div className="relative w-full h-[30vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] flex items-center justify-center pt-35 mt-10" >
      <div className="absolute w-full h-[100vh] pt-40 mt-4 ">
        <Image src={women} alt="women" layout="fill" objectFit="cover" />
      </div>
      {/* Content Overlay */}
      <div className="absolute flex flex-col justify-center left-[5%] top-[30%] items-start gap-6 px-6 lg:px-16 z-10 text-white">
        <h5 className="font-Montserrat font-semibold text-xs lg:text-lg leading-[24px]">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-3xl lg:text-5xl leading-[80px] max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-lg lg:text-xl leading-[30px] max-w-[500px]">
          We know how large objects will act,but things on a small scale.
        </h4>
        <button className="w-[200px] md:w-[250px] h-[50px] lg:w-[300px] lg:h-[60px] rounded-[5px] px-6 py-2 bg-[#2DC071] text-white text-xl font-Montserrat leading-[32px]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
