
import React from 'react';
import gsap from 'gsap'

export default function Template({children} :  Readonly<{  children: React.ReactNode }>) {
  return (
    <>
    <main>
<div className='w-1/4 h-full bg-pink-400'></div>
<div className='w-1/4 h-full bg-pink-400'></div>
<div className='w-1/4 h-full bg-pink-400'></div>
<div className='w-1/4 h-full bg-pink-400'></div>
    </main>
      {children}
    </>
  );
}
