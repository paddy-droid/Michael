"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FaqSection() {
    const t = useTranslations('Faq');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [1, 2, 3, 4, 5];

    // Helper to strip HTML tags for Schema
    const stripHtml = (html: string) => {
        return html.replace(/<[^>]*>?/gm, '');
    };

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((num) => ({
            "@type": "Question",
            "name": t(`q${num}`),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": stripHtml(t.raw(`a${num}`) as string)
            }
        }))
    };

    return (
        <section className="py-24 bg-white" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">{t('label')}</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2 mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqItems.map((num, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold pr-8 ${openIndex === index ? 'text-brand-primary' : 'text-slate-800'}`}>
                                    {t(`q${num}`)}
                                </span>
                                <span className={`transform transition-transform duration-300 w-8 h-8 rounded-full flex items-center justify-center border ${openIndex === index ? 'rotate-180 bg-brand-primary text-white border-brand-primary' : 'bg-white text-slate-400 border-slate-200'}`}>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                                    } overflow-hidden`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100/50">
                                    {/* Render HTML content from translation file */}
                                    <div className="prose prose-slate max-w-none text-slate-600" dangerouslySetInnerHTML={{ __html: t.raw(`a${num}`) }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
