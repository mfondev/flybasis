import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="flex items-center bg-white p-4 container mx-autoo">
      <div className="space-y-3 max-w-[400px]">
        <h5>What Travelers Say</h5>
        <h1 className="text-[24px] ">
          "Always though Google Flights showed the best deals. Had no idea
          airlines <span className="text-[#3a5ee6] font-bold">blocked off their cheapest tickets</span> with the only
          rule they cant't be sold online."
        </h1>
        <span>
          <h4>Jonathan Bustos</h4>
          <p>Dallas, TX</p>
        </span>
      </div>
      <Image
        src="/images/dummy-image.jpg"
        alt="city"
        width={350}
        height={700}
        className="rounded-t-[20px]"
      />
    </section>
  );
}
