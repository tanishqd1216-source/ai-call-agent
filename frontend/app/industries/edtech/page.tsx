import {
  BookOpen,
  Calendar,
  GraduationCap,
  HeartPulse,
  Hourglass,
  Receipt,
  Repeat,
  ShoppingCart,
  Stethoscope,
  Users,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function EdTechIndustryPage() {
  return (
    <AgentLandingPage
      eyebrow="Industry — EdTech"
      headline="Answer Every Student and Parent Question Before They Give Up and Call the Competition"
      subheadline="Handle enrollment questions, course logistics, and advising scheduling in real time — so an interested student doesn't lose momentum waiting for a callback."
      trustLine="Built for programs where enrollment decisions happen fast, or not at all"
      problemHeading="Why Interested Students Go Quiet Overnight"
      problems={[
        {
          icon: <Hourglass className="h-5 w-5" />,
          title: "Enrollment Windows Are Short",
          body: "A prospective student researching programs at 10pm won't still be interested by the time someone calls back Monday.",
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Advising Calendars Fill Up Fast",
          body: "By the time a student reaches a human to book advising time, the best slots are already gone.",
        },
        {
          icon: <Repeat className="h-5 w-5" />,
          title: "The Same Questions Get Asked Hundreds of Times",
          body: "Course prerequisites and program logistics questions repeat across hundreds of students, one at a time.",
        },
      ]}
      whyHeading="Momentum That Doesn't Wait for Office Hours"
      featureBlocks={[
        {
          eyebrow: "Responds When Interest Peaks",
          title: "Answers Enrollment Questions Instantly",
          body: "Prospective students get accurate answers about programs and requirements the moment they ask.",
          checks: [
            "Answers enrollment and program questions 24/7",
            "Captures interest before it fades overnight",
            "Hands off qualified prospects to admissions",
          ],
        },
        {
          eyebrow: "Books Advising in Real Time",
          title: "Fills the Calendar Without a Bottleneck",
          body: "Advising sessions get booked directly against real-time availability during the conversation.",
          checks: [
            "Books advising sessions against live availability",
            "Sends reminders to reduce no-shows",
            "Reschedules without another round of calls",
          ],
        },
        {
          eyebrow: "Consistent Answers at Scale",
          title: "The Same Accurate Answer, Every Single Time",
          body: "Course logistics and prerequisite questions get answered consistently, no matter how many students ask.",
          checks: [
            "Answers logistics questions consistently at scale",
            "Grounded in current course catalog data",
            "Escalates anything genuinely student-specific",
          ],
        },
      ]}
      useCasesHeading="Where Programs Put This to Work"
      useCases={[
        { icon: <GraduationCap className="h-4 w-4" />, tag: "Enrollment", title: "Prospective Student Inquiries", body: "Answer program and admissions questions the moment interest peaks." },
        { icon: <Calendar className="h-4 w-4" />, tag: "Advising", title: "Advising Session Booking", body: "Book advising time live, without a scheduling back-and-forth." },
        { icon: <BookOpen className="h-4 w-4" />, tag: "Logistics", title: "Course & Prerequisite Questions", body: "Answer logistics questions consistently, at any scale." },
        { icon: <HeartPulse className="h-4 w-4" />, tag: "Retention", title: "At-Risk Student Check-Ins", body: "Proactively check in with students showing signs of disengagement." },
        { icon: <Users className="h-4 w-4" />, tag: "Parents", title: "Parent & Guardian Support", body: "Handle parent questions about enrollment and billing directly." },
        { icon: <Receipt className="h-4 w-4" />, tag: "Financial Aid", title: "Financial Aid Questions", body: "Answer routine financial aid questions without a transfer." },
      ]}
      statsHeading="Numbers That Show Up in Enrollment"
      stats={[
        { value: "24/7", label: "Enrollment question coverage" },
        { value: "+35%", label: "Advising sessions booked from first contact" },
        { value: "0", label: "Interested students lost to a slow callback" },
        { value: "100%", label: "Consistent answers across every inquiry" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Stethoscope className="h-4 w-4" />, title: "Healthcare", tagline: "Another high-trust, high-touch relationship." },
        { icon: <ShoppingCart className="h-4 w-4" />, title: "Retail", tagline: "Another high-volume, time-sensitive inquiry flow." },
      ]}
      ctaHeading="Ready to Answer Every Student Before They Look Elsewhere?"
    />
  );
}
