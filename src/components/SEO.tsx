import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
}: SEOProps) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | PIS Consultancy`;

    const setMetaByName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Set meta description
    setMetaByName("description", description);

    // Set meta keywords
    if (keywords) {
      setMetaByName("keywords", keywords);
    }

    // Set canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Set Open Graph tags
    const setMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMetaTag("og:title", ogTitle || title);
    setMetaTag("og:description", ogDescription || description);
    if (ogImage) {
      setMetaTag("og:image", ogImage);
    }
    setMetaTag("og:type", ogType);

    // Set Twitter card tags (keep consistent with OG)
    setMetaByName("twitter:title", ogTitle || title);
    setMetaByName("twitter:description", ogDescription || description);
    if (ogImage) {
      setMetaByName("twitter:image", ogImage);
    }

    // Set JSON-LD structured data
    const scriptLD = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PIS Consultancy",
      url: "https://pisconsultancy.com",
      logo: "https://pisconsultancy.com/placeholder.svg",
      description: "Professional consulting services - Audit, Tax, Accounting, Advisory",
      address: {
        "@type": "PostalAddress",
        streetAddress: "P.O. Box 30",
        addressLocality: "Tarkwa",
        addressRegion: "Western Region",
        postalCode: "GA",
        addressCountry: "GH",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+233-555-901-515",
        contactType: "Customer Service",
      },
    };

    let scriptLD_tag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptLD_tag) {
      scriptLD_tag = document.createElement("script");
      scriptLD_tag.type = "application/ld+json";
      document.head.appendChild(scriptLD_tag);
    }
    scriptLD_tag.textContent = JSON.stringify(scriptLD);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType]);

  return null;
};

export default SEO;
