// src/app/layout.js
import './globals.css';
import { albertSans, merriweather, poppins } from './font';
import ClientLayout from './clientLayout';
import AppWrapper from '@/components/appWrapper/AppWrapper';

export const metadata = {
  title: 'GodLight Nigeria Foundation',
  description: 'Empowering communities and transforming lives through impactful initiatives in Nigeria.',
  keywords: ['GodLight Nigeria', 'NGO in Nigeria', 'Charity Foundation', 'Community Empowerment'],
  metadataBase: new URL('https://www.godlightnigeria.com'), // change to your actual domain
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  const fonts = `${albertSans.variable} ${merriweather.variable} ${poppins.variable}`;

  return (
    <html lang="en" className={fonts}>
      <body>
        <AppWrapper>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppWrapper>
      </body>
    </html>
  );
}
