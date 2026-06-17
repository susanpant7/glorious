import Image from "next/image";
import { HeroProductSlider } from "./HeroProductSlider";
import { HeroActions } from "./heroComponents/HeroActions";
import { HeroIntro } from "./heroComponents/HeroIntro";

const heroBackgroundImage =
  "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781624189/Interview_wall_Flex_For_Website_rexctv.png";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <Image
        src={heroBackgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
        preload
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/72" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[400px] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.42)_0%,_rgba(245,158,11,0.18)_30%,rgba(15,23,42,0.18)_65%,transparent_100%)] opacity-95 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-6 py-8 sm:py-10 lg:grid-cols-[1fr_0.74fr] lg:py-10">
        <div className="max-w-2xl space-y-4">
          <HeroIntro />
          <HeroActions />
        </div>
        <HeroProductSlider />
      </div>
    </section>
  );
}
