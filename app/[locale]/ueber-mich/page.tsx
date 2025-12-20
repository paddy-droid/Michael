"use client";

import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations('About');

    return (
        <>
            {/* Page Header */}
            <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-brand-dark overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-primary opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-brand-accent opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-stone-900/60 border border-stone-600 backdrop-blur-sm shadow-lg">
                            <span className="text-brand-primary font-semibold text-sm tracking-wider uppercase">
                                Ingenieurbüro Michael Hermann
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                            {t('title_1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-300% animate-gradient">
                                {t('title_2')}
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            </header>

            {/* Intro & Profile Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Image Column */}
                        <div className="lg:col-span-4 relative">
                            <div className="sticky top-24">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-100 group">
                                    <Image
                                        src="/Ing. Michael Hermann.jpg"
                                        alt="Dipl.-Ing. (FH) Michael Hermann"
                                        width={800}
                                        height={1067}
                                        quality={100}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    {/* Overlay Gradient for Text readability if needed, or just style */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="font-display font-bold text-2xl">Michael Hermann</div>
                                        <div className="text-brand-primary text-sm font-medium uppercase tracking-wider mt-1">Dipl.-Ing. (FH)</div>
                                    </div>
                                </div>

                                {/* Decorative Pattern behind */}
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-primary/20 rounded-2xl -z-10 bg-brand-light/50"></div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 leading-relaxed">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                    {t.rich('intro_title', { highlight: (chunks) => <span className="text-brand-primary">{chunks}</span> })}
                                </h2>
                                <p className="mb-6">
                                    {t.rich('intro_text_1', { strong: (chunks) => <strong>{chunks}</strong> })}
                                </p>
                                <p>
                                    {t('intro_text_2')}
                                </p>
                            </div>

                            {/* Philosophy Quote Box */}
                            <div className="bg-stone-50 border-l-4 border-brand-primary p-8 rounded-r-xl my-10">
                                <i className="fa-solid fa-quote-left text-brand-primary/20 text-4xl mb-2 block"></i>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('quote_title')}</h3>
                                <p className="italic text-slate-700">
                                    {t('quote_text')}
                                </p>
                            </div>

                            <div>
                                <p className="mb-4">
                                    {t.rich('intro_text_3', { strong: (chunks) => <strong>{chunks}</strong> })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competence & Tech Section */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                        <div className="mb-12 lg:mb-0">
                            <h2 className="text-3xl font-display font-bold mb-6">{t('why_title')}</h2>
                            <p className="text-slate-300 text-lg mb-8">
                                {t.rich('why_text', { highlight: (chunks) => <span className="text-white font-semibold">{chunks}</span> })}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <div className="text-brand-primary font-bold text-xl mb-1">{t('stats_exp.val')}</div>
                                    <div className="text-sm text-slate-400">{t('stats_exp.sub')}</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <div className="text-brand-accent font-bold text-xl mb-1">{t('stats_tech.val')}</div>
                                    <div className="text-sm text-slate-400">{t('stats_tech.sub')}</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <h3 className="text-xl font-bold mb-6 text-brand-light">{t('offer_title')}</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mr-4">
                                            <i className="fa-solid fa-code text-brand-primary text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">{t('offer_tech_title')}</h4>
                                            <p className="text-slate-300">{t('offer_tech_text')}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 mr-4">
                                            <i className="fa-solid fa-network-wired text-brand-accent text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">{t('offer_comm_title')}</h4>
                                            <p className="text-slate-300">{t('offer_comm_text')}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center shrink-0 mr-4">
                                            <i className="fa-solid fa-shield-halved text-brand-secondary text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">{t('offer_qual_title')}</h4>
                                            <p className="text-slate-300">{t('offer_qual_text')}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & CTA */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6">{t('exp_title')}</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12 text-left">
                        <div>
                            <p className="text-xl text-stone-600 mb-6">
                                {t('exp_text_1')}
                            </p>
                            <p className="text-xl text-stone-600">
                                {t('exp_text_2')}
                            </p>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                            <Image
                                src="/Galerie%20Startseite/Michael%20Hermann.webp"
                                alt="Michael Hermann bei der Arbeit"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-orange-100">
                        <h3 className="text-2xl font-bold text-stone-900 mb-4">{t('cta_title')}</h3>
                        <p className="text-stone-600 mb-8">
                            {t('cta_text')}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/#kontakt" className="px-8 py-4 bg-brand-primary text-white rounded-lg font-bold text-lg hover:bg-brand-secondary transition-all shadow-lg hover:shadow-neon transform hover:-translate-y-1 inline-flex items-center justify-center">
                                <i className="fa-solid fa-envelope mr-2"></i>
                                {t('cta_btn_contact')}
                            </Link>
                            <Link href="/" className="px-8 py-4 bg-white text-stone-700 border border-stone-300 rounded-lg font-bold text-lg hover:bg-stone-50 transition-all inline-flex items-center justify-center">
                                {t('cta_btn_home')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
