"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const references = [
    // Global Player & Halbleiter/Optik
    {
        name: "Carl Zeiss",
        alt: "Softwareentwicklung Automatisierung Referenz Carl Zeiss",
        src: "/Zeiss_logo.svg.png",
        placeholderText: "ZEISS",
    },
    {
        name: "Infineon",
        alt: "Prozesssteuerung Halbleiterindustrie Infineon",
        src: "/Infineon-Logo.svg.png",
        placeholderText: "Infineon",
    },
    {
        name: "KLA",
        alt: "SPS Software Engineering KLA Corporation",
        src: "/KLA.png",
        placeholderText: "KLA",
    },
    // Spezialisten & Industrie
    {
        name: "Hekuma",
        alt: "HMI Entwicklung Spritzgussmaschinen Hekuma",
        src: "", // Logo missing
        placeholderText: "HEKUMA",
    },
    {
        name: "Vistec",
        alt: "Elektronenstrahllithografie Steuerung Vistec",
        src: "/Vistec.png",
        placeholderText: "Vistec",
    },
    {
        name: "Freiberger",
        alt: "Compound Materials Prozessautomatisierung Freiberger",
        src: "/freiberger_logo-color.175x0.png",
        placeholderText: "Freiberger",
    },
    {
        name: "Omicron",
        alt: "Lasersysteme Software Steuerung Omicron",
        src: "/Omicron.png",
        placeholderText: "OMICRON",
    },
    // Medizintechnik & Forschung
    {
        name: "Gambro",
        alt: "Medizintechnik Dialyse Software Gambro",
        src: "/gambro-logo.png",
        placeholderText: "Gambro",
    },
    {
        name: "Seleon",
        alt: "Medizintechnik Software Dosiersysteme Seleon",
        src: "/seleon_Logo_white-1.png",
        placeholderText: "seleon",
        className: "bg-slate-800 p-2 rounded", // Added to handle likely white logo
    },
    {
        name: "TU Bergakademie Freiberg",
        alt: "Forschungsprojekt Automatisierung TU Bergakademie",
        src: "/TUBAF_Logo.svg.png",
        placeholderText: "TU Freiberg",
    },
];

export default function ReferencesSection() {
    const t = useTranslations('ReferencesSection');

    return (
        <section id="referenzen" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* The Trust Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                    {references.map((ref, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 h-32 ${ref.src ? '' : 'bg-slate-50'}`}
                        >
                            <div className={`relative w-full h-full flex items-center justify-center transition-all duration-300 ${ref.src ? 'filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105' : ''}`}>
                                {ref.src ? (
                                    <Image
                                        src={ref.src}
                                        alt={ref.alt}
                                        fill
                                        className={`object-contain ${ref.className || ''}`}
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                ) : (
                                    <span className="font-display font-bold text-xl text-slate-400 group-hover:text-slate-900 transition-colors">
                                        {ref.placeholderText}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-sm text-slate-400 italic">
                    {t('footer')}
                </p>
            </div>
        </section>
    );
}
