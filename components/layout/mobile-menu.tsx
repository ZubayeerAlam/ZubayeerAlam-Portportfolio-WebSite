"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/components/ui/social-links";

/** Menu button and drop-down panel shown below the md breakpoint. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    // Close if the viewport grows past the mobile breakpoint.
    const desktop = window.matchMedia("(min-width: 768px)");
    function onBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-panel text-ink"
      >
        {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-canvas shadow-2xl shadow-black/40"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[1200px] px-5 pt-2 pb-6 sm:px-8">
          <ul className="flex flex-col">
            {siteConfig.nav.map((item) => (
              <li key={item.href} className="border-b border-line/70">
                <Link href={item.href} onClick={close} className="block py-4 text-lg font-semibold">
                  {item.label}
                </Link>
              </li>
            ))}
            {siteConfig.resumeAvailable && (
              <li className="border-b border-line/70">
                <a
                  href={siteConfig.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="block py-4 text-lg font-semibold"
                >
                  Download CV
                </a>
              </li>
            )}
          </ul>
          <SocialLinks className="mt-4 -ml-3" />
        </nav>
      </div>
    </div>
  );
}
