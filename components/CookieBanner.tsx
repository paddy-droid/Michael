"use client";

import { useState, useEffect } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function CookieBanner() {
    const t = useTranslations('CookieBanner');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted/declined
        const conscent = localStorage.getItem("cookie_consent");
        if (!conscent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-slate-900 border-t border-slate-700 shadow-2xl animate-fade-in-up">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-slate-300 text-sm md:text-base flex-1 text-center md:text-left">
                    <p>
                        {t('text')}{" "}
                        <Link href="/datenschutz" className="text-brand-primary hover:text-brand-secondary underline transition-colors">
                            {t('privacy_link')}
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 rounded-lg text-slate-400 border border-slate-700 hover:text-white hover:border-slate-500 transition-colors text-sm font-medium"
                    >
                        {t('decline')}
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2 rounded-lg bg-brand-primary text-white font-bold shadow-lg hover:bg-brand-secondary hover:shadow-brand-primary/20 transition-all transform hover:-translate-y-0.5 text-sm"
                    >
                        {t('accept')}
                    </button>
                </div>
            </div>
        </div>
    );
}
