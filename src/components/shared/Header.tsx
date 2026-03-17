"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, label: "Accueil", href: "/" },
    { id: 2, label: "À propos", href: "/about" },
    { id: 3, label: "Nature et Culture", href: "/nature" },
    { id: 4, label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`w-full px-6 lg:px-12 py-4 flex justify-between items-center gap-5 fixed bg-white/20 z-50 transition-all duration-300 ${scrolled || !isHome
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200/50"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        {/* LOGO */}
        <div>
          <Link href="/">
            <h1 className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${scrolled || !isHome ? "text-emerald-900" : "text-white"}`}>
              Niafrang<span className={scrolled || !isHome ? "text-emerald-500" : "text-emerald-300"}>.</span>
            </h1>
          </Link>
        </div>
        {/* button menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden cursor-pointer transition-colors duration-300 ${scrolled || !isHome ? "text-slate-900" : "text-white"}`}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-emerald-500 ${pathname === link.href
                    ? (scrolled || !isHome ? "text-emerald-600" : "text-emerald-300")
                    : (scrolled || !isHome ? "text-slate-600" : "text-white/90")
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>
          <nav
            className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-4 border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${pathname === link.href ? "bg-emerald-50 text-emerald-600" : "text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
