import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <main className="bg-[#cbd4e1]">
      <section className="flex items-center justify-between bg-white p-4 container mx-auto py-10 rounded-[20px]">
        <div className="space-y-3 max-w-[400px]">
          <h5>What Travelers Say</h5>
          <h1 className="text-[24px] ">
            "Always though Google Flights showed the best deals. Had no idea
            airlines{" "}
            <span className="text-[#3a5ee6] font-bold">
              blocked off their cheapest tickets
            </span>{" "}
            with the only rule they cant't be sold online."
          </h1>
          <span>
            <h4>Jonathan Bustos</h4>
            <p>Dallas, TX</p>
          </span>
        </div>
        <div className="relative w-[380px] h-[400px]">
          <Image
            src="/images/dummy-image.jpg"
            alt="city"
            fill
            className="rounded-[20px] object-cover"
          />
        </div>
      </section>
    </main>
  );
}
