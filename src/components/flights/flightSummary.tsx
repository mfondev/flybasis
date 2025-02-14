import React from "react";
import Image from "next/image";
import Cta from "./cta";

export default function FlightSummary() {
  return (
    <>
      <section className="bg-[#081029] relative w-full">
        <main className=" py-10 pb-[400px]">
          <article className="flex items-center justify-between gap-">
            <div className=" mt-8 bg-white shadow-2xl rounded-[20px] border-white">
              <div className="relative mb-4">
                <h4 className="text-[12px] px-3 py-1 text-[#3661eb] font-bold bg-[#fff] uppercase rounded-r-[5px] absolute top-3">
                  Business class
                </h4>
                <Image
                  src="/images/dummy-image.jpg"
                  alt="city"
                  width={350}
                  height={400}
                  className="rounded-t-[20px]"
                />
              </div>
              <div className="flex items-center justify-between text-sm px-2">
                <p>
                  Jakarta <span className="font-bold">(CGK)</span>
                </p>
                <p>
                  New York <span className="font-bold">(JFK)</span>
                </p>
              </div>
              <div className=" bg- flex items-center justify-between text-sm mx-2 mb-3">
                <h3>Basis</h3>
                <p>from</p>
                <p>$282</p>
              </div>
            </div>
            <div className=" mt-8 bg-white shadow-2xl rounded-[20px] border-white">
              <div className="relative mb-4">
                <h4 className="text-[12px] px-3 py-1 text-[#3661eb] font-bold bg-[#fff] uppercase rounded-r-[5px] absolute top-3">
                  Business class
                </h4>
                <Image
                  src="/images/dummy-image.jpg"
                  alt="city"
                  width={350}
                  height={400}
                  className="rounded-t-[20px]"
                />
              </div>
              <div className="flex items-center justify-between text-sm px-2">
                <p>
                  Jakarta <span className="font-bold">(CGK)</span>
                </p>
                <p>
                  New York <span className="font-bold">(JFK)</span>
                </p>
              </div>
              <div className=" bg- flex items-center justify-between text-sm mx-2 mb-3">
                <h3>Basis</h3>
                <p>from</p>
                <p>$282</p>
              </div>
            </div>
            <div className="text-white max-w-[360px]">
              <h2 className="bg-[#192452] text-[#5764a6] p-2 rounded-full">Saving types</h2>
              <h3 className="text-[32px]">Save big on last-minute trips and business class</h3>
              <p className="text-[#a6abb8]">
                Typically, our steepest discounts come from last-minutes
                bookings and one-way business class deals. See how much you can
                save today.
              </p>
            </div>
          </article>

          <section className="flex items-center justify-between  py-4">
            <div className="text-white max-w-[310px]">
              <h2 className="bg-[#192452] text-[#5764a6] p-2 rounded-full">Business class benefit</h2>
              <h3 className="text-[32px]">You Deserve better than 88B</h3>
              <p className="text-[#a6abb8]">
                Crossing youur fingers youll be treated like a real human on
                your next fight? Basis makes premium air travel more
                accessible--andaffordable--than ever.
              </p>
            </div>
            <div className="flex ">
              <div>
                <Image
                  src="/images/dummy-image.jpg"
                  alt="city"
                  width={350}
                  height={400}
                  className="rounded-t-[20px]"
                />
                <div>
                  <h1>Business Class</h1>
                  <p>Qatar Airways</p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/dummy-image.jpg"
                  alt="city"
                  width={350}
                  height={400}
                  className="rounded-t-[20px]"
                />
                <div>
                  <h1>Business Class</h1>
                  <p>Qatar Airways</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2">
        <Cta />
        </div>
      </section>
    </>
  );
}
