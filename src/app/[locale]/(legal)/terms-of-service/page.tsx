import TermsOfServiceContent from "@/app/(legal)/terms-of-service/page.mdx";
import { getSiteUrl } from "@/lib/site-url";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const pathname = "/terms-of-service";
  const isPrimaryLocale = locale === "zh";

  return {
    title: "使用条款 | 女娲.skill",
    description:
      "阅读 nv-wa-skill.lol 的使用条款、版权约束与免责声明。",
    alternates: {
      canonical: getAbsoluteLocalizedUrl(siteUrl, "zh", pathname),
    },
    robots: isPrimaryLocale ? undefined : { index: false, follow: false },
  };
}

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
