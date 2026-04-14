import PrivacyPolicyContent from "@/app/(legal)/privacy-policy/page.mdx";
import { getSiteUrl } from "@/lib/site-url";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const pathname = "/privacy-policy";
  const isPrimaryLocale = locale === "zh";

  return {
    title: "隐私政策 | 女娲.skill",
    description:
      "了解 nv-wa-skill.lol 如何处理基础访问数据、站点统计和联系信息。",
    alternates: {
      canonical: getAbsoluteLocalizedUrl(siteUrl, "zh", pathname),
    },
    robots: isPrimaryLocale ? undefined : { index: false, follow: false },
  };
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
