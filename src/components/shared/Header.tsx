"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, label: "Accueil", href: "/" },
    { id: 2, label: "À  propos", href: "/about" },
    { id: 3, label: "Nature et Culcute", href: "/nature" },
    { id: 4, label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full px-10 py-3 border-b border-b-gray-200 bg-white flex justify-between items-center gap-5 fixed z-50">
        {/* LOGO */}
        <div>
          <h1 className="text-2xl text-blue-950 font-black uppercase">
            NFG-TOURISME
          </h1>
        </div>
        {/* button menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden cursor-pointer"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-3">
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className="cursor-pointer">
                  {" "}
                  {link.label}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {isMenuOpen && (
        <nav className="w-full absolute top-14 px-10 py-3 bg-white shadow z-50">
          <ul className="space-y-1">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => setIsMenuOpen(false)}
                className="hover:bg-green-100 p-2 rounded-md"
              >
                <Link href={link.href}> {link.label} </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
