import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://researchcontrol.de';

    // Define all routes that should be indexed
    const routes = [
        '',              // Homepage
        '/ueber-mich',   // Über mich
        '/impressum',    // Impressum
        '/datenschutz',  // Datenschutz
    ];

    const locales = ['de', 'pt'];

    const sitemap: MetadataRoute.Sitemap = [];

    routes.forEach((route) => {
        locales.forEach((locale) => {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1.0 : (route === '/ueber-mich' ? 0.8 : 0.5),
            });
        });
    });

    return sitemap;
}
