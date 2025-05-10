// src/app/layout.js
import './globals.css';
import { albertSans, merriweather, poppins } from './font';
import ClientLayout from './clientLayout';
import AppWrapper from '@/components/appWrapper/AppWrapper';

export const metadata = {
  title: 'GodLight Empowerment Foundation',
  description: 'Empowering communities and transforming lives through impactful initiatives in Nigeria.',
  keywords: ['GodLight Nigeria', 'NGO in Nigeria', 'Charity Foundation', 'Community Empowerment', 'Empowerment Foundation'],
  metadataBase: new URL('https://www.godlightnigeria.com'),
  alternates: {
    canonical: 'https://www.godlightnigeria.com/',
  },
  icons: {
    icon: '/godlight.logo.avif', // Path to favicon in your public folder
  },
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
