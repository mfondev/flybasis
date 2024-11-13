import React from 'react'

export default function FlightHeader() {
  return (
    <>
      <header>
        <div>
          <p>Round Trip</p>
          <p>1 Passenger</p>
          <p>Business & First</p>
        </div>
        <main>
          <div>
            <p>From</p>
            <h5>Jakarta
              <span>CGK</span>
            </h5>
          </div>
          <div>
            <p>To</p>
            <h5>Singapore
              <span>SIN</span>
            </h5>
          </div>
          <div>
            <p>Departure Date</p>
            <h5>
             31/4/2024
            </h5>
          </div>
          <div>
            <p>Return Date</p>
            <h5>
             3/17/2024
            </h5>
          </div>
          <button>Search Flights</button>
        </main>
      </header>
    </>
  )
}
