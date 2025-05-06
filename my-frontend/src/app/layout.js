// src/app/layout.js
import './globals.css';
import { albertSans, merriweather, poppins } from './font';
import ClientLayout from './clientLayout';
import AppWrapper from '@/components/appWrapper/AppWrapper';


export const metadata = {
  title: 'Your App',
  description: 'A great app using Next.js and Google Fonts',
};

export default function RootLayout({ children }) {
  const fonts = `${albertSans.variable} ${merriweather.variable} ${poppins.variable}`;

  return (
    <html lang="en">
      <AppWrapper>
        <ClientLayout fonts={fonts}>
        {children}
        </ClientLayout>
      </AppWrapper>
    </html>
  );
}
