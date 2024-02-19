import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="w-screen h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-betwxeen items-center h-full">
            
            <ul className="flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
  )
}
