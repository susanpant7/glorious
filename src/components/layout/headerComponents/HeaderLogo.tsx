import Link from "next/link";
import Image from "next/image";

export function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781273538/headerlogo_1_p64epf.png"
        alt="glowrious"
        width={160}
        height={80}
        className="h-14 w-auto object-contain sm:h-14"
        priority
      />
    </Link>
  );
}
