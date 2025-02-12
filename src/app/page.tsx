'use client'
import Faq from "@/components/faq/faq";
import FlightLayout from "@/components/flights/Layout";
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/header/mainHeader";
import Testimonial from "@/components/testimonial";


export default function Home() {
  return (
    <>
    <MainHeader />
    <FlightLayout />
    <Faq />
    <Testimonial />

    <Footer />
    </>
  );
}
