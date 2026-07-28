import {
  Bell,
  Calendar,
  Handshake,
  Home,
  MessageSquare,
  Package,
  PhoneCall,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";

export default function AutomotiveIndustryPage() {
  return (
    <AgentLandingPage
      eyebrow="Industry — Automotive"
      headline="From First Inquiry to Service Reminder, One Agent Covers the Whole Relationship"
      subheadline="Handle sales inquiries, book test drives, schedule service appointments, and send maintenance reminders — without a customer ever hitting a dead-end phone tree."
      trustLine="Built for dealerships juggling sales, service, and parts on the same phone line"
      problemHeading="Why Dealership Phone Lines Stay Overloaded"
      problems={[
        {
          icon: <PhoneCall className="h-5 w-5" />,
          title: "Sales and Service Compete for the Same Phone Line",
          body: "A service reminder call and a new-lead inquiry often land in the exact same queue, with no way to prioritize.",
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Test Drive Booking Still Means Phone Tag",
          body: "A customer ready to book a test drive today often has to wait for a callback tomorrow.",
        },
        {
          icon: <Bell className="h-5 w-5" />,
          title: "Service Reminders Get Skipped When Staff Are Busy",
          body: "Proactive maintenance outreach is usually the first thing to slip when the service desk gets busy.",
        },
      ]}
      whyHeading="One Agent for the Entire Customer Relationship"
      featureBlocks={[
        {
          eyebrow: "Separates Sales From Service",
          title: "Two Journeys, One Agent, No Crossed Wires",
          body: "Sales inquiries and service requests are routed and handled distinctly from the very first sentence.",
          checks: [
            "Understands sales vs. service intent immediately",
            "Routes each to the right specialist when needed",
            "Never makes a buyer wait behind a service call",
          ],
        },
        {
          eyebrow: "Books in Real Time",
          title: "Test Drives and Service Slots, Booked on the Spot",
          body: "Availability is checked and booked live during the conversation, not followed up on later.",
          checks: [
            "Books test drives against real-time availability",
            "Schedules service appointments during the call",
            "Sends confirmations and reminders automatically",
          ],
        },
        {
          eyebrow: "Keeps the Relationship Going",
          title: "Proactive Outreach That Never Gets Deprioritized",
          body: "Maintenance reminders and follow-ups go out consistently, regardless of how busy the service desk is.",
          checks: [
            "Sends maintenance reminders on schedule, every time",
            "Follows up after service automatically",
            "Re-engages leads who went quiet",
          ],
        },
      ]}
      useCasesHeading="Where Dealerships Put This to Work"
      useCases={[
        { icon: <Handshake className="h-4 w-4" />, tag: "Sales", title: "New Lead Qualification", body: "Qualify inbound interest before it reaches a salesperson." },
        { icon: <Calendar className="h-4 w-4" />, tag: "Test Drive", title: "Test Drive Scheduling", body: "Book a test drive slot live, during the first conversation." },
        { icon: <Wrench className="h-4 w-4" />, tag: "Service", title: "Service Appointment Booking", body: "Schedule maintenance without a hold or a callback." },
        { icon: <Bell className="h-4 w-4" />, tag: "Reminders", title: "Maintenance Reminders", body: "Send timely reminders based on mileage or service history." },
        { icon: <Package className="h-4 w-4" />, tag: "Parts", title: "Parts Availability Questions", body: "Confirm part stock and pricing without a transfer." },
        { icon: <MessageSquare className="h-4 w-4" />, tag: "Follow-Up", title: "Post-Service Follow-Up", body: "Check in after a service visit and catch issues early." },
      ]}
      statsHeading="Numbers That Show Up Across Sales and Service"
      stats={[
        { value: "0", label: "Crossed wires between sales and service calls" },
        { value: "Live", label: "Test drive and service booking during the call" },
        { value: "100%", label: "Maintenance reminders sent on schedule" },
        { value: "+20%", label: "Service appointments booked on first contact" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <ShoppingCart className="h-4 w-4" />, title: "Retail", tagline: "Another browsing-to-purchase journey." },
        { icon: <Home className="h-4 w-4" />, title: "Real Estate", tagline: "Another big-ticket booking flow." },
      ]}
      ctaHeading="Ready for One Agent to Cover Sales and Service?"
    />
  );
}
