// app/fonts.js (or in layout.js)
import { Albert_Sans, Merriweather, Poppins } from 'next/font/google';

export const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  weight: ['400', '700'],
  display: 'swap',
});

export const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  display: 'swap',
});
