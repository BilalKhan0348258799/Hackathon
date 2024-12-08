import Image from "next/image";
import picture1 from "@/images/product-cover-5.png";
import CardText from "./cards-text";
import pic2 from "@/images/product-cover-5 (1).png";
import pic3 from "@/images/product-cover-5 (2).png";
import pic4 from "@/images/product-cover-5 (3).png";
import pic5 from "@/images/product-cover-5 (4).png";
import pic6 from "@/images/product-cover-5 (5).png";
import pic7 from "@/images/product-cover-5 (6).png";
import pic8 from "@/images/product-cover-5 (7).png";

export default function ProductCard() {
  return (
    <div className="w-full bg-white flex justify-center py-[80px] pb-40">
      <div className="w-full max-w-[1124px] flex flex-col gap-[80px] px-[20px]">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {[picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map(
            (pic, index) => (
              <div key={index} className="w-full h-auto">
                <div className="w-full h-full">
                  <div className="w-full h-[427px] ">
                    <Image src={pic} alt={`picture${index + 1}`} className="w-full h-full object-cover " />
                  </div>
                  <div className="pt-200"><CardText /></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
