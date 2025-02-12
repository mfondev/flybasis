import React from "react";
import Image from "next/image";
import ContactForm from "./contactForm";

export default function Cta() {
  return (
    <>
      <section className='bg-[#dde9f7] flex items-center justify-between p-8 container mx-auto rounded-[20px]'>
        <div>
          <h2 className="text-[32px] font-bold mb-5">Sit back. Let our team do all the work.</h2>
          <Image
            src="/images/dummy-image.jpg"
            alt="city"
            width={350}
            height={400}
            className="rounded-[20px] "
          />
        </div>
        <div className="max-w-[400px]">
          <p className="text-[#a6abb8] text-[16px]">
            Dont waste any time. Let our friendly, expert team of agents find
            the best options for your route.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
