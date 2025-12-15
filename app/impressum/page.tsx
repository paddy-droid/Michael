import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impressum | Research Control',
    description: 'Rechtliche Informationen und Impressum von Research Control - Michael Hermann.',
};

export default function Impressum() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation spacer */}
            <div className="h-20 bg-white border-b border-slate-100"></div>

            <main className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">Impressum</h1>

                <div className="space-y-8 text-slate-600">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Michael Hermann<br />
                            Research Control<br />
                            Seesiedlung 14<br />
                            17252 Mirow
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt</h2>
                        <p className="space-y-2">
                            <span className="block">
                                <strong>Telefon:</strong> +49 172 3714220
                            </span>
                            <span className="block">
                                <strong>E-Mail:</strong> <a href="mailto:hermann@researchcontrol.de" className="text-brand-primary hover:underline">hermann@researchcontrol.de</a>
                            </span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Inhaltlich Verantwortlicher</h2>
                        <p>
                            Michael Hermann<br />
                            (Anschrift wie oben)
                        </p>
                    </section>

                    <section className="border-t border-slate-200 pt-8 mt-12">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Haftungsausschluss (Disclaimer)</h2>

                        <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Haftung für Inhalte</h3>
                        <p className="mb-4">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p>
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>

                        <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Haftung für Links</h3>
                        <p className="mb-4">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                        </p>
                        <p>
                            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>

                        <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Urheberrecht</h3>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                        <p>
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 text-sm mt-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        &copy; {new Date().getFullYear()} Research Control - Michael Hermann. Alle Rechte vorbehalten.
                    </div>
                    <div className="flex gap-6">
                        <span className="text-white font-bold">Impressum</span>
                        <a href="/" className="hover:text-white transition-colors">
                            Startseite
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
