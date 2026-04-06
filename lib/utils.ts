import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Service domain config — single source of truth */
export const SERVICES_CONFIG = [
  {
    id: "software-dev",
    name: "Software Development",
    shortName: "Software Dev",
    icon: "code-2",
    color: "#0066FF",
    colorRgb: "0, 102, 255",
    href: "/services/software-dev",
    dataAttr: "software",
  },
  {
    id: "web-mobile",
    name: "Web & Mobile Apps",
    shortName: "Web & Mobile",
    icon: "smartphone",
    color: "#7B2FFF",
    colorRgb: "123, 47, 255",
    href: "/services/web-mobile",
    dataAttr: "web-mobile",
  },
  {
    id: "automation",
    name: "Automation Services",
    shortName: "Automation",
    icon: "zap",
    color: "#00D4C8",
    colorRgb: "0, 212, 200",
    href: "/services/automation",
    dataAttr: "automation",
  },
  {
    id: "ai-services",
    name: "AI Services",
    shortName: "AI Services",
    icon: "brain",
    color: "#C8C8FF",
    colorRgb: "200, 200, 255",
    href: "/services/ai-services",
    dataAttr: "ai-services",
  },
  {
    id: "ai-ml",
    name: "AI / ML Engineering",
    shortName: "AI / ML",
    icon: "bot",
    color: "#FFB800",
    colorRgb: "255, 184, 0",
    href: "/services/ai-ml",
    dataAttr: "ai-ml",
  },
  {
    id: "accounting",
    name: "Accounting Services",
    shortName: "Accounting",
    icon: "bar-chart-3",
    color: "#00C896",
    colorRgb: "0, 200, 150",
    href: "/services/accounting",
    dataAttr: "accounting",
  },
  {
    id: "staffing",
    name: "Staffing Services",
    shortName: "Staffing",
    icon: "users",
    color: "#FF8C42",
    colorRgb: "255, 140, 66",
    href: "/services/staffing",
    dataAttr: "staffing",
  },
] as const;

export type ServiceId = (typeof SERVICES_CONFIG)[number]["id"];

/** Get service config by id */
export function getService(id: ServiceId) {
  return SERVICES_CONFIG.find((s) => s.id === id);
}

/** Format large numbers */
export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

/** Ease functions for GSAP/Framer Motion */
export const EASING = {
  smooth: [0.22, 1, 0.36, 1],
  spring: [0.175, 0.885, 0.32, 1.275],
  snap: [0.5, 0, 0.1, 1],
} as const;
