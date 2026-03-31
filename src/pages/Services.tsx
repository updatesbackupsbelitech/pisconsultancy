import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import servicesHero from "@/assets/services-hero.jpg";
import {
  FileText,
  BarChart3,
  Briefcase,
  Shield,
  TrendingUp,
  Users,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Database,
  ScanLine,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Audit & Assurance",
    description: "We are competent to act as statutory auditors as required by the Companies Code Act 992, 2019 of Ghana. Our audit services provide stockholders, government agencies, creditors, and private investors with assurance that financial statements accurately represent the true financial position of a company.",
    outcomes: [
      "Independent examination of financial statements",
      "Professional advisory on audited statements",
      "Physical inspections and inventory test counts",
      "Three levels of assurance: Audit, Review, and Compilation",
    ],
  },
  {
    icon: Briefcase,
    title: "Outsourced Accounting Services",
    description: "Customizable long-term or temporary accounting solutions that ensure the continuity and accuracy of financial records, allowing you to focus on operational needs without being distracted by day-to-day financial demands.",
    outcomes: [
      "General ledger maintenance and bookkeeping",
      "Payroll management and tax calculations",
      "Monthly/periodic financial reporting",
      "Accounting system design and software assistance",
      "CFO/Controller staffing services",
    ],
  },
  {
    icon: Calculator,
    title: "Tax Advisory Services",
    description: "Comprehensive tax preparation, planning, and consulting services ensuring compliance with Ghana Revenue Authority requirements. We handle PAYE, VAT, Withholding Tax, and Corporate Income Tax preparation and submission.",
    outcomes: [
      "Tax return preparation and submission",
      "Tax planning and optimization strategies",
      "Compliance with GRA requirements",
      "Healthcare-specific financial regulations",
    ],
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & Transaction Processing",
    description: "Day-to-day business transaction management including customer payments, bills, invoices, disbursements, and withdrawals. We maintain ledgers and produce daily or weekly reports according to client preference.",
    outcomes: [
      "Recording and classification of daily transactions",
      "Bank reconciliations and cash flow tracking",
      "Accounts Receivable and Payable management",
      "General ledger and sub-ledger maintenance",
    ],
  },
  {
    icon: BarChart3,
    title: "Financial Reporting & Analysis",
    description: "Comprehensive financial reporting including monthly, quarterly, and annual financial statements with departmental cost and revenue analysis, enabling management to make informed decisions.",
    outcomes: [
      "Income Statement, Balance Sheet, Cash Flow preparation",
      "Departmental cost and revenue analysis",
      "KPI tracking and variance analysis",
      "Long-term financial forecasting",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & IT Governance",
    description: "Our cybersecurity practice helps clients establish cyber-resilient environments through comprehensive assessments, testing, and governance policy development.",
    outcomes: [
      "Vulnerability assessments and penetration testing",
      "Network hardening and incident response",
      "Cyber governance policies",
      "Data protection compliance",
    ],
  },
  {
    icon: TrendingUp,
    title: "Data Analytics & Business Intelligence",
    description: "Using Power BI, Tableau, Excel BI, and Python-based analytics, we deliver actionable insights that drive strategic decision-making and operational efficiency.",
    outcomes: [
      "Executive dashboards and KPI modeling",
      "Revenue trend analysis",
      "Predictive analytics",
      "Data visualization for decision-making",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Internal Control & Audit Support",
    description: "Design and implementation of internal controls to prevent fraud and errors, with preparation of schedules and reports for external audits and donor fund accounting.",
    outcomes: [
      "Internal control system design",
      "Fraud prevention frameworks",
      "External audit preparation",
      "Donor fund accounting and reporting",
    ],
  },
  {
    icon: Users,
    title: "Business Planning & Advisory",
    description: "Strategic business planning services for new and existing businesses, including corporate restructuring, business formation, and governance consulting to minimize losses and increase efficiency.",
    outcomes: [
      "Business restructuring and re-engineering",
      "New business formation and registration",
      "Strategic planning and governance",
      "Management information improvement",
    ],
  },
  {
    icon: ScanLine,
    title: "Industrial Scanning & Asset Management",
    description: "Property, plant, and equipment verification, reconciliation, numbering, and industrial scanning services to maintain accurate asset records and optimize asset utilization.",
    outcomes: [
      "Asset verification and reconciliation",
      "Property and equipment numbering",
      "Stores and inventory control design",
      "Depreciation schedule management",
    ],
  },
  {
    icon: Database,
    title: "ERP & Digital Transformation",
    description: "We leverage QuickBooks, Sage, Zoho, ERP systems, workflow automation, cloud backup solutions, OCR, and digital archiving to modernize your business operations.",
    outcomes: [
      "ERP and workflow automation",
      "Cloud backup and digital archiving",
      "OCR document management",
      "Accounting software implementation",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive professional services designed to strengthen your business's financial efficiency, compliance, and operational excellence."
        image={servicesHero}
      />

      <SectionWrapper>
        <div className="space-y-20">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              </div>
              <div className={`bg-pis-warm rounded-lg p-8 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">Business Outcomes</h4>
                <ul className="space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default Services;
