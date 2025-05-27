"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <header
      className="w-full"
      style={{
        background: "#0D0D0D",
        borderBottom: "1.5px solid #331659",
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/xentris-trading.png"
              alt="Xentris Logo"
              width={56}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/recursos"
              className="text-sm font-medium transition-colors hover:text-[#8b3bc0] focus:text-[#8b3bc0]"
            >
              Cursos
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-[#8b3bc0] focus:text-[#8b3bc0]"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-[#8b3bc0] focus:text-[#8b3bc0]"
            >
              Promts
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-[#8b3bc0] focus:text-[#8b3bc0]"
            >
              GPT Forex Pro
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-[#8b3bc0] focus:text-[#8b3bc0]"
            >
              Empresa
            </Link>
          </nav>
        </div>
        <Button
          variant="outline"
          className="border-[#8b3bc0] text-white hover:text-[#8b3bc0] hover:border-[#8b3bc0] transition-colors font-semibold px-5 py-2"
        >
          Iniciar Sesión
        </Button>
      </div>
    </header>
  )
}
