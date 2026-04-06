import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { BarChart3, BookOpen, ClipboardList, Receipt, DollarSign, Briefcase, Search, Waves, Ruler } from "lucide-react";

export const metadata = {
  title: "Accounting Services — LucenEdge",
  description: "Bookkeeping, tax planning, CFO-as-a-Service, payroll, and financial consulting.",
};

export default function AccountingPage() {
  return (
    <ServicePageLayout
      serviceId="accounting"
      name="Accounting Services"
      icon={<BarChart3 size={28} color="#00C896" strokeWidth={1.5} />}
      color="#00C896"
      colorRgb="0, 200, 150"
      tagline={`Financial clarity that\nfuels your growth.`}
      description="Precision financial management for businesses that are serious about growth. From clean books to strategic CFO counsel — we give founders and executives the financial intelligence they need to make confident decisions."
      stats={[
        { value: "$12.4M", label: "Client savings" },
        { value: "100%", label: "Compliance rate" },
        { value: "48hrs", label: "Monthly close time" },
      ]}
      microServices={[
        { name: "Bookkeeping", icon: <BookOpen size={22} color="#00C896" strokeWidth={1.5} />, description: "Accurate, up-to-date books maintained on your preferred platform — QuickBooks, Xero, or NetSuite." },
        { name: "Financial Reporting", icon: <ClipboardList size={22} color="#00C896" strokeWidth={1.5} />, description: "Monthly P&L, balance sheet, and cash flow statements with management commentary and insights." },
        { name: "Tax Planning & Compliance", icon: <Receipt size={22} color="#00C896" strokeWidth={1.5} />, description: "Proactive tax strategy, multi-jurisdiction compliance, and timely filing — zero surprise bills." },
        { name: "Payroll Processing", icon: <DollarSign size={22} color="#00C896" strokeWidth={1.5} />, description: "Fully managed payroll with tax withholding, benefits deductions, and direct deposit for any team size." },
        { name: "CFO-as-a-Service", icon: <Briefcase size={22} color="#00C896" strokeWidth={1.5} />, description: "Fractional CFO support — fundraising readiness, board reporting, financial modeling, and M&A prep." },
        { name: "Audit Support", icon: <Search size={22} color="#00C896" strokeWidth={1.5} />, description: "Audit preparation, documentation management, and liaison with external auditors." },
        { name: "Cash Flow Management", icon: <Waves size={22} color="#00C896" strokeWidth={1.5} />, description: "13-week cash flow forecasting, receivables acceleration, and working capital optimization." },
        { name: "Business Financial Consulting", icon: <Ruler size={22} color="#00C896" strokeWidth={1.5} />, description: "Scenario modeling, unit economics analysis, and financial strategy for critical business decisions." },
      ]}
      processSteps={[
        { step: "01", title: "Financial Audit", desc: "Comprehensive review of current books, processes, and compliance status." },
        { step: "02", title: "Clean & Reconcile", desc: "Catch-up bookkeeping, bank reconciliation, and chart of accounts optimization." },
        { step: "03", title: "Systems Setup", desc: "Accounting software configuration, integrations, and automated workflows." },
        { step: "04", title: "Monthly Cadence", desc: "Regular close cycle, reporting delivery, and finance team meetings." },
        { step: "05", title: "Strategic Layer", desc: "Quarterly business reviews, financial modeling, and growth planning." },
      ]}
      caseStudy={{
        client: "HealthBridge",
        industry: "Healthcare SaaS",
        challenge: "HealthBridge was 9 months behind on their books, had no financial model, and was attempting to raise a Series A with investors asking for audited financials they didn't have.",
        result: "Our team completed a full catch-up in 6 weeks, built a 3-year financial model, and prepared investor-grade reporting packages. They closed their $4.2M Series A 4 months later.",
        metric: "$4.2M",
      }}
    />
  );
}
