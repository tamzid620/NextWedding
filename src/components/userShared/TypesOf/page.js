import Image from "next/image";
import React from "react";
import img1 from "@/app/assests/images/h9-feautured-img-0a.jpg";
import img2 from "@/app/assests/images/h9-feautured-img-1a.jpg";
import img3 from "@/app/assests/images/h9-feautured-img-2a.jpg";
import img4 from "@/app/assests/images/h9-feautured-img-3a.jpg";

const TypeOf = () => {
  

  return (
    <div className="flex justify-center ">
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 my-10">
      {/* img1 section  */}
      <div className="relative">
        <Image className="relative"  height={400} src={img1} alt="" />
        <div className="absolute top-0 bg-black opacity-60 w-full h-[400px] uppercase text-white">
          <h2 className="pt-[300px] ps-5">
           <span className="text-sm">Photography </span> <br />
           <span className="text-3xl">Preparation</span> 
          </h2>
           <hr className="border border-white mt-2"/>
        </div>
      </div>
      {/* img2 section  */}
      <div>
        <Image  height={400} className="" src={img3} alt="" />
      </div>
      {/* img3 section  */}
      <div>
        <Image  height={400} className="" src={img2} alt="" />
      </div>
      {/* img4 section  */}
      <div>
        <Image  height={400} className="" src={img4} alt="" />
      </div>
    </div>
    </div>
  );
};

export default TypeOf;
