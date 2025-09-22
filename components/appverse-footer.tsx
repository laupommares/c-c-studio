// @ts-nocheck
"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

export function AppverseFooter() {
  return (
    <footer className="text-white border-t border-white/10 pb-20 md:pb-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <Image src="/icons/C&C.svg" alt="Skitbit logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-lg font-semibold text-lime-300">Creativity & Code</span>
            </div>
            <p className="max-w-sm text-sm text-neutral-400">
              Impulsamos tu marca en el mundo digital.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Menú</h5>
            <ul className="space-y-2 text-sm text-neutral-300">
              {["Home", "Precios", "Conocenos", "Preguntas frecuentes"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-lime-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Social media</h5>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-neutral-400" />
                <a
                  href="https://instagram.com/theskitbit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-300"
                  aria-label="Follow skitbit on Instagram"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-neutral-400" />
                <a
                  href="https://threads.com/theskitbit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-300"
                  aria-label="Follow skitbit on Threads"
                >
                  Threads
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© 2025 — Creativity & Code AR</p>
        </div>
      </div>
    </footer>
  )
}
