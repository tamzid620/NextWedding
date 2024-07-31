"use client" ;
import React, { useEffect, useState } from "react";

const Testimonial = () => {

    const testimonialTexts = [
        {
          text: "Aorem Opsum Kolor sit amet, vix eros everti at. Cu cum periculis evertitur, eruditi legendos adipisci ad cum, eam probo aperiam",
          date: "December 01, 2023 / Riyad & Rekha",
        },
        {
          text: "Borem Ppsum Lolor sit amet, vix eros everti at. Cu cum periculis evertitur, eruditi legendos adipisci ad cum, eam probo aperiam",
          date: "December 02, 2023 / John & Jane",
        },
        {
          text: "Corem Tpsum Dolor sit amet, vix eros everti at. Cu cum periculis evertitur, eruditi legendos adipisci ad cum, eam probo aperiam",
          date: "December 03, 2023 / Alex & Sam",
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      // useEffect to set up an interval to change the currentIndex every 3 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialTexts.length);
        }, 2000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, [testimonialTexts.length]);
    
      // Current testimonial data
      const { text, date } = testimonialTexts[currentIndex];

  return (
    <div className="relative w-full h-screen bg-transparent flex items-center justify-center py-28">
      <div className="absolute inset-0 bg-black opacity-50" />
      <p
        style={{ fontFamily: "Lora, serif" }}
        className="relative text-white text-center max-w-lg"
      >
        <span className="text-2xl">{text}</span>
        <br />
        <br />
        <span>{date}</span>
      </p>
    </div>
  );
};

export default Testimonial;
