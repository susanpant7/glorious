import type { Metadata } from "next";
import { EventCard } from "@/components/events/EventCard";
import { events } from "@/lib/events";
import type { Event } from "@/lib/events";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Beauty Events, Skincare Workshops & Glow Experiences",
  description:
    "Explore GlowRious product launches, skincare workshops, beauty masterclasses, webinars, retreats, and glow-focused experiences.",
  path: "/events",
  keywords: [
    "GlowRious events",
    "skincare workshops",
    "beauty masterclass",
    "skin health webinar",
    "beauty events Nepal",
  ],
});

const eventIds = ["skincare-launch", "makeup-masterclass", "skin-health-webinar"];
const experienceIds = ["wellness-weekend", "sensory-salon-evening", "holiday-glow-studio"];

function pickEvents(ids: string[]) {
  return ids
    .map((id) => events.find((event) => event.id === id))
    .filter((event): event is Event => Boolean(event));
}

function EventSection({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Event[];
}) {
  return (
    <section>
      <div className="mb-8 flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">{eyebrow}</p>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">{title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{description}</p>
          </div>
          <p className="text-sm font-semibold text-slate-500">Showing {items.length} featured listings</p>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default function EventsPage() {
  const featuredEvents = pickEvents(eventIds);
  const featuredExperiences = pickEvents(experienceIds);

  return (
    <div className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Events</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Upcoming events & experiences
          </h1>
          <div className="mx-auto h-1.5 w-28 rounded-full bg-gradient-to-r from-amber-500 to-orange-400" />
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            Browse our curated calendar of workshops, launches, retreats, and expert sessions. Click any event to explore the full details, schedule, and event atmosphere.
          </p>
        </div>

        <div className="space-y-16">
          <EventSection
            eyebrow="Events"
            title="Featured Events"
            description="Join product launches, masterclasses, and expert-led sessions designed for learning, networking, and beauty discovery."
            items={featuredEvents}
          />

          <EventSection
            eyebrow="Experiences"
            title="Featured Experiences"
            description="Explore immersive GlowRious moments built around wellness, sensory rituals, and hands-on beauty inspiration."
            items={featuredExperiences}
          />
        </div>
      </div>
    </div>
  );
}
