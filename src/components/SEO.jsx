import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Stream Holland - Beste IPTV Aanbieder Nederland',
    url: 'https://streamholland.com',
    logo: 'https://streamholland.com/logo.png',
    description: 'Stream Holland is de beste IPTV aanbieder in Nederland. IPTV kopen vanaf 23€. Legaal IPTV abonnement met 30.500+ kanalen en 150.000+ films en series. Nederlandse IPTV met 24/7 support.',
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
    name: 'Stream Holland Premium Abonnement',
    description: '30.500+ live zenders, 150.000+ VOD titels, HD/UHD/4K kwaliteit, Nederlandse support 24/7',
    brand: {
      '@type': 'Brand',
      name: 'Stream Holland'
    },
    offers: [
      {
        '@type': 'Offer',
        name: '3 Maanden IPTV Abonnement',
        price: '23',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://streamholland.com/#pricing',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        '@type': 'Offer',
        name: '6 Maanden IPTV Abonnement',
        price: '32',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://streamholland.com/#pricing',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        '@type': 'Offer',
        name: '12 Maanden IPTV Abonnement - Beste Deal',
        price: '48',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://streamholland.com/#pricing',
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
      name: 'Stream Holland'
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
          text: 'IPTV kopen in Nederland kan bij Stream Holland, de beste IPTV aanbieder. We bieden IPTV abonnementen vanaf 23€ met 30.500+ kanalen. Je kunt direct online een IPTV abonnement kopen en bent binnen 5 minuten actief.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Stream Holland legaal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stream Holland is een legale IPTV aanbieder. We leveren een betrouwbare service met officiële content en volledige klantenondersteuning. IPTV legaal kopen betekent kiezen voor een vertrouwde aanbieder zoals Stream Holland.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wat is de beste IPTV app voor Nederland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De beste IPTV app voor Nederlandse gebruikers zijn IPTV Smarters Pro en SS IPTV. Deze apps werken perfect met uw Stream Holland abonnement op alle apparaten: Smart TV, Android, iOS, en meer.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hoeveel kanalen biedt Stream Holland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stream Holland biedt meer dan 30.500 live zenders in verschillende talen, waaronder Nederlandse, Arabische, Turkse, en internationale kanalen. Daarnaast hebben we 150.000+ films en series on-demand.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hoe snel is mijn IPTV abonnement actief?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Je Stream Holland abonnement is binnen 5 minuten actief na betaling via iDEAL. Je ontvangt direct je toegangsgegevens via email en kunt meteen beginnen met kijken.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wat kost een IPTV abonnement bij Stream Holland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IPTV abonnement kopen bij Stream Holland start vanaf 23€ voor 3 maanden, 32€ voor 6 maanden, of 48€ voor 12 maanden. Geen verborgen kosten, geen automatische verlenging.'
        }
      },
      {
        '@type': 'Question',
        name: 'Verlengd het abonnement automatisch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nee, bij Stream Holland is er geen automatische verlenging. Je hebt volledige controle over je abonnement. Dit maakt ons een van de beste IPTV aanbieders in Nederland.'
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
        item: 'https://streamholland.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Prijzen',
        item: 'https://streamholland.com/#pricing'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vergelijking',
        item: 'https://streamholland.com/#comparison'
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Stream Holland - Premium Streaming Service Nederland | 30.500+ Kanalen vanaf 23€</title>
      <meta
        name="description"
        content="Stream Holland - Premium streaming service met 30.500+ kanalen. Betrouwbaar IPTV abonnement vanaf 23€. Nederlandse service, legaal & veilig. Actief binnen 5 min."
      />
      <meta
        name="keywords"
        content="iptv kopen, iptv abonnement kopen, iptv aanbieders, iptv nederland, beste iptv app, nederlandse iptv, iptv aanbieder, iptv legaal, iptv abbonement, nederland iptv, dutch iptv, iptv proefabonnement, iptv abonnement, ip tv"
      />
      <link rel="canonical" href="https://streamholland.com" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://streamholland.com" />
      <meta property="og:title" content="Stream Holland - Premium Streaming Service | 30.500+ Kanalen" />
      <meta
        property="og:description"
        content="Stream Holland - Premium streaming service met 30.500+ kanalen, legaal & betrouwbaar. Abonnement vanaf 23€. Actief binnen 5 min. 24/7 support."
      />
      <meta property="og:image" content="https://streamholland.com/og-image.jpg" />
      <meta property="og:locale" content="nl_NL" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://streamholland.com" />
      <meta property="twitter:title" content="Stream Holland - Premium Streaming Service Nederland" />
      <meta
        property="twitter:description"
        content="Stream Holland - Premium streaming service. Vanaf 23€. 30.500+ kanalen, legaal & betrouwbaar."
      />
      <meta property="twitter:image" content="https://streamholland.com/twitter-image.jpg" />

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
      <meta name="author" content="Stream Holland" />

      {/* Geo Tags for Netherlands */}
      <meta name="geo.region" content="NL" />
      <meta name="geo.placename" content="Rotterdam" />
    </Helmet>
  );
};

export default SEO;
