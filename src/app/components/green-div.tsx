import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-full bg-[#23856D] mt-[-130px] top-[3200px] rounded-[5px] border mt-1 ">
      <div className="w-full h-[600px] flex flex-col items-center justify-center ">
        <div className="w-full h-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between px-[20px] mt-30">
          {/* Content Section */}
          <div className="w-full md:w-[50%] flex flex-col gap-[30px] py-[60px] px-[30px]">
            <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white">SUMMER 2020</h4>
            <h1 className="font-Montserrat font-bold text-[36px] md:text-[58px] leading-[80px] text-white">Vita Classic Product</h1>
            <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex gap-[20px] items-center">
              <h3 className="font-Montserrat font-bold text-[20px] text-white">$16.48</h3>
              <button className="w-[150px] h-[52px] rounded-[5px] px-[40px] bg-[#2DC071] flex items-center justify-center text-white text-[14px]">
                ADD TO CART
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[50%] flex items-center justify-center">
            <Image src={greenman} alt="picman" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
