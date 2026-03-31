import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PartnerLogo {
  id: number;
  name: string;
  src: string;
}

const fallbackPartnerLogoSrc = "/placeholder.svg";

const TrustedPartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Partner logos - using specific partner images
  const partners: PartnerLogo[] = [
    { id: 1, name: "SSNIT", src: "/partners/ssnit.png" },
    { id: 2, name: "SAGE", src: "/partners/sage.png" },
    { id: 3, name: "KALI", src: "/partners/kali.png" },
    { id: 4, name: "GRA", src: "/partners/gra.png" },
  ];

  const visibleCount = 4;
  const totalSlides = partners.length;

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [autoScroll, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const visiblePartners = [];
  for (let i = 0; i < visibleCount; i++) {
    visiblePartners.push(partners[(currentIndex + i) % totalSlides]);
  }

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-20 -translate-x-6 flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-pis-orange-dark transition-colors duration-200 text-white shrink-0"
          aria-label="Previous partners"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Carousel Container */}
        <div className="flex-1 mx-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visiblePartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-card border border-border rounded-lg p-6 flex items-center justify-center h-32 transition-all duration-300 hover:shadow-lg hover:border-primary"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = fallbackPartnerLogoSrc;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-20 translate-x-6 flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-pis-orange-dark transition-colors duration-200 text-white shrink-0"
          aria-label="Next partners"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {partners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-primary w-8"
                : "bg-border w-2 hover:bg-primary/50"
            }`}
            aria-label={`Go to partner ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedPartnersCarousel;
