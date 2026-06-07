"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Event } from "@/lib/events";

type Props = {
  event: Event;
};

export default function EventQuickDetails({ event }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <Card className="border border-slate-200/70 bg-white/95 shadow-lg transition duration-500 hover:shadow-2xl hover:shadow-slate-900/10">
      <CardHeader className="items-start gap-3 px-6 pt-6 pb-0">
        <div className="space-y-3">
          <CardTitle className="text-xl">Quick details</CardTitle>
          <CardDescription>Essential information at a glance.</CardDescription>
        </div>
        <CardAction className="self-start">
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-lg font-semibold text-slate-700 transition duration-300 hover:bg-slate-100"
            aria-expanded={open}
            aria-label={open ? "Collapse quick details" : "Expand quick details"}
          >
            {open ? "−" : "+"}
          </button>
        </CardAction>
      </CardHeader>

      <div className={`overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <CardContent className="space-y-3 px-6 pb-6 text-slate-700">
          <div className="grid gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Date & time</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">{event.date} · {event.time}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Organizer</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">{event.organizer}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Admission</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">Free entry</p>
              <p className="text-xs leading-5 text-slate-500">{event.ticketsAvailable}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Contact</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">{event.contactEmail}</p>
              <p className="text-xs leading-5 text-slate-500">{event.contactPhone}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Schedule</p>
              <div className="mt-2 space-y-2 rounded-3xl bg-slate-50 p-3 text-[13px]">
                {event.schedule.map((item) => (
                  <div key={`${item.time}-${item.activity}`}>
                    <p className="font-semibold text-slate-950">{item.time}</p>
                    <p className="text-xs text-slate-600">{item.activity}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Event location</p>
              <div className="mt-2 rounded-3xl bg-slate-50 p-3 text-[13px]">
                <p className="font-semibold text-slate-950">{event.venue}</p>
                <p className="text-xs leading-5 text-slate-600">{event.location}</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Tags</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="uppercase tracking-[0.24em]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
