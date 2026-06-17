import Image from "next/image";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start">
      <Image
        src="https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781711642/Logo_GlowRious-02_1_x9fl3m.png"
        alt="glowrious"
        width={280}
        height={90}
        className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-36 md:h-32 lg:h-40"
        priority
      />
    </div>
  );
}
