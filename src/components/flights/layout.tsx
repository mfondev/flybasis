import React from 'react'
import FlightHeader from './flightHeader'
import AvailableFlights from './availableFlights'
import SearchFlights from './searchFlights'
import Contact from './contact'

export default function FlightLayout() {
  return (
    <>
      <FlightHeader />
      <AvailableFlights />
      <div>
        <h3>
          Airlines save a number of <span></span> discounted seats for every
          flight <span></span> called "consolidator" fares.{' '}
        </h3>
        <h3>Now they're yours. </h3>
        <p>
          After clicking search we will send your private fares directly to your
          email. No waiting around
        </p>
      </div>
      <section>
       <div>
        <h3><span>So easy</span>, Grandma could do it <span>Save thousands. In 3 easy steps</span></h3>
       </div>
        <SearchFlights />
        <Contact />
        {/* links */}
        <button>Search Now</button>
      </section>
    </>
  )
}
