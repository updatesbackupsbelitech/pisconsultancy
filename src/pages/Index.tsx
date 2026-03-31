import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  BarChart3,
  FileText,
  Briefcase,
  Users,
  Building2,
  Lightbulb,
  Landmark,
  HeartPulse,
  Factory,
  ShieldCheck,
  HardHat,
  ShoppingCart,
  Zap,
  Wrench,
  Clock,
  Target,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import TrustedPartnersCarousel from "@/components/TrustedPartnersCarousel";
import SEO from "@/components/SEO";

const heroBg = "/placeholder.svg";
const Kn = "/placeholder.svg";
const Golden = "/placeholder.svg";
const Big = "/placeholder.svg";
const aboutStory = "/placeholder.svg";
const pisTech = "/placeholder.svg";


const services = [
  {
    icon: FileText,
    title: "Audit & Assurance",
    description:
      "Statutory and private audits providing independent examination of financial statements with professional advisory services.",
  },
  {
    icon: BarChart3,
    title: "Tax Advisory",
    description:
      "Comprehensive tax preparation, planning, and consulting ensuring compliance with GRA requirements and optimizing your tax position.",
  },
  {
    icon: Briefcase,
    title: "Accounting Services",
    description:
      "Full-spectrum outsourced accounting including bookkeeping, payroll management, financial reporting, and CFO services.",
  },
  {
    icon: BarChart3,
    title: "Bookkeeping & Transaction Processing",
    description:
      "Comprehensive bookkeeping services, transaction processing, financial record management, and monthly reconciliation for accurate financial reporting.",
  },
  {
    icon: TrendingUp,
    title: "Data Analytics",
    description:
      "Executive dashboards, KPI modeling, revenue trend analysis, and predictive analytics using Power BI, Tableau, and Python.",
  },
  {
    icon: Users,
    title: "Business Advisory",
    description:
      "Strategic business planning, corporate restructuring, new business formation, and governance consulting.",
  },
];

const whyChoose = [
  { icon: Lightbulb, text: "Continuous Innovation" },
  { icon: Clock, text: "Effective Time Management" },
  { icon: Target, text: "Expert Efficiency" },
  { icon: CheckCircle2, text: "Customer Empathy" },
];

const projects = [
  {
    title: "KN Nyamekye Enterprise",
    summary: "A comprehensive microfinance management platform for loan processing, client management, and financial reporting",
    category: "Microfinance",
    image: Kn,
  },
  {
    title: "Golden Medals School",
    summary: "Full-featured school management system handling student records, grading, attendance, and administrative tasks.",
    category: "School Management System",
    image: Golden,
  },
  {
    title: "BigFish Restaurant",
    summary: "Modern POS system with real-time order management, inventory tracking, and sales analytics for the restaurant industry.",
    category: "POS System",
    image: Big,
  },
];

const industries = [
  { name: "Financial Institutions", icon: Landmark },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Manufacturing", icon: Factory },
  { name: "Government", icon: ShieldCheck },
  { name: "Construction", icon: HardHat },
  { name: "Retail & Trading", icon: ShoppingCart },
  { name: "Energy & Utilities", icon: Zap },
  { name: "Engineering Services", icon: Wrench },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Home"
        description="PIS Consultancy - Professional services including audit, tax advisory, accounting, bookkeeping, data analytics, and business consulting in Ghana."
        keywords="consulting, audit, tax advisory, accounting, bookkeeping, Ghana, professional services, business consulting"
        canonical="https://pisconsultancy.com"
        ogType="website"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <img src={heroBg} alt="PIS Consultancy Team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="orange-accent-line mb-8" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-6">
              Delivering <span className="text-gradient">Outstanding Value</span> Through Professional Excellence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
              A multidisciplinary consultancy providing end-to-end business, financial, digital, and governance solutions that empower organizations to achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-sm tracking-wide hover:bg-pis-orange-dark transition-colors duration-200"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <SectionWrapper className="bg-pis-warm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="orange-accent-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Strategic Partner for Business Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              PIS Consultancy, in partnership with SKH & Associates Chartered Accountants, is a multidisciplinary professional services firm providing end-to-end business, financial, digital, and governance solutions across multiple sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With expertise spanning accounting, audit, taxation, ICT solutions, cybersecurity, corporate advisory, HR recruitment, training, business registration, analytics, and industrial scanning — we position ourselves as a strategic partner that supports organizations to operate efficiently, remain compliant, and achieve sustainable growth.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <img src={aboutStory} alt="PIS Team" className="rounded-lg shadow-lg w-full" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden lg:block">
              <p className="font-display text-3xl font-bold">8+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Trusted Partners Carousel */}
      <SectionWrapper className="bg-pis-warm">
        <div className="text-center mb-12">
          <div className="orange-accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We collaborate with leading organizations to deliver exceptional results for our clients.
          </p>
        </div>
        <TrustedPartnersCarousel />
      </SectionWrapper>

      {/* Core Services */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="orange-accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to strengthen your business's financial efficiency, compliance, and operational excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose PIS */}
      <SectionWrapper className="bg-pis-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="orange-accent-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Why Choose PIS Consultancy?
            </h2>
            <p className="text-pis-gray-dark leading-relaxed mb-8">
              By combining our expertise, experience, and the energy of our staff, each client receives close personal and professional attention. Our high standards, service, and specialized staff spell the difference between outstanding performance and other firms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChoose.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <p className="font-display text-4xl font-bold text-primary">100+</p>
              <p className="text-pis-gray-dark text-sm mt-2">Client Companies</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <p className="font-display text-4xl font-bold text-primary">8+</p>
              <p className="text-pis-gray-dark text-sm mt-2">Years Experience</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <p className="font-display text-4xl font-bold text-primary">20+</p>
              <p className="text-pis-gray-dark text-sm mt-2">Expert Team</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <p className="font-display text-4xl font-bold text-primary">10+</p>
              <p className="text-pis-gray-dark text-sm mt-2">Service Lines</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="orange-accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of engagements demonstrating our expertise across diverse sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-sm tracking-wide hover:bg-pis-orange-dark transition-colors duration-200"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper className="bg-pis-warm">
        <div className="text-center mb-16">
          <div className="orange-accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Partnering with organizations across sectors to deliver tailored professional services.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-card border border-border rounded-lg p-6 text-center card-hover"
            >
              <industry.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-foreground text-sm">{industry.name}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* PiS Technologies */}
      <SectionWrapper className="bg-pis-warm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="orange-accent-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Discover PiS Technologies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our innovative subsidiary company, PiS Technologies, specializes in designing and delivering cutting-edge software solutions tailored to address the evolving needs of modern businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From enterprise resource planning systems to industry-specific applications, we harness the power of technology to streamline operations, enhance productivity, and unlock new growth opportunities for our clients across all sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a focus on innovation, scalability, and user-centric design, PiS Technologies delivers solutions that integrate seamlessly with our professional services, creating comprehensive business transformation experiences.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-sm tracking-wide hover:bg-pis-orange-dark transition-colors duration-200"
            >
              Explore PiS Technologies <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <img src={pisTech} alt="PiS Technologies Team" className="rounded-lg shadow-lg w-full" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden lg:block">
              <p className="font-display text-3xl font-bold">Digital</p>
              <p className="text-sm">Transformation</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner />

      <Footer />
    </div>
  );
};

export default Index;
