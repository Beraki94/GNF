'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/scrollTotop/ScrollToTop';
import Loader from '@/components/loadingIndicator/Loader';

export default function ClientLayout({ children, fonts }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true); // default true for initial load

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Delay to mimic loading screen

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (loading) {
    return (
      <body className={fonts}>
        <Loader />
      </body>
    );
  }

  return (
    <body className={fonts}>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </body>
  );
}
