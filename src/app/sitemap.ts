import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";

const PUBLIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "daily", priority: 1.0 },
  { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.6 },
  { path: "/terms-of-service", changeFrequency: "monthly", priority: 0.6 },
  { path: "/refund-policy", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();
  return PUBLIC_ROUTES.map((route) => ({
    url: getAbsoluteLocalizedUrl(siteUrl, "zh", route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
