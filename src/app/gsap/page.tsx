"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(null);

  useEffect(() => {
    gsap.to(loadingRef.current, {
      opacity: 0,
      duration: 1,
      delay: 2,
      onComplete: () => setLoading(false),
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      const context = gsap.context(() => {
        gsap.set(".box", { yPercent: 0 });
        gsap.to(".box", { yPercent: 100, duration: 0.5, stagger: 0.25 });
      });

      return () => context.revert();
    }
  }, [loading]);

  return (
    <>
    <div className="h-screen w-full overflow-hidden">
      {loading && (
        <div
          ref={loadingRef}
          className="fixed inset-0 flex justify-center items-center z-50"
        >
          <img
            src="/images/dummy-image.jpg"
            alt="Loading..."
            className="w-[180px] h-[100px] sm:w-[300px] sm:h-[300px] animate-pulse"
          />
        </div>
      )}
      <main className="h-screen w-full flex">
        <div className="w-1/4 h-full bg-black box"></div>
        <div className="w-1/4 h-full bg-black box"></div>
        <div className="w-1/4 h-full bg-black box"></div>
        <div className="w-1/4 h-full bg-black box"></div>
      </main>
      {children}
    </div>
    </>
  );
}
