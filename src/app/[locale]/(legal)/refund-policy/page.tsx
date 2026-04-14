import RefundPolicyContent from "@/app/(legal)/refund-policy/page.mdx";
import { getSiteUrl } from "@/lib/site-url";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const pathname = "/refund-policy";
  const isPrimaryLocale = locale === "zh";

  return {
    title: "站点说明 | 女娲.skill",
    description:
      "说明 nv-wa-skill.lol 当前是否提供付费服务，以及未来的变更方式。",
    alternates: {
      canonical: getAbsoluteLocalizedUrl(siteUrl, "zh", pathname),
    },
    robots: isPrimaryLocale ? undefined : { index: false, follow: false },
  };
}

export default function RefundPolicyPage() {
  return <RefundPolicyContent />;
}
