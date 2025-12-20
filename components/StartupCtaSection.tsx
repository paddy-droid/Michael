"use client";

import { useTranslations } from "next-intl";

export default function StartupCtaSection() {
    const t = useTranslations('StartupCta');

    return (
        <section className="py-20 bg-gradient-to-tr from-brand-primary/10 to-brand-accent/5 border-b border-brand-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-brand-primary/20 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-2/3">
                            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-xs uppercase tracking-wider">
                                <i className="fa-solid fa-rocket mr-2"></i>
                                Special
                            </div>
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                                {t('title')}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t('subtitle')}
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center md:justify-end">
                            <a
                                href="#faq-item-6"
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-brand-primary rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                                <span className="relative flex items-center">
                                    {t('btn_text')}
                                    <i className="fa-solid fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
