import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';

const defaultSEO = {
  title: 'SikshaNext - Shape Your Tech Future',
  description: 'Join SikshaNext to learn, build, and grow with community support. Access roadmaps, projects, and mentorship to shape your tech career.',
  canonical: 'https://sikshanext.com',
  openGraph: {
    type: 'website',
    url: 'https://sikshanext.com',
    siteName: 'SikshaNext',
    title: 'SikshaNext - Shape Your Tech Future',
    description: 'Join SikshaNext to learn, build, and grow with community support. Access roadmaps, projects, and mentorship to shape your tech career.',
    images: [
      {
        url: 'https://sikshanext.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SikshaNext - Shape Your Tech Future',
      },
    ],
  },
  twitter: {
    handle: '@sikshanext',
    site: '@sikshanext',
    cardType: 'summary_large_image',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <link rel="canonical" href={defaultSEO.canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={defaultSEO.openGraph.type} />
        <meta property="og:url" content={defaultSEO.openGraph.url} />
        <meta property="og:title" content={defaultSEO.openGraph.title} />
        <meta property="og:description" content={defaultSEO.openGraph.description} />
        <meta property="og:image" content={defaultSEO.openGraph.images[0].url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content={defaultSEO.twitter.cardType} />
        <meta name="twitter:site" content={defaultSEO.twitter.site} />
        <meta name="twitter:creator" content={defaultSEO.twitter.handle} />
        <meta name="twitter:title" content={defaultSEO.openGraph.title} />
        <meta name="twitter:description" content={defaultSEO.openGraph.description} />
        <meta name="twitter:image" content={defaultSEO.openGraph.images[0].url} />
        
        {/* Viewport and Theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#FFC107" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2B2B2B" media="(prefers-color-scheme: dark)" />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FFC107" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'SikshaNext',
              url: 'https://sikshanext.com',
              logo: 'https://sikshanext.com/logo.png',
              sameAs: [
                'https://twitter.com/sikshanext',
                'https://www.linkedin.com/company/sikshanextpvtltd/',
                'https://www.instagram.com/siksha_next/',
                'https://www.youtube.com/channel/UC8wLCi3QHUiLBUc-YM1KAWw'
              ],
              description: 'Empowering the future of tech education with comprehensive roadmaps, projects, and community support.'
            })
          }}
        />
      </Head>
      
      <div className={`${mounted ? 'visible' : 'invisible'}`}>
        <Component {...pageProps} key={router.asPath} />
      </div>
      
      {/* Add any global scripts here */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
    </>
  );
}

export default MyApp;
