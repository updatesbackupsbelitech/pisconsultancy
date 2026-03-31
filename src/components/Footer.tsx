import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const pisLogo = "/placeholder.svg";

const Footer = () => {
  return (
    <footer className="bg-pis-black text-muted">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div className="space-y-4">
            <img src={pisLogo} alt="PIS Consultancy" className="h-14 w-auto brightness-0 invert" />
            <p className="text-sm leading-relaxed text-pis-gray-dark">
              A multidisciplinary professional services firm delivering end-to-end business, financial, digital, and governance solutions across multiple sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-primary-foreground text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-pis-gray-dark hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-primary-foreground text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Audit & Assurance",
                "Tax Advisory",
                "Accounting Services",
                "Business Advisory",
                "Cybersecurity",
                "Data Analytics",
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-pis-gray-dark hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-primary-foreground text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-pis-gray-dark">P.O. Box 442, Legon - Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-sm text-pis-gray-dark">+233 555 901 515</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-sm text-pis-gray-dark">info@pisconsultancy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pis-gray-dark/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-pis-gray-dark">
            © {new Date().getFullYear()} PIS Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-pis-gray-dark">Privacy Policy</span>
            <span className="text-xs text-pis-gray-dark">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
