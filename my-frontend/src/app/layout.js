import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";
import { albertSans, merriweather, poppins } from "../app/font";
import ScrollToTop from "@/components/scrollTotop/ScrollToTop";

export const metadata = {
  title: 'Your App',
  description: 'A great app using Next.js and Google Fonts',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} ${merriweather.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}