import Showcase from "@/components/blocks/showcase";
import { getShowcasePage } from "@/services/page";
import { getSiteUrl } from "@/lib/site-url";
import {
  buildAlternateLanguageUrls,
  getAbsoluteLocalizedUrl,
} from "@/i18n/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const title = locale === "zh" ? "效果示例 | 女娲.skill" : "Showcase | Nuwa.skill";

  return {
    title,
    alternates: {
      canonical: getAbsoluteLocalizedUrl(siteUrl, locale, "/showcase"),
      languages: buildAlternateLanguageUrls(siteUrl, "/showcase"),
    },
  };
}

export default async function ShowcasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getShowcasePage(locale);

  return <>{page.showcase && <Showcase section={page.showcase} />}</>;
}
