import {
  Calendar,
  Car,
  ClipboardCheck,
  Home,
  Key,
  MessageSquare,
  Moon,
  ShoppingCart,
  TrendingDown,
  Users,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  HeroPanelFrame,
  PanelShell,
  FloatingSubCard,
  PanelHeader,
  StatTile,
  ChecklistItem,
  ScoreBadge,
} from "@/components/marketing/panels/HeroVisuals";

export default function RealEstateIndustryPage() {
  return (
    <AgentLandingPage
      eyebrow="Industry — Real Estate"
      headline="Never Lose a Lead Because a Listing Went Live at 9pm"
      subheadline="Answer property questions and book showings the moment a buyer is interested — even if that moment is a Sunday night, three hours after your office closed."
      trustLine="Built for agents who lose leads to whoever calls back first"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Property Match" status="New" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <StatTile value="$625K" label="List price" />
              <StatTile value="3" label="Showings booked" />
              <StatTile value="94%" label="Match score" />
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <ChecklistItem label="Viewing scheduled: Sat, 2:00 PM" />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <ScoreBadge value="Pre-approved" label="Buyer status" />
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why the Fastest Response Usually Wins the Lead"
      problems={[
        {
          icon: <Moon className="h-5 w-5" />,
          title: "Interest Peaks Outside Office Hours",
          body: "Most listing inquiries come in evenings and weekends, exactly when nobody's available to respond.",
        },
        {
          icon: <TrendingDown className="h-5 w-5" />,
          title: "The First Agent to Respond Usually Wins the Lead",
          body: "A buyer who doesn't hear back within the hour has usually already called the next listing.",
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "Qualifying Every Lead by Phone Doesn't Scale",
          body: "Agents can't personally screen every inquiry across every active listing.",
        },
      ]}
      whyHeading="A Response That Never Waits for Office Hours"
      featureBlocks={[
        {
          eyebrow: "Always-On Response",
          title: "Answers the Moment Interest Peaks",
          body: "Every inquiry gets an immediate, informed response, regardless of the hour.",
          checks: [
            "Responds to inquiries 24/7, including nights and weekends",
            "Answers detailed questions about any active listing",
            "Never lets a hot lead go cold overnight",
          ],
        },
        {
          eyebrow: "Instant Showing Booking",
          title: "Books a Showing Before the Buyer Moves On",
          body: "Available showing slots are checked and booked live, during the very first conversation.",
          checks: [
            "Books showings against real-time agent availability",
            "Sends confirmations and directions automatically",
            "Reschedules without another round of phone tag",
          ],
        },
        {
          eyebrow: "Pre-Qualifies Automatically",
          title: "Only Serious Buyers Reach an Agent's Calendar",
          body: "Budget, timeline, and financing status get captured before a showing is booked.",
          checks: [
            "Captures budget and timeline upfront",
            "Flags pre-approved buyers automatically",
            "Hands agents a qualified lead, not a cold one",
          ],
        },
      ]}
      useCasesHeading="Where Real Estate Teams Put This to Work"
      useCases={[
        { icon: <Home className="h-4 w-4" />, tag: "Inquiries", title: "Listing Question Response", body: "Answer detailed property questions instantly, any time a buyer is browsing." },
        { icon: <Calendar className="h-4 w-4" />, tag: "Showings", title: "Showing Scheduling", body: "Book a showing live, without a round of callback tag." },
        { icon: <ClipboardCheck className="h-4 w-4" />, tag: "Qualification", title: "Buyer Pre-Qualification", body: "Capture budget and timeline before a showing gets booked." },
        { icon: <Moon className="h-4 w-4" />, tag: "After-Hours", title: "After-Hours Lead Capture", body: "Respond to evening and weekend inquiries the moment they arrive." },
        { icon: <MessageSquare className="h-4 w-4" />, tag: "Follow-Up", title: "Open House Follow-Up", body: "Follow up with every open house visitor automatically." },
        { icon: <Key className="h-4 w-4" />, tag: "Renters", title: "Rental Inquiry Handling", body: "Handle high-volume rental inquiries without burying agents in calls." },
      ]}
      statsHeading="Numbers That Show Up in Closed Deals"
      stats={[
        { value: "24/7", label: "Response coverage, including nights and weekends" },
        { value: "<5 min", label: "Average response time to a new inquiry" },
        { value: "+40%", label: "Showings booked from first-contact leads" },
        { value: "0", label: "Leads lost to a slower competitor" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <ShoppingCart className="h-4 w-4" />, title: "Retail", tagline: "Another browsing-to-purchase journey." },
        { icon: <Car className="h-4 w-4" />, title: "Automotive", tagline: "Another big-ticket booking flow." },
      ]}
      ctaHeading="Ready to Stop Losing Leads to a Faster Callback?"
    />
  );
}
