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
              alt="XENTRIS Logo"
              width={56}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/recursos"
              className="text-sm font-mansfield-medium transition-colors hover:text-xentris-purple focus:text-xentris-purple"
            >
              Cursos
            </Link>
            <Link
              href="#"
              className="text-sm font-mansfield-medium transition-colors hover:text-xentris-purple focus:text-xentris-purple"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-mansfield-medium transition-colors hover:text-xentris-purple focus:text-xentris-purple"
            >
              Prompts
            </Link>
            <Link
              href="https://chatgpt.com/g/g-Apjq2CgWQ-gpt-forex-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mansfield-medium transition-colors hover:text-xentris-purple focus:text-xentris-purple"
            >
              GPT Forex Pro
            </Link>
            <Link
              href="#"
              className="text-sm font-mansfield-medium transition-colors hover:text-xentris-purple focus:text-xentris-purple"
            >
              Empresa
            </Link>
          </nav>
        </div>
        <Button
          variant="outline"
          className="border-xentris-purple text-white hover:text-xentris-purple hover:border-xentris-purple transition-colors font-mansfield-bold px-5 py-2 bg-transparent"
        >
          Iniciar Sesión
        </Button>
      </div>
    </header>
  )
}
