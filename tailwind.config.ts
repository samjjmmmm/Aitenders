// tailwind.config.ts
import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssTypography from '@tailwindcss/typography';

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // --- THIS IS THE ONLY SECTION WE ARE CHANGING ---
      fontFamily: {
        // This sets 'Roboto' as the new default font for the `font-sans` utility class,
        // while keeping Tailwind's excellent fallback fonts.
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      // --- All other settings remain the same ---
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        popover: { DEFAULT: "var(--popover)", foreground: "var(--popover-foreground)" },
        primary: { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
        secondary: { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)" },
        muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        accent: { DEFAULT: "var(--accent)", foreground: "var(--accent-foreground)" },
        destructive: { DEFAULT: "var(--destructive)", foreground: "var(--destructive-foreground)" },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)", "2": "var(--chart-2)", "3": "var(--chart-3)", "4": "var(--chart-4)", "5": "var(--chart-5)",
        },
        aitenders: {
          "dark-blue": "var(--aitenders-dark-blue)", "white-blue": "var(--aitenders-white-blue)", "primary-blue": "var(--aitenders-primary-blue)", "pale-blue": "var(--aitenders-pale-blue)", "pastel-blue": "var(--aitenders-pastel-blue)", "light-blue": "var(--aitenders-light-blue)", "black": "var(--aitenders-black)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)", foreground: "var(--sidebar-foreground)", primary: "var(--sidebar-primary)", "primary-foreground": "var(--sidebar-primary-foreground)", accent: "var(--sidebar-accent)", "accent-foreground": "var(--sidebar-accent-foreground)", border: "var(--sidebar-border)", ring: "var(--sidebar-ring)",
        },
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    tailwindcssTypography,
  ],
} satisfies Config;