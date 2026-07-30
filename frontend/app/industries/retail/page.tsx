import {
  Car,
  HelpCircle,
  Home,
  Package,
  RotateCcw,
  ShoppingCart,
  Star,
  TrendingUp,
} from "lucide-react";
import { AgentLandingPage } from "@/components/marketing/AgentLandingPage";
import {
  HeroPanelFrame,
  PanelShell,
  FloatingSubCard,
  PanelHeader,
  ChecklistItem,
  StatTile,
  ScoreBadge,
} from "@/components/marketing/panels/HeroVisuals";

export default function RetailIndustryPage() {
  return (
    <AgentLandingPage
      eyebrow="Industry — Retail"
      headline="Handle Peak Season Like It's Any Other Tuesday"
      subheadline="From product questions to order tracking to returns, give every shopper an instant answer — even when volume spikes 10x for a holiday sale."
      trustLine="Built for retailers who can't staff up for Black Friday and staff down in January"
      heroVisual={
        <HeroPanelFrame>
          <PanelShell>
            <PanelHeader title="Order #10492" status="Processing" />
            <div className="mt-4 space-y-2">
              <ChecklistItem label="Order confirmed" />
              <ChecklistItem label="Refund processed to original payment" />
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <StatTile value="$86.40" label="Order total" />
            </div>
          </PanelShell>
          <FloatingSubCard position="bottom-right">
            <ScoreBadge value="10x" label="Peak traffic handled" />
          </FloatingSubCard>
        </HeroPanelFrame>
      }
      problemHeading="Why Retail Support Buckles Under Its Own Success"
      problems={[
        {
          icon: <TrendingUp className="h-5 w-5" />,
          title: "Seasonal Spikes Break Fixed Staffing",
          body: "Hiring and training seasonal reps for a six-week spike is expensive and still doesn't arrive in time for the first surge.",
        },
        {
          icon: <ShoppingCart className="h-5 w-5" />,
          title: "Shoppers Abandon Carts Waiting for Answers",
          body: "A simple sizing or shipping question left unanswered for ten minutes is often a lost sale, not just a delayed one.",
        },
        {
          icon: <Package className="h-5 w-5" />,
          title: "Post-Purchase Questions Flood the Same Queue as New Sales",
          body: "Return requests and 'where is my order' questions crowd out the reps who could be closing new sales.",
        },
      ]}
      whyHeading="Support That Scales the Moment Traffic Does"
      featureBlocks={[
        {
          eyebrow: "Elastic by Design",
          title: "Handles Black Friday Volume Like a Normal Day",
          body: "Conversation volume can spike tenfold without a queue forming or a wait time appearing.",
          checks: [
            "Scales instantly for seasonal traffic spikes",
            "No hiring or training cycle before a sale",
            "Consistent response time at any volume",
          ],
        },
        {
          eyebrow: "Pre-Purchase Assistance",
          title: "Answers the Question Before the Cart Gets Abandoned",
          body: "Sizing, shipping, and stock questions get answered in the moment a shopper is deciding.",
          checks: [
            "Answers product and sizing questions instantly",
            "Checks live inventory and shipping estimates",
            "Recovers carts with timely follow-up",
          ],
        },
        {
          eyebrow: "Post-Purchase Handled Separately",
          title: "Order Support Runs on Its Own Track",
          body: "Order tracking and returns are resolved automatically, freeing reps to focus on new sales.",
          checks: [
            "Resolves order-status and return requests automatically",
            "Keeps post-purchase volume from crowding out sales",
            "Escalates only genuinely complex cases",
          ],
        },
      ]}
      useCasesHeading="Where Retail Teams Put This to Work"
      useCases={[
        { icon: <HelpCircle className="h-4 w-4" />, tag: "Pre-Sale", title: "Product & Sizing Questions", body: "Answer specific product questions using live catalog data." },
        { icon: <Package className="h-4 w-4" />, tag: "Order", title: "Order Status & Tracking", body: "Resolve where-is-my-order requests without a human touching them." },
        { icon: <RotateCcw className="h-4 w-4" />, tag: "Returns", title: "Returns & Exchanges", body: "Process straightforward returns automatically, end to end." },
        { icon: <TrendingUp className="h-4 w-4" />, tag: "Seasonal", title: "Holiday Traffic Handling", body: "Absorb seasonal spikes without a temporary hiring push." },
        { icon: <ShoppingCart className="h-4 w-4" />, tag: "Cart", title: "Cart Recovery Outreach", body: "Follow up on abandoned carts with a real conversation, not just an email." },
        { icon: <Star className="h-4 w-4" />, tag: "Loyalty", title: "Loyalty & Rewards Questions", body: "Answer points-balance and rewards questions instantly." },
      ]}
      statsHeading="Numbers That Show Up During Peak Season"
      stats={[
        { value: "10x", label: "Traffic handled without a queue forming" },
        { value: "-50%", label: "Seasonal hiring needs" },
        { value: "<15s", label: "Average response during peak" },
        { value: "24/7", label: "Coverage through the entire sale" },
      ]}
      relatedHeading="Pairs Well With"
      relatedItems={[
        { icon: <Car className="h-4 w-4" />, title: "Automotive", tagline: "Another high-consideration purchase." },
        { icon: <Home className="h-4 w-4" />, title: "Real Estate", tagline: "Where browsing turns into a booking." },
      ]}
      ctaHeading="Ready for Peak Season to Feel Like Any Other Day?"
    />
  );
}
