import Image from "next/image";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start">
      <Image
        src="https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781273539/Logo_GlowRious_page-0001_gemjsg.png"
        alt="glowrious"
        width={280}
        height={90}
        className="h-24 w-auto object-contain sm:h-32"
        priority
      />
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
        Chasing your glow
      </p>
    </div>
  );
}
