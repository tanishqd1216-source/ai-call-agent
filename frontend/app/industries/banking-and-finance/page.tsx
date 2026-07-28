import {
  Bell,
  CreditCard,
  FileCheck,
  FileText,
  Lock,
  ShieldAlert,
  Stethoscope,
  Umbrella,
  Wallet,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function BankingAndFinanceIndustryPage() {
  return (
    <AgentLandingPage
      eyebrow="Industry — Banking & Finance"
      headline="Secure Conversations That Move as Fast as Money Does"
      subheadline="Handle account questions, fraud alerts, and loan status updates with bank-grade verification — without making every customer wait on hold to check a balance."
      trustLine="Built for institutions where a compliance misstep isn't an option"
      problemHeading="Why Security and Speed Usually Trade Off"
      problems={[
        {
          icon: <Lock className="h-5 w-5" />,
          title: "Every Call Needs Verification First",
          body: "Basic account questions still require a lengthy identity check before anything gets answered.",
        },
        {
          icon: <ShieldAlert className="h-5 w-5" />,
          title: "Fraud Alerts Are Time-Sensitive",
          body: "A suspicious transaction alert that sits in a queue for twenty minutes defeats the purpose of alerting at all.",
        },
        {
          icon: <FileCheck className="h-5 w-5" />,
          title: "Compliance Requirements Slow Everything Down",
          body: "Required disclosures and scripted language make every call longer, and a missed one is a real regulatory risk.",
        },
      ]}
      whyHeading="Verified, Compliant, and Still Fast"
      featureBlocks={[
        {
          eyebrow: "Fast, Secure Verification",
          title: "Verifies Identity Without the Long Hold",
          body: "Multi-factor verification happens conversationally, in seconds, not minutes.",
          checks: [
            "Verifies identity in seconds, not minutes",
            "Supports multi-factor and knowledge-based checks",
            "Never proceeds without proper verification",
          ],
        },
        {
          eyebrow: "Time-Sensitive Alerts Handled First",
          title: "Responds to Fraud Alerts Immediately",
          body: "Suspicious activity conversations are prioritized and handled the moment they're needed.",
          checks: [
            "Handles fraud alerts with immediate priority",
            "Walks customers through next steps in real time",
            "Escalates confirmed fraud instantly",
          ],
        },
        {
          eyebrow: "Compliant by Default",
          title: "Every Required Disclosure, Every Time",
          body: "Scripts are built to meet regulatory requirements automatically, with a full record of every call.",
          checks: [
            "Delivers required disclosures every time",
            "Full audit trail of every conversation",
            "Built to your institution's compliance rules",
          ],
        },
      ]}
      useCasesHeading="Where Banking Teams Put This to Work"
      useCases={[
        { icon: <Wallet className="h-4 w-4" />, tag: "Accounts", title: "Balance & Transaction Inquiries", body: "Answer routine account questions after fast, secure verification." },
        { icon: <ShieldAlert className="h-4 w-4" />, tag: "Fraud", title: "Fraud Alert Response", body: "Walk customers through a suspicious transaction the moment it's flagged." },
        { icon: <FileText className="h-4 w-4" />, tag: "Loans", title: "Loan Status Updates", body: "Give applicants a real-time update without a callback." },
        { icon: <CreditCard className="h-4 w-4" />, tag: "Cards", title: "Card Activation & Replacement", body: "Activate or replace a card without a branch visit." },
        { icon: <FileCheck className="h-4 w-4" />, tag: "Compliance", title: "Regulated Disclosure Delivery", body: "Ensure every required disclosure is delivered, every time." },
        { icon: <Bell className="h-4 w-4" />, tag: "Collections", title: "Payment Reminders", body: "Send compliant payment reminders across voice and SMS." },
      ]}
      statsHeading="Numbers That Show Up in Risk and Speed Together"
      stats={[
        { value: "<30s", label: "Average identity verification time" },
        { value: "100%", label: "Required disclosures delivered" },
        { value: "Immediate", label: "Priority handling for fraud alerts" },
        { value: "100%", label: "Conversations logged for audit" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Umbrella className="h-4 w-4" />, title: "Insurance", tagline: "Another regulated, high-trust conversation." },
        { icon: <Stethoscope className="h-4 w-4" />, title: "Healthcare", tagline: "Another sensitive, compliance-heavy domain." },
      ]}
      ctaHeading="Ready for Security That Doesn't Cost You Speed?"
    />
  );
}
