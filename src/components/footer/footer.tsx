import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h3>
            Booking discounted fares arilines cant show online has never been{' '}
            <i>this</i> easy.
          </h3>
          <p>
            Find your perfect flight. without the hassle See what you can save
            today.
          </p>
        </div>
        <button>Search Now</button>
      </div>
      <main>
        <article>
          <h2>Basis</h2>
          <p>Skip the line.Get our top daily deal.</p>
          <div>
            <input type='email' placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
          <p>
            By subscribing you agree with our <span>Privacy Policy</span> and
            provide content to resolve updates from our company
          </p>
        </article>
        <div>
          <ul>
            <h6>Destination</h6>
            <li>Dubai</li>
            <li>Paris</li>
            <li>Amsterdam</li>
            <li>Tokyo</li>
            <li>Madrid</li>
          </ul>
          <ul>
            <h6>Company</h6>
            <li>Agency Access</li>
            <li>Reviews</li>
            <li>Scholarship</li>
          </ul>
          <ul>
            <h6>Legal</h6>
            <li>Terms of Use</li>
            <li>Privacy Policy </li>
            <li>Refund Policy</li>
            <li></li>
          </ul>
        </div>
      </main>
      <div>
       <p>&copy; Flybasis. All right reserved</p>
       <div></div>
      </div>
    </footer>
  )
}
