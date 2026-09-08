import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IPTV4K - Beste IPTV Aanbieder Nederland',
    url: 'https://iptv4k.nl',
    logo: 'https://iptv4k.nl/logo.png',
    description: 'IPTV4K is de beste IPTV aanbieder in Nederland. IPTV kopen vanaf 23€. Legaal IPTV abonnement met 30.500+ kanalen en 150.000+ films en series. Nederlandse IPTV met 24/7 support.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rotterdam',
      addressCountry: 'NL'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Dutch', 'Arabic', 'Turkish', 'English']
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IPTV4K Premium Abonnement',
    description: '30.500+ live zenders, 150.000+ VOD titels, HD/UHD/4K kwaliteit, Nederlandse support 24/7',
    brand: {
      '@type': 'Brand',
      name: 'IPTV4K'
    },
    offers: [
      {
        '@type': 'Offer',
        name: '3 Maanden IPTV Abonnement',
        price: '23',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://iptv4k.nl/#pricing',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        '@type': 'Offer',
        name: '6 Maanden IPTV Abonnement',
        price: '32',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://iptv4k.nl/#pricing',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        '@type': 'Offer',
        name: '12 Maanden IPTV Abonnement - Beste Deal',
        price: '48',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://iptv4k.nl/#pricing',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847'
    }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IPTV Streaming Service',
    provider: {
      '@type': 'Organization',
      name: 'IPTV4K'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IPTV Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '3 Maanden IPTV Abonnement'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '6 Maanden IPTV Abonnement'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '12 Maanden IPTV Abonnement'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Waar kan ik IPTV kopen in Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPTV kopen in Nederland kan bij IPTV4K, de beste IPTV aanbieder. We bieden IPTV abonnementen vanaf 23€ met 30.500+ kanalen. Je kunt direct online een IPTV abonnement kopen en bent binnen 5 minuten actief.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is IPTV4K legaal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPTV4K is een legale IPTV aanbieder. We leveren een betrouwbare service met officiële content en volledige klantenondersteuning. IPTV legaal kopen betekent kiezen voor een vertrouwde aanbieder zoals IPTV4K.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wat is de beste IPTV app voor Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De beste IPTV app voor Nederlandse gebruikers zijn IPTV Smarters Pro en SS IPTV. Deze apps werken perfect met uw IPTV4K abonnement op alle apparaten: Smart TV, Android, iOS, en meer.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hoeveel kanalen biedt IPTV4K?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPTV4K biedt meer dan 30.500 live zenders in verschillende talen, waaronder Nederlandse, Arabische, Turkse, en internationale kanalen. Daarnaast hebben we 150.000+ films en series on-demand.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hoe snel is mijn IPTV abonnement actief?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Je IPTV4K abonnement is binnen 5 minuten actief na betaling via iDEAL. Je ontvangt direct je toegangsgegevens via email en kunt meteen beginnen met kijken.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wat kost een IPTV abonnement bij IPTV4K?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPTV abonnement kopen bij IPTV4K start vanaf 23€ voor 3 maanden, 32€ voor 6 maanden, of 48€ voor 12 maanden. Geen verborgen kosten, geen automatische verlenging.'
        }
      },
      {
        '@type': 'Question',
        name: 'Verlengd het abonnement automatisch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nee, bij IPTV4K is er geen automatische verlenging. Je hebt volledige controle over je abonnement. Dit maakt ons een van de beste IPTV aanbieders in Nederland.'
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://iptv4k.nl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Prijzen',
        item: 'https://iptv4k.nl/#pricing'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vergelijking',
        item: 'https://iptv4k.nl/#comparison'
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>IPTV Kopen Nederland - Beste IPTV Aanbieders | IPTV Abonnement vanaf 23€</title>
      <meta
        name="description"
        content="IPTV kopen in Nederland? IPTV4K is de beste IPTV aanbieder met 30.500+ kanalen. IPTV abonnement kopen vanaf 23€. Nederlandse IPTV, legaal & betrouwbaar. Actief binnen 5 min."
      />
      <meta
        name="keywords"
        content="iptv kopen, iptv abonnement kopen, iptv aanbieders, iptv nederland, beste iptv app, nederlandse iptv, iptv aanbieder, iptv legaal, iptv abbonement, nederland iptv, dutch iptv, iptv proefabonnement, iptv abonnement, ip tv"
      />
      <link rel="canonical" href="https://iptv4k.nl" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://iptv4k.nl" />
      <meta property="og:title" content="IPTV Kopen Nederland - Beste IPTV Aanbieders | Vanaf 23€" />
      <meta
        property="og:description"
        content="IPTV kopen in Nederland? Beste IPTV aanbieder met 30.500+ kanalen, legaal & betrouwbaar. IPTV abonnement vanaf 23€. Actief binnen 5 min. 24/7 support."
      />
      <meta property="og:image" content="https://iptv4k.nl/og-image.jpg" />
      <meta property="og:locale" content="nl_NL" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://iptv4k.nl" />
      <meta property="twitter:title" content="IPTV Kopen Nederland - Beste IPTV Aanbieders" />
      <meta
        property="twitter:description"
        content="IPTV kopen in Nederland? IPTV4K is de beste IPTV aanbieder. Vanaf 23€. 30.500+ kanalen, legaal & betrouwbaar."
      />
      <meta property="twitter:image" content="https://iptv4k.nl/twitter-image.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Dutch" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="IPTV4K" />

      {/* Geo Tags for Netherlands */}
      <meta name="geo.region" content="NL" />
      <meta name="geo.placename" content="Rotterdam" />
    </Helmet>
  );
};

export default SEO;
