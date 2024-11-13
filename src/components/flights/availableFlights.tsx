import React from 'react'
import Image from 'next/image'

export default function AvailableFlights() {
  return (
    <>
      <div>
        <div>
          <h4>Business Class</h4>
          <Image src="/" alt='city' width={100} height={100} />
        </div>
        <div>
         <p>Jakarta <span>CGK</span></p>
         <p>New York <span>JFK</span></p>
        </div>
        <div>
         <h3>Basis</h3>
         <p>from</p>
         <p>$282</p>
        </div>
      </div>
    </>
  )
}
