import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Event } from "@/lib/events";

export function EventCard({ event }: { event: Event }) {
  return (
    <Link href={`/events/${event.id}`} className="group block">
      <Card className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-500 via-orange-400 to-fuchsia-500" />

        <div className="relative mx-6 -mt-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/10">
          <img
            src={event.defaultImage}
            alt={event.title}
            className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent px-5 py-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-300">{event.category}</p>
            <p className="mt-2 text-2xl font-semibold text-white drop-shadow-lg">{event.title}</p>
          </div>
        </div>

        <CardContent className="space-y-5 px-6 pb-0 pt-8">
          <div className="flex flex-wrap gap-2">
            {event.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="uppercase tracking-[0.24em]">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm leading-7 text-slate-600">{event.summary}</p>

          <div className="grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-100 px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">When</p>
              <p className="mt-2 text-sm font-semibold text-slate-950">{event.date}</p>
              <p className="text-xs text-slate-500">{event.time}</p>
            </div>
            <div className="rounded-3xl bg-slate-100 px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Where</p>
              <p className="mt-2 text-sm font-semibold text-slate-950">{event.location}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 bg-slate-50 px-6 py-4">
          <span className="text-sm font-semibold text-slate-950 transition duration-300 group-hover:text-amber-600">
            View details
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 group-hover:border-amber-500 group-hover:text-amber-700">
            RSVP
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
