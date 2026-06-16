import { HeaderLogo, HeaderNav } from "./headerComponents";

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}
