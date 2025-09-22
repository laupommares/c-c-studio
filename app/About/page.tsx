// @ts-nocheck
// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Creativity & Code",
    url: "https://c-c-studio.vercel.app/", 
    logo: "https://creativityandcode.com/logo.png", // 🔹 ajustar al dominio real cuando lo tengan
    description:
      "Creativity & Code es un estudio creativo que ayuda a emprendedores y profesionales de todo el mundo a construir su identidad digital: branding, diseño para redes y desarrollo web.",
    sameAs: [
      "https://www.instagram.com/somos.ccstudio/"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chivilcoy",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "creativityandcodecc@gmail.com", // 🔹 reemplazar por el real
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Argentina" },
      { "@type": "Place", name: "Latinoamérica" },
      { "@type": "Place", name: "Estados Unidos" },
      { "@type": "Place", name: "Europa" },
    ],
  };

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Sobre Creativity & Code
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          En{" "}
          <span className="text-fuchsia-400 font-semibold">
            Creativity & Code
          </span>{" "}
          ayudamos a emprendedores y profesionales a construir una identidad
          digital única que conecta con su audiencia y potencia su marca.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Branding Estratégico",
              desc: "Diseñamos identidades visuales coherentes y memorables: paleta de colores, tipografías, logos y tono de voz.",
            },
            {
              title: "Diseño para Redes",
              desc: "Creamos templates listos para Instagram y otras plataformas, pensados para comunicar y destacar tu marca.",
            },
            {
              title: "Webs Impactantes",
              desc: "Desarrollamos landings modernas y funcionales que transmiten profesionalismo desde el primer clic.",
            },
            {
              title: "Proceso Colaborativo",
              desc: "Trabajamos a tu lado para transformar tus ideas en diseños que representen tu visión.",
            },
            {
              title: "Creatividad + Tecnología",
              desc: "Combinamos diseño estratégico con herramientas digitales de última generación.",
            },
            {
              title: "Enfoque Global",
              desc: "Desde Chivilcoy, Buenos Aires, trabajamos online con clientes en cualquier parte del mundo.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para impulsar tu marca?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          En{" "}
          <span className="text-fuchsia-400 font-semibold">
            Creativity & Code
          </span>{" "}
          transformamos tu identidad digital para que tu negocio crezca.
        </p>
        <a
          href="http://wa.link/2xfv5f"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
        >
          Hablemos
        </a>
      </section>
    </>
  );
}
