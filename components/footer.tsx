"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* PLATFORM */}
          <div>
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4">PLATFORM</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPLIANCE */}
          <div>
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4">COMPLIANCE</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  Charter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* DEVELOPERS */}
          <div>
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4">DEVELOPERS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  Models
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  Integration Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  Agents SDK
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  Patch Notes
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                  Founders
                </Link>
              </li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4">FOLLOW US</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                  </svg>
                  Discord
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li>
                <Link href="mailto:hello@xentris.ai" className="text-white hover:text-gray-300 transition-colors">
                  hello@xentris.ai
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 border-t border-gray-800">
          <div className="mb-6 lg:mb-0">
            <p className="text-gray-400 text-sm mb-4">First AI Forex Analysis Model</p>
            <div className="flex items-center">
              <Image src="/images/xentris-trading.png" alt="Xentris Logo" width={40} height={40} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
            <p className="text-gray-400 text-sm">ALL RIGHTS RESERVED © XENTRIS 2025</p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
