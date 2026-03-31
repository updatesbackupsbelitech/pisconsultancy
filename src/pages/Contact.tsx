import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const aboutHero = "/placeholder.svg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us"
        description="Get in touch with PIS Consultancy. Contact us at +233 555 901 515 or visit our offices in Tarkwa or Accra, Ghana."
        keywords="contact, PIS Consultancy, Tarkwa, Accra, Ghana, professional services"
        canonical="https://pisconsultancy.com/contact"
      />
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Let's discuss how we can support your business goals."
        image={aboutHero}
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="orange-accent-line mb-6" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ready to strengthen your business's financial efficiency and compliance? Our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Addresses</h4>
                  <p className="text-muted-foreground text-sm">P.O. Box 30, Tarkwa, Western Region, Ghana</p>
                  <p className="text-muted-foreground text-sm">P.O. Box 442, Legon - Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">+233 555 901 515</p>
                  <p className="text-muted-foreground text-sm">+233 541 073 284</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">info@pisconsultancy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground text-sm">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground text-sm mb-8">Fill out the form below and our team will respond within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <section className="h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7339076326006!2d-0.18917!3d5.6468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7f8c8c8c8c9%3A0x1!2sLegon%2C%20Accra!5e0!3m2!1sen!2sgh!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PIS Consultancy - Legon Office Location"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
