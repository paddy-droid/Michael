import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
    const t = useTranslations('Privacy');

    return (
        <div className="min-h-screen bg-white">
            {/* Header / Spacer */}
            <div className="h-24 bg-brand-dark"></div>

            <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12">
                    {t('title')}
                </h1>

                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="lead text-lg mb-8">
                        {t('intro')}
                    </p>

                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-10">
                        <p className="font-bold text-slate-800">
                            Michael Hermann<br />
                            Research Control<br />
                            Seesiedlung 14<br />
                            17252 Mirow<br />
                            Deutschland
                        </p>
                        <p className="mt-4">
                            <a href="mailto:hermann@researchcontrol.de" className="text-brand-primary hover:underline">
                                hermann@researchcontrol.de
                            </a>
                        </p>
                    </div>

                    {/* General Rights */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.general.title')}</h2>
                        <div dangerouslySetInnerHTML={{ __html: t.raw('sections.general.content') }}></div>
                    </section>

                    {/* Data Collection */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.collection.title')}</h2>
                        <p>{t('sections.collection.content')}</p>
                    </section>

                    {/* SSL */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.security.title')}</h2>
                        <p>{t('sections.security.content')}</p>
                    </section>

                    {/* Contact */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.contact.title')}</h2>
                        <p>{t('sections.contact.content')}</p>
                    </section>
                </div>
            </main>

            {/* Simple Footer for this page */}
            <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 text-sm mt-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        &copy; {new Date().getFullYear()} Research Control - Michael Hermann.
                    </div>
                </div>
            </footer>
        </div>
    );
}
