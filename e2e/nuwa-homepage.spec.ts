import { expect, test, type Page } from "@playwright/test";

async function gotoMetadataPage(page: Page, path: string) {
  await page.goto(path, { waitUntil: "domcontentloaded" });
}

async function expectNoLegacySeoMetadata(page: Page) {
  const title = await page.title();
  expect(title).not.toContain("EasyClaw");

  const description =
    (await page.locator('meta[name="description"]').getAttribute("content")) || "";
  expect(description).not.toContain("EasyClaw");
  expect(description).not.toContain("support@easyclaw.pro");

  const keywords =
    (await page.locator('meta[name="keywords"]').getAttribute("content")) || "";
  expect(keywords.toLowerCase()).not.toContain("easyclaw");
  expect(keywords.toLowerCase()).not.toContain("openclaw");
}

test("nuwa homepage shows the new brand, install flow, and canonical metadata", async ({
  page,
}) => {
  await gotoMetadataPage(page, "/zh");

  await expect(page).toHaveTitle(/女娲\.skill/);
  await expect(
    page.getByRole("heading", {
      name: /把任何人的\s*思维方式蒸馏成可调用的 Skill/,
    })
  ).toBeVisible();
  await expect(page.getByText("npx skills add alchaincyf/nuwa-skill")).toBeVisible();
  await expect(page.getByRole("link", { name: "查看 GitHub" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Nuwa Skill 品牌海报" })).toBeVisible();

  const canonicalHref = await page
    .locator('link[rel="canonical"]')
    .getAttribute("href");
  expect(canonicalHref).toMatch(/\/zh$/);

  await expectNoLegacySeoMetadata(page);
  await expect(page.locator("body")).not.toContainText("EasyClaw");
  await expect(page.locator("body")).not.toContainText("support@easyclaw.pro");
});

test("legal pages use the new brand copy", async ({ page }) => {
  await gotoMetadataPage(page, "/zh/privacy-policy");
  await expect(page.getByRole("heading", { name: "女娲.skill 隐私政策" })).toBeVisible();
  await expectNoLegacySeoMetadata(page);
  await expect(page.locator("body")).not.toContainText("EasyClaw");

  await gotoMetadataPage(page, "/zh/terms-of-service");
  await expect(page.getByRole("heading", { name: "女娲.skill 使用条款" })).toBeVisible();
  await expectNoLegacySeoMetadata(page);
  await expect(page.locator("body")).not.toContainText("support@easyclaw.pro");
});

test("showcase and blog pages no longer leak the legacy brand in SEO metadata", async ({
  page,
}) => {
  await gotoMetadataPage(page, "/zh/showcase");
  await expect(page).toHaveTitle(/女娲\.skill/);
  await expectNoLegacySeoMetadata(page);

  const showcaseCanonical = await page
    .locator('link[rel="canonical"]')
    .getAttribute("href");
  expect(showcaseCanonical).toMatch(/\/zh\/showcase$/);

  await gotoMetadataPage(page, "/zh/posts");
  await expect(page).toHaveTitle(/博客/);
  await expectNoLegacySeoMetadata(page);

  const postsCanonical = await page
    .locator('link[rel="canonical"]')
    .getAttribute("href");
  expect(postsCanonical).toMatch(/\/zh\/posts$/);
});
