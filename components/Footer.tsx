import Link from 'next/link'
import React from 'react'

type Props = {}

function Footer({ }: Props) {
  return (
    <div className="w-full sticky top-[100vh] bg-accent-900 text-center text-white p-10 sm:h-40">
      <ul className="text-lg font-semibold space-y-8 sm:space-y-0 sm:flex sm:justify-evenly sm:items-center sm:h-full">
        <li>
          <Link href="/about-us">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
        </li>
        <li> <Link href="/contact-us">
          Contact Us
        </Link></li>
      </ul>
    </div>
  )
}

export default Footer