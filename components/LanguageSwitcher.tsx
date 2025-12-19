"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center space-x-1 bg-slate-100 rounded-full p-1 border border-slate-200">
            <button
                onClick={() => switchLocale("de")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${locale === "de"
                        ? "bg-white text-brand-primary shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
            >
                DE
            </button>
            <button
                onClick={() => switchLocale("pt")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${locale === "pt"
                        ? "bg-white text-brand-primary shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
            >
                PT
            </button>
        </div>
    );
}
