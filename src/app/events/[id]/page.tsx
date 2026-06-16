import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import EventQuickDetails from "@/components/events/EventQuickDetails";
import { events, getEventById } from "@/lib/events";
import EventMediaSlider from "@/components/events/EventMediaSlider";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    return createPageMetadata({
      title: "Event Not Found",
      description: "The GlowRious event you are looking for could not be found.",
      path: `/events/${id}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${event.title} - ${event.category} on ${event.date}`,
    description: `${event.summary} Join GlowRious at ${event.venue} on ${event.date}.`,
    path: `/events/${event.id}`,
    image: event.defaultImage,
    imageAlt: `${event.title} by GlowRious`,
    keywords: [
      event.title,
      `GlowRious ${event.category}`,
      event.location,
      event.venue,
      ...event.tags,
    ],
  });
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  const hasSlider = event.images.length > 1;

  return (
    <div className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/95 p-8 shadow-xl shadow-slate-900/5">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Event details</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {event.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                {event.summary}
              </p>
            </div>
            <Link
              href="/events"
              aria-label="Back to events"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M12 16l-6-6 6-6" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="space-y-8">
              <Card className="overflow-hidden border border-slate-200/70 bg-white/95 shadow-lg transition duration-500 hover:shadow-2xl hover:shadow-slate-900/10">
                <EventMediaSlider images={event.images} title={event.title} />
              </Card>
            </div>

            <Card className="border border-slate-200/70 bg-white/95 shadow-lg transition duration-500 hover:shadow-2xl hover:shadow-slate-900/10">
              <CardHeader className="space-y-3 px-6 pt-6 pb-0">
                <CardTitle className="text-2xl">About this event</CardTitle>
                <CardDescription>All the context, benefits, and reasons to attend.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 px-6 pb-6">
                <div className="space-y-4 text-slate-700">
                  <p>{event.description}</p>
                  <p>
                    Expect an engaging experience with expert demonstrations, practical tips, and hands-on moments designed to help you leave
                    with actionable beauty and wellness routines.
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">What makes this event special</h3>
                    <p className="text-sm leading-7 text-slate-600">
                      This event blends immersive learning with real-time product exploration, expert guidance, and a community atmosphere for
                      long-lasting results.
                    </p>
                    <ul className="mt-3 grid gap-2 pl-5 text-sm leading-7 text-slate-600">
                      {event.highlights.map((highlight) => (
                        <li key={highlight}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <EventQuickDetails event={event} />
          </div>
        </div>
      </div>
    </div>
  );
}
