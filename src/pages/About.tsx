import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import SEO from "@/components/SEO";
import { Shield, Eye, Target, Lightbulb, Users, CheckCircle2 } from "lucide-react";

const aboutHero = "/placeholder.svg";
const aboutStory = "/placeholder.svg";

const coreValues = [
  { icon: Shield, title: "Integrity", desc: "We operate with honesty, transparency, and the highest ethical standards." },
  { icon: Users, title: "Professionalism", desc: "Delivered through skilled experts and rigorous methodologies." },
  { icon: Eye, title: "Confidentiality", desc: "Ensuring secure and responsible handling of client information." },
  { icon: Lightbulb, title: "Innovation", desc: "Leveraging technology across all service lines for modern solutions." },
  { icon: Target, title: "Client-Centricity", desc: "Solutions are tailored, practical, and results-driven." },
];

const methodology = [
  { phase: "Phase 1", title: "Discovery & Diagnostic Review", items: ["Stakeholder engagement", "Baseline assessments", "Gap analysis", "Risk profiling"] },
  { phase: "Phase 2", title: "Design & Planning", items: ["Strategy formulation", "Workflow and system design", "Policy & SOP development"] },
  { phase: "Phase 3", title: "Implementation", items: ["On-site and remote support", "Automation and system deployment", "Capacity building"] },
  { phase: "Phase 4", title: "Monitoring & QA", items: ["Reporting dashboards", "Internal control tests", "Compliance updates"] },
  { phase: "Phase 5", title: "Continuous Improvement", items: ["Periodic reviews", "Optimization plans", "CEO/Board reporting"] },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Us"
        description="Learn about PIS Consultancy - A leading multidisciplinary professional services firm providing audit, tax, accounting, and business consulting services in Ghana."
        keywords="about PIS Consultancy, professional services, audit, tax advisory, accounting, business consulting, Ghana"
        canonical="https://pisconsultancy.com/about"
      />
      <Navbar />
      <PageHero
        title="About PIS Consultancy"
        subtitle="A values-led firm with a culture and ethos that is at the heart of everything we do."
        image="/images/about-hero.jpg"
      />

      {/* Company Story */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="orange-accent-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PIS Consultancy offers proven expertise in audit and assurance, tax advisory, bookkeeping, accounting and controller services, business reengineering, and liquidation and insolvency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Together with our affiliate, SKH & Associates Chartered Accountants, we provide wider coverage and participation, serving as a one-stop accounting firm to our existing and prospective clientele.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The cornerstone of our business philosophy is extensive and continued communication with our clients. We keep our clients in the loop at all stages with regular reports, accessible round the clock through dedicated servers using the most modern software and backup facilities.
            </p>
          </div>
          <div>
            <img src="/images/about-story.jpg" alt="PIS Team collaboration" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper className="bg-pis-warm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-10 border border-border">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              "To be the leading multidisciplinary consultancy in Africa, delivering innovative, technology-enabled business solutions that enhance corporate performance and sustainability."
            </p>
          </div>
          <div className="bg-card rounded-lg p-10 border border-border">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              "To provide tailored, high-quality professional services that empower clients to achieve excellence in financial management, compliance, governance, digital transformation, and human capital development."
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="orange-accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">The principles that guide every engagement and relationship.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((v) => (
            <div key={v.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Methodology */}
      <SectionWrapper className="bg-pis-black">
        <div className="text-center mb-16">
          <div className="orange-accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Our Strategic Approach</h2>
          <p className="text-pis-gray-dark max-w-2xl mx-auto text-lg">A proven five-phase methodology delivering consistent, measurable results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodology.map((m, i) => (
            <div key={m.phase} className={`bg-primary/5 rounded-lg p-8 border border-primary/10 ${i >= 3 ? "lg:col-span-1" : ""}`}>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">{m.phase}</span>
              <h4 className="font-display text-xl font-semibold text-primary-foreground mt-2 mb-4">{m.title}</h4>
              <ul className="space-y-2">
                {m.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-pis-gray-dark text-sm">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="orange-accent-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A formidable team of qualified professionals with diverse expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Adams Mohammed", role: "Founder & Managing Director", creds: "FCA, MBA, MSc, BSc", desc: "Fellow of ICAG with 9+ years experience across mining, pharmaceuticals, retail, construction, and environmental services." },
            { name: "Felix Mozawara Akpalu", role: "Managing Partner", creds: "FCA, MBA, HND, CIT, ACTI", desc: "Over 20 years experience in financial reporting, taxation, and financial accounts preparation. Fellow of the Institute of Chartered Accountants of Ghana." },
            { name: "Joachim Annan", role: "Head of Audit Services", creds: "FCA, BSc", desc: "Specialist in statutory audits, internal audits, and financial statement reviews with extensive experience in governance and compliance." },
            { name: "Angelina Bimpon", role: "Head of Accounting Services", creds: "BSc Accounting, ICAG Member", desc: "First-Class Honours graduate with 3+ years in Finance, Accounting and Auditing. Specialist in electronic audit systems." },
          ].map((member) => (
            <div key={member.name} className="bg-card border border-border rounded-lg p-8 card-hover">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground">{member.name}</h4>
              <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
              <p className="text-xs text-muted-foreground mb-3">{member.creds}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default About;
