"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const t = useTranslations('Navbar');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Helper to determine if link should be treated as anchor or full navigation
    const getLinkHref = (anchor: string) => {
        if (pathname === "/") {
            return anchor;
        }
        return `/${anchor}`;
    };

    return (
        <>
            <nav
                className={`fixed w-full z-50 glass-effect border-b border-slate-200 transition-all duration-300 ${isScrolled ? "h-16 shadow-md" : "h-20"}`}
                id="navbar"
            >
                <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
                    <div className="flex justify-between items-center h-full">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <i className="fa-solid fa-microchip text-brand-primary text-xl sm:text-2xl"></i>
                            <span className="font-display font-bold text-lg sm:text-2xl tracking-wide text-brand-dark">
                                RESEARCH<span className="text-brand-primary">CONTROL</span>
                            </span>
                        </Link>
                        <div className="hidden xl:flex space-x-6 2xl:space-x-8 items-center ml-8">
                            <Link href={getLinkHref("#leistungen")} className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-sm uppercase tracking-wide">
                                {t('leistungen')}
                            </Link>
                            <Link href={getLinkHref("#expertise")} className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-sm uppercase tracking-wide">
                                {t('expertise')}
                            </Link>
                            <Link href={getLinkHref("#automatisierung")} className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-sm uppercase tracking-wide">
                                {t('wissenswertes')}
                            </Link>
                            <Link href={getLinkHref("#impressionen")} className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-sm uppercase tracking-wide">
                                {t('impressionen')}
                            </Link>
                            <Link href={getLinkHref("#referenzen")} className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-sm uppercase tracking-wide">
                                {t('referenzen')}
                            </Link>
                            <Link href={getLinkHref("#faq")} className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-sm uppercase tracking-wide">
                                {t('faq')}
                            </Link>
                            <Link href="/ueber-mich" className="text-slate-600 hover:text-brand-primary font-medium transition-colors text-sm uppercase tracking-wide">
                                {t('ueber_mich')}
                            </Link>

                            <div className="h-6 w-px bg-slate-300 mx-2"></div>
                            <LanguageSwitcher />

                            <Link
                                href={getLinkHref("#kontakt")}
                                className="px-5 py-2 bg-brand-primary text-white font-bold text-sm uppercase tracking-wide rounded-full hover:bg-brand-secondary transition-all shadow-lg hover:shadow-neon transform hover:scale-105"
                            >
                                {t('kontakt')}
                            </Link>
                        </div>
                        {/* Mobile Menu Button + Language Switcher (Compact) */}
                        <div className="xl:hidden flex items-center gap-4 flex-shrink-0">
                            <LanguageSwitcher />
                            <button
                                id="mobile-menu-btn"
                                className="text-slate-600 hover:text-brand-primary focus:outline-none"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`${isMobileMenuOpen ? "block" : "hidden"} xl:hidden bg-white border-t border-slate-100 absolute w-full`}
                >
                    <Link
                        href={getLinkHref("#leistungen")}
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('leistungen')}
                    </Link>
                    <Link
                        href={getLinkHref("#expertise")}
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('expertise')}
                    </Link>
                    <Link
                        href={getLinkHref("#automatisierung")}
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('wissenswertes')}
                    </Link>
                    <Link
                        href={getLinkHref("#impressionen")}
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('impressionen')}
                    </Link>
                    <Link
                        href={getLinkHref("#referenzen")}
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('referenzen')}
                    </Link>
                    <Link
                        href={getLinkHref("#faq")}
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('faq')}
                    </Link>
                    <Link
                        href="/ueber-mich"
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('ueber_mich')}
                    </Link>
                    <Link
                        href={getLinkHref("#kontakt")}
                        className="block px-4 py-3 text-brand-primary font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('kontakt')}
                    </Link>
                </div>
            </nav>
        </>
    );
}
