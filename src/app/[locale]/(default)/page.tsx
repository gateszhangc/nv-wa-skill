import NuwaSkillLanding from "@/components/landing/nuwa-skill-landing";
import { getSiteUrl } from "@/lib/site-url";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const canonicalUrl = getAbsoluteLocalizedUrl(siteUrl, "zh", "/");
  const isPrimaryLocale = locale === "zh";

  return {
    title: "女娲.skill | 把任何人的思维方式蒸馏成可调用的 Skill",
    description:
      "女娲.skill 通过调研、提炼与验证，把公开世界里的顶级头脑蒸馏成真正能调用的 Skill。不是复读名言，而是提炼认知操作系统。",
    keywords:
      "女娲 skill, nuwa skill, 蒸馏思维方式, 心智模型 skill, Claude Code skill, cognitive operating system, distill minds into skills",
    openGraph: {
      title: "女娲.skill",
      description:
        "把任何人的思维方式蒸馏成可调用的 Skill。研究、提炼、验证，再把认知框架写进一个真正能工作的入口。",
      url: canonicalUrl,
      siteName: "女娲.skill",
      locale: "zh_CN",
      type: "website",
      images: [
        {
          url: `${siteUrl}/brand/nuwa-og.png`,
          width: 1200,
          height: 630,
          alt: "女娲.skill Open Graph",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "女娲.skill",
      description:
        "不是复读名言，而是把一个人的认知操作系统蒸馏成可调用的 Skill。",
      images: [`${siteUrl}/brand/nuwa-og.png`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: isPrimaryLocale
      ? undefined
      : {
          index: false,
          follow: false,
        },
  };
}

export default function LandingPage() {
  return <NuwaSkillLanding />;
}
