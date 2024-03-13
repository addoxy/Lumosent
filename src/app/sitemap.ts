import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lumosent.addoxy.me',
      lastModified: new Date(),
    },
    {
      url: 'https://lumosent.addoxy.me/tracker',
      lastModified: new Date(),
    },
    {
      url: 'https://lumosent.addoxy.me/dashboard',
      lastModified: new Date(),
    },
    {
      url: 'https://lumosent.addoxy.me/starter-kits',
      lastModified: new Date(),
    },
    {
      url: 'https://lumosent.addoxy.me/settings',
      lastModified: new Date(),
    },
    {
      url: 'https://lumosent.addoxy.me/sign-in',
      lastModified: new Date(),
    },
  ];
}
