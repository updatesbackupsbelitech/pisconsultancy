import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

const CTABanner = ({
  title = "Ready to Transform Your Business?",
  subtitle = "Partner with PIS Consultancy for expert financial, digital, and governance solutions that drive sustainable growth.",
}: CTABannerProps) => {
  return (
    <section className="bg-primary">
      <SectionWrapper className="!py-16">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {title}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            {subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-pis-black text-primary-foreground px-8 py-4 rounded-md font-semibold text-sm tracking-wide hover:bg-foreground transition-colors duration-200"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default CTABanner;
