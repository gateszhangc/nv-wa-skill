import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PriceAliasPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const targetPath = locale === defaultLocale ? `/${defaultLocale}` : `/${locale}`;

  redirect(targetPath);
}
