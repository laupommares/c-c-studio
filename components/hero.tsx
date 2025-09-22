// @ts-nocheck
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-8 text-black hover:bg-lime-300">
      <a href="http://wa.link/2xfv5f" target="_blank" rel="noopener noreferrer">
        Chat
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      {/* Contenido del hero */}
      <div className="container relative z-10 mx-auto px-8 lg:px-16">
        <div className="flex flex-col justify-center py-14 sm:py-16 mb-16">
          <h1 className="mt-3 text-4xl font-extrabold -tracking-tighter sm:text-5xl md:text-8xl">
            <span className="block">CREAMOS</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
              TU IDENTIDAD
            </span>
            <span className="block">DIGITAL</span>
          </h1>
          <div className="mt-6">{buttonNew}</div>
          {/* Franja por encima de todo */}
          <div className="relative w-full overflow-hidden mt-16">
            <div className="flex animate-marquee">
              <Image
                src="/images/franja2.svg"
                alt="Franja promocional"
                width={2000}
                height={300}
                className="w-full max-w-none scale-75"
                priority
              />
              <Image
                src="/images/franja2.svg"
                alt="Franja promocional repetida"
                width={2000}
                height={300}
                className="w-full max-w-none scale-75"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
