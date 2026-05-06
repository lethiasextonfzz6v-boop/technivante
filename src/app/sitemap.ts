import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://technivante.com';
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-05-06'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}