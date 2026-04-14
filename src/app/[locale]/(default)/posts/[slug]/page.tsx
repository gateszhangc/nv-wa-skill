import { PostStatus, findPostBySlug } from "@/models/post";
import { isDatabaseConfigured } from "@/db";

import BlogDetail from "@/components/blocks/blog-detail";
import Empty from "@/components/blocks/empty";
import { Post } from "@/types/post";
import { getSiteUrl } from "@/lib/site-url";
import {
  buildAlternateLanguageUrls,
  getAbsoluteLocalizedUrl,
} from "@/i18n/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const siteUrl = getSiteUrl();
  const pathname = `/posts/${slug}`;
  const canonicalUrl = getAbsoluteLocalizedUrl(siteUrl, locale, pathname);
  const languages = buildAlternateLanguageUrls(siteUrl, pathname);

  if (!isDatabaseConfigured()) {
    return {
      alternates: {
        canonical: canonicalUrl,
        languages,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const post = await findPostBySlug(slug, locale);

  return {
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    robots:
      post?.status === PostStatus.Online
        ? undefined
        : {
            index: false,
            follow: false,
          },
  };
}

export default async function ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isDatabaseConfigured()) {
    return (
      <Empty
        message={
          locale === "zh"
            ? "文章详情暂时不可用"
            : "Post details are temporarily unavailable"
        }
      />
    );
  }

  const post = await findPostBySlug(slug, locale);

  if (!post || post.status !== PostStatus.Online) {
    return <Empty message="Post not found" />;
  }

  return <BlogDetail post={post as unknown as Post} />;
}
