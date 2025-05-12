import { useState } from "react";
import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/molecules/NavLink";

const sections = [
  { href: "#features", label: "주요 기능" },
  { href: "#how-it-works", label: "이용 방법" },
  { href: "#testimonials", label: "이용후기" },
  { href: "#pricing", label: "요금제" },
  { href: "#faq", label: "FAQ" },
];

export default function PromotionHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex space-x-8">
          {sections.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#download"
            className="bg-gradient-to-r from-frippy-blue to-frippy-green text-white px-6 py-2 rounded-full font-medium hover:shadow-md transition-all"
          >
            앱 다운로드
          </a>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-frippy-dark-gray"
          aria-label="모바일 메뉴 열기"
        >
          <i className="fas fa-bars text-xl" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md">
          {sections.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-frippy-dark-gray hover:text-frippy-blue font-medium transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#download"
            className="block w-full bg-gradient-to-r from-frippy-blue to-frippy-green text-white text-center px-4 py-2 rounded-full font-medium hover:shadow-lg"
          >
            앱 다운로드
          </a>
        </div>
      )}
    </header>
  );
}
