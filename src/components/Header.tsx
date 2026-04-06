"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/services", label: "診療案内" },
  { href: "/staff", label: "医師紹介" },
  { href: "/access", label: "アクセス" },
  { href: "/news", label: "お知らせ" },
  { href: "/reservation", label: "ご予約" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warm-border">
      <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg text-espresso tracking-[0.08em]">
          さくら内科
        </Link>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs text-sienna tracking-wider font-light hover:text-copper transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="メニュー">
          <svg className="w-5 h-5 text-espresso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="square" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden border-t border-warm-border bg-cream/95 backdrop-blur-md">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block px-8 py-3 text-xs text-sienna tracking-wider font-light hover:text-copper" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
