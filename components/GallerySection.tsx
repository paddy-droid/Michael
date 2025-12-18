"use client";

import Image from "next/image";

const galleryImages = [
    {
        src: "/Galerie%20Startseite/1912.i201.018.S.m004.c13.semiconductor%20chip%20production%20isometric.webp",
        alt: "Halbleiterfertigung Isometrie",
        className: "md:col-span-2 md:row-span-2", // Large feature item
    },
    {
        src: "/Galerie%20Startseite/bended-caucasian-scientist-blue-lab-suit-trying-fix-manufacture-machine-with-shafts.webp",
        alt: "Wartung und Inbetriebnahme Industrieanlagen",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/Galerie%20Startseite/3d-rendering-blue-black-printer-white-background.webp",
        alt: "3D Druck und Prototyping",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/Galerie%20Startseite/Bild03.webp",
        alt: "Industrielle Detailansicht",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/Galerie%20Startseite/Bild13.webp",
        alt: "Technische Komponenten",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/Galerie%20Startseite/Michael%20Hermann.webp",
        alt: "Michael Hermann - Ihr Ansprechpartner",
        className: "md:col-span-1 md:row-span-1",
    },
];

export default function GallerySection() {
    return (
        <section className="py-24 bg-brand-dark border-y border-slate-800 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Impressionen</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-4">
                        Einblick in die Technik-Welt
                    </h2>
                    <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        High-Tech Umgebungen, Reinräume und komplexe Maschinen sind mein tägliches Arbeitsumfeld.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl overflow-hidden group shadow-lg border border-white/10 ${img.className}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-white font-bold text-lg px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
