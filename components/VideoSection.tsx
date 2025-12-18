"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        PC-basierte Automatisierung in Aktion
                    </h2>
                    <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Erleben Sie, wie moderne Software Hardware zum Leben erweckt. Von der präzisen Ansteuerung bis zur komplexen Datenanalyse.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black group reveal">
                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent/20 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                            playsInline
                        >
                            <source src="/Erklärvideo%20zur%20PC-%20Automatisierung.mp4" type="video/mp4" />
                            Ihr Browser unterstützt das Video-Tag nicht.
                        </video>

                        {/* Optional overlay play button style if we were doing custom controls, but native controls are safer for accessibility and standard behavior */}
                    </div>
                </div>
            </div>
        </section>
    );
}
