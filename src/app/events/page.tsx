import { EventCard } from "@/components/events/EventCard";
import { events } from "@/lib/events";

export default function EventsPage() {
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

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
