import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
  };
}

const SEO = ({
  title = "Zeecode - Premium Web Development & Digital Solutions",
  description = "Transform your digital presence with Zeecode. We deliver cutting-edge web development, mobile apps, and digital marketing solutions that drive results.",
  keywords = "web development, mobile apps, digital marketing, React, Node.js, SEO, UI/UX design, custom software",
  image = "/og-image.jpg",
  url = window.location.href,
  type = "website",
  article,
}: SEOProps) => {
  const fullTitle = title.includes("Zeecode") ? title : `${title} | Zeecode`;
  const siteUrl = "https://zeecode.com"; // Update with your actual domain

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zeecode",
    description: description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92311-7085377",
      contactType: "customer service",
      email: "hello@zeecode.com",
    },
    sameAs: [
      "https://twitter.com/zeecode",
      "https://linkedin.com/company/zeecode",
      "https://github.com/zeecode",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd floor, Faisal Rasheed Rd, opp. Chase Value, D Ground Block B People's Colony No 1",
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      addressCountry: "Pakistan",
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zeecode" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zeecode" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@zeecode" />
      <meta name="twitter:creator" content="@zeecode" />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:author" content={article.author} />
          {article.publishedTime && (
            <meta
              property="article:published_time"
              content={article.publishedTime}
            />
          )}
          {article.modifiedTime && (
            <meta
              property="article:modified_time"
              content={article.modifiedTime}
            />
          )}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta name="theme-color" content="#000000" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default SEO;
