// src/app/layout.js
import './globals.css';
import { albertSans, merriweather, poppins } from './font';
import ClientLayout from './clientLayout';
import AppWrapper from '@/components/appWrapper/AppWrapper';

export const metadata = {
  title: {
    default: 'GodLight Empowerment Foundation',
    template: '%s | GodLight Empowerment Foundation',
  },
  description: 'Empowering communities and transforming lives through impactful initiatives in Nigeria.',
  keywords: [
    'NGO in Nigeria',
    'Charity Foundation',
    'Community Empowerment',
    'Empowerment Foundation',
    'Nonprofit Organization Nigeria',
    'Support and Donations',
  ],
  metadataBase: new URL('https://www.godlightnigeria.com'),
  alternates: {
    canonical: 'https://www.godlightnigeria.com/',
  },
  openGraph: {
    title: 'GodLight Empowerment Foundation',
    description: 'Empowering communities and transforming lives through impactful initiatives in Nigeria.',
    url: 'https://www.godlightnigeria.com',
    siteName: 'GodLight Empowerment',
    images: [
      {
        url: '/godlight.logo.avif',
        width: 1200,
        height: 630,
        alt: 'GodLight Empowerment Foundation',
      },
    ],
    type: 'website',
    locale: 'en_NG',
    profile: {
      firstName: 'GodLight',
      lastName: 'Empowerment Foundation',
      username: 'GodLightempowermentfoundation',
      gender: 'non-binary',
    },
    // You can add your social URLs as properties here:
    // Note: Not all parsers support these, but better than nothing
    facebook: 'https://web.facebook.com/groups/1178925947001919',
    youtube: 'https://www.youtube.com/@GodLightempowermentfoundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GodLight Empowerment Foundation',
    description: 'Empowering communities and transforming lives through impactful initiatives in Nigeria.',
    images: ['/godlight.logo.avif'],
    creator: '@GodLightempowermentfoundation', // Your YouTube/Twitter handle if you have
  },
  icons: {
    icon: '/godlight.logo.avif',
    shortcut: '/godlight.logo.avif',
  },
  additionalMetaTags: [
    {
      property: 'og:video',
      content: 'https://www.youtube.com/@GodLightempowermentfoundation',
    },
  ],
};



export default function RootLayout({ children }) {
  const fonts = `${albertSans.variable} ${merriweather.variable} ${poppins.variable}`;

  return (
    <html lang="en">
      <body className={fonts} suppressHydrationWarning={true}>
        <AppWrapper>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppWrapper>
      </body>
    </html>
  );
}
