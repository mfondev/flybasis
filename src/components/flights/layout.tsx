import React from "react";
import FlightHeader from "./flightHeader";
import AvailableFlights from "./availableFlights";
import SearchFlights from "./searchFlights";
import Contact from "./contact";
import FlightsLink from "./flightsLink";
import FlightSummary from "./flightSummary";
import Cta from "./cta";

export default function FlightLayout() {
  return (
    <>
      <FlightHeader />
      <AvailableFlights />
      <div className="bg-[#3661eb] w-full">
        <div className=" max-w-[800px] pl-4 font-bold py-16 text-white text-left">
          <h3 className="text-[48px]">
            Airlines save a number of <span>$7,084</span> discounted seats for
            every flight <span></span> called "consolidator" fares.{" "}
          </h3>
          <h3>
            Now they're yours. <span></span>
          </h3>
          <p className="text-[16px] py-4">
            After clicking search we will send your private fares directly to
            your email. No waiting around
          </p>
        </div>
      </div>
      <main className="bg-[#dee4eb]">
        <section className=" pt-12">
          <article className="container mx-auto">
            <div>
              <h3 className="text-center text-[32px] max-w-[400px] mx-auto">
                <span className="text-[#4360ba] text-[24px]">So easy</span>,
                Grandma could do it{" "}
                <span className="text-[#4360ba] text-[24px]">
                  Save thousands. In 3 easy steps
                </span>
              </h3>
              <p className="text-[#a6abb8] text-center">
                Discounted, "insider" fares. At your fingertips.
              </p>
            </div>
            <main className="py-4 flex flex-row items-center justify-between">
              <SearchFlights />
              <Contact />
              <FlightsLink />
            </main>
            <button className="bg-[#3661eb] text-white py-2 px-4 rounded-[5px] ml-10 text-center mx-auto">
              Search Now
            </button>
          </article>
          <FlightSummary />
        </section>
      </main>
    </>
  );
}
