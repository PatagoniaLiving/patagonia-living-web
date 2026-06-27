"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

/**
 * Sticky mobile call-to-action. Hidden on desktop (CSS media query),
 * slides up once the visitor scrolls past the hero so the first
 * impression stays uncluttered.
 */
export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      // Hide again near the very bottom so it doesn't cover the footer CTA
      const nearBottom =
        window.innerHeight + window.scrollY >
        document.body.offsetHeight - 320;
      setShow(past && !nearBottom);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener"
      className={`float-cta${show ? " show" : ""}`}
      aria-label="Plan your trip on WhatsApp"
    >
      Plan My Trip
    </a>
  );
}
