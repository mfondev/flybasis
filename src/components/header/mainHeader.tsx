import React from 'react'
import Navbar from '@/components/navigation/navbar'


export default function MainHeader() {
  return (
    <>
      <Navbar />

      <main>
        <div>
          <h2>
            Save up to 64% on international Business & First Class.{' '}
            <span>Instantly</span>
          </h2>
          <p>
            Unlock exclusive access to private fares airlines dont want you to
            see. Using Basis
          </p>
        </div>
        <section>
          <div>
            <h4>Business class</h4>
            <header>
              <h3>Denpasar</h3>
              Seoul(ICN)
            </header>
            <div>
              <ul>
                <li>
                  <h6>United</h6>
                  <p>$4,215.00</p>
                </li>
                <li>
                  <h6>Katak</h6>
                  <p>$4,215.00</p>
                </li>
                <li>
                  <h6>Basis</h6>
                  <p>$4,215.00</p>
                </li>
                <li>
                  <h6>Expedia</h6>
                  <p>$4,215.00</p>
                </li>
                <li>
                  <h6>Booking.com</h6>
                  <p>$4,215.00</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>Saved</p>
            <span></span>
          </div>
        </section>
      </main>
    </>
  )
}
