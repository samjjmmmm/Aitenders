// src/components/header.tsx
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import HubspotMeetingModal from "./HubspotMeetingModal";
import aitendersLogo from "@assets/Untitled(4)_1753712731718.png";

type NavItem = {
  title: string;
  href?: string;
  children?: NavItem[];
};

export default function Header() {
  const { t, i18n } = useTranslation();

  // --- State Management ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const languageMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // HubSpot form modal
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const HUBSPOT_PORTAL_ID = "8751172";
  const HUBSPOT_FORM_ID = "9721c1af-c7ab-4d10-b519-28c04d171007";
  const HUBSPOT_REGION = "na1";

  const openDemo = useCallback(() => setIsDemoOpen(true), []);
  const closeDemo = useCallback(() => setIsDemoOpen(false), []);

  // --- Dynamically load navigation from i18n JSON ---
  const allNavigationLinks = (t("header.navigation", { returnObjects: true }) || []) as NavItem[];
  const navigationLinks = allNavigationLinks.slice(0, 2);

  // --- Event Handlers ---
  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (languageMenuRef.current && !languageMenuRef.current.contains(target) && navRef.current && !navRef.current.contains(target)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMobileMenu = () => setIsMenuOpen((v) => !v);
  const closeMobileMenu = () => setIsMenuOpen(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="mx-3 mt-3 mb-2">
          <div className="mx-auto max-w-7xl rounded-full border bg-white/90 backdrop-blur shadow-md">
            <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center">
              <div className="flex items-center">
                <Link href="/" onClick={closeMobileMenu}>
                  <img src={aitendersLogo} alt="Aitenders" className="h-7 w-auto cursor-pointer" />
                </Link>
              </div>

              <nav className="hidden md:flex items-center gap-2 mr-auto ml-16" ref={navRef}>
                {navigationLinks.map((navItem) =>
                  navItem.children ? (
                    <div className="relative" key={navItem.title}>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(navItem.title)}
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        {navItem.title}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${activeDropdown === navItem.title ? "rotate-180" : ""}`}
                        />
                      </button>
                      {activeDropdown === navItem.title && (
                        <div className="absolute left-0 mt-2 w-72 rounded-xl border bg-white shadow-lg p-2">
                          {navItem.children.map((child) => (
                            <Link key={child.title} href={child.href || "#"} onClick={closeAllDropdowns}>
                              <div className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                                {child.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={navItem.title} href={navItem.href || "#"}>
                      <a className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                        {navItem.title}
                      </a>
                    </Link>
                  )
                )}
              </nav>

              <div className="flex items-center gap-2">
                <div className="relative" ref={languageMenuRef}>
                  <button
                    type="button"
                    onClick={() => setIsLanguageMenuOpen((v) => !v)}
                    className="inline-flex items-center gap-1 h-9 px-3 rounded-full border text-sm font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    {i18n.language.toUpperCase()}
                  </button>
                  {isLanguageMenuOpen && (
                    <div className="absolute right-0 mt-2 min-w-[160px] rounded-xl border bg-white shadow-lg p-1">
                      <button
                        onClick={() => handleLanguageChange("en")}
                        className={`w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${i18n.language === "en" ? "bg-gray-50" : ""}`}
                      >
                        🇬🇧 English
                      </button>
                      <button
                        onClick={() => handleLanguageChange("fr")}
                        className={`w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${i18n.language === "fr" ? "bg-gray-50" : ""}`}
                      >
                        🇫🇷 Français
                      </button>
                    </div>
                  )}
                </div>

                {/* --- COLOR CHANGE HERE --- */}
                <button
                  type="button"
                  onClick={openDemo}
                  className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
                >
                  {t("header.requestDemo")}
                </button>

                <Button variant="outline" size="icon" onClick={toggleMobileMenu} className="rounded-full md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        role="button"
        tabIndex={0}
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-[55] bg-black/40 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      <aside className={`fixed top-0 right-0 z-[60] h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-semibold">{t("header.menu")}</span>
            <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex-grow p-4 overflow-y-auto">
            {navigationLinks.map((navItem) => (
              <div className="mb-5" key={navItem.title}>
                <span className="block text-xs font-semibold text-gray-500 mb-2">
                  {navItem.title}
                </span>
                <ul>
                  {navItem.children ? (
                    navItem.children.map((child) => (
                      <li key={child.title}>
                        <Link href={child.href || "#"} onClick={closeMobileMenu} className="block py-2 text-sm text-gray-700">
                          {child.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <Link href={navItem.href || "#"} onClick={closeMobileMenu} className="block py-2 text-sm text-gray-700">
                        {navItem.title}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}

            {/* --- COLOR CHANGE HERE --- */}
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                openDemo();
              }}
              className="w-full mt-4 inline-flex items-center justify-center h-10 rounded-full bg-black text-white font-semibold text-sm hover:bg-gray-800 transition"
            >
              {t("header.requestDemo")}
            </button>
          </nav>
        </div>
      </aside>

      <HubspotMeetingModal
        id="hubspot-form-modal"
        isOpen={isDemoOpen}
        onClose={closeDemo}
        portalId={HUBSPOT_PORTAL_ID}
        formId={HUBSPOT_FORM_ID}
        region={HUBSPOT_REGION}
      />
    </>
  );
}