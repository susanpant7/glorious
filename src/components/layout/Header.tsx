import { HeaderLogo, HeaderNav } from "./headerComponents";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}
