import {
  Bell,
  Calendar,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  Pill,
  Receipt,
  Umbrella,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function HealthcareIndustryPage() {
  return (
    <AgentLandingPage
      eyebrow="Industry — Healthcare"
      headline="Every Patient Gets a Calm, Accurate Answer, Every Time"
      subheadline="Schedule appointments, handle prescription refill requests, and answer routine patient questions — with the patience and accuracy healthcare conversations actually require."
      trustLine="Built for practices where a rushed answer isn't acceptable"
      problemHeading="Why Routine Calls Crowd Out Urgent Care"
      problems={[
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Scheduling Calls Crowd Out Urgent Ones",
          body: "Routine appointment booking takes up phone lines that patients with urgent concerns are also trying to reach.",
        },
        {
          icon: <Pill className="h-5 w-5" />,
          title: "Refill Requests Pile Up Behind Other Calls",
          body: "A simple prescription refill request often waits behind calls that have nothing to do with medication.",
        },
        {
          icon: <HeartPulse className="h-5 w-5" />,
          title: "Sensitive Conversations Need a Careful Tone",
          body: "Patients calling about a health concern need patience and clarity, not a rushed, transactional exchange.",
        },
      ]}
      whyHeading="Care That's Efficient Without Feeling Rushed"
      featureBlocks={[
        {
          eyebrow: "Frees Up Lines for Urgent Care",
          title: "Routine Scheduling Handled Separately",
          body: "Appointment booking is handled automatically, keeping phone lines open for genuinely urgent calls.",
          checks: [
            "Books and reschedules appointments automatically",
            "Keeps urgent calls from waiting behind routine ones",
            "Syncs directly with practice scheduling systems",
          ],
        },
        {
          eyebrow: "Fast, Accurate Refill Handling",
          title: "Refill Requests Resolved Without the Wait",
          body: "Refill requests are captured accurately and routed to the right pharmacy or provider immediately.",
          checks: [
            "Captures refill requests accurately",
            "Routes to the correct provider or pharmacy",
            "Flags anything requiring provider review",
          ],
        },
        {
          eyebrow: "Tone Built for Healthcare",
          title: "Patient, Clear, and Careful by Default",
          body: "Conversations are paced and worded with the care a health-related call actually needs.",
          checks: [
            "Uses a calm, patient conversational pace",
            "Escalates sensitive concerns to a human immediately",
            "Handles patient data according to your compliance rules",
          ],
        },
      ]}
      useCasesHeading="Where Practices Put This to Work"
      useCases={[
        { icon: <Calendar className="h-4 w-4" />, tag: "Scheduling", title: "Appointment Scheduling", body: "Book, confirm, and reschedule appointments without tying up a phone line." },
        { icon: <Pill className="h-4 w-4" />, tag: "Refills", title: "Prescription Refill Requests", body: "Capture and route refill requests accurately and quickly." },
        { icon: <Bell className="h-4 w-4" />, tag: "Reminders", title: "Appointment Reminders", body: "Reduce no-shows with timely, clear reminders." },
        { icon: <ClipboardList className="h-4 w-4" />, tag: "Intake", title: "Pre-Visit Intake", body: "Collect intake information before the patient even arrives." },
        { icon: <Receipt className="h-4 w-4" />, tag: "Billing", title: "Billing & Insurance Questions", body: "Answer routine billing questions without a transfer." },
        { icon: <HeartPulse className="h-4 w-4" />, tag: "Follow-Up", title: "Post-Visit Follow-Up", body: "Check in after a visit and flag concerns for a provider." },
      ]}
      statsHeading="Numbers That Show Up in Patient Access"
      stats={[
        { value: "0", label: "Urgent calls waiting behind routine scheduling" },
        { value: "-60%", label: "No-show rate with proactive reminders" },
        { value: "24/7", label: "Availability for scheduling and refills" },
        { value: "100%", label: "Sensitive concerns escalated to a human" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Umbrella className="h-4 w-4" />, title: "Insurance", tagline: "Another claims-adjacent, sensitive domain." },
        { icon: <GraduationCap className="h-4 w-4" />, title: "EdTech", tagline: "Another high-trust, high-touch relationship." },
      ]}
      ctaHeading="Ready for Every Patient to Get a Calm, Accurate Answer?"
    />
  );
}
