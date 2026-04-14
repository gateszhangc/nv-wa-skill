import { expect, test } from "@playwright/test";

test("nuwa homepage shows the new brand, install flow, and canonical metadata", async ({
  page,
}) => {
  await page.goto("/zh");

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

  await expect(page.locator("body")).not.toContainText("EasyClaw");
  await expect(page.locator("body")).not.toContainText("support@easyclaw.pro");
});

test("legal pages use the new brand copy", async ({ page }) => {
  await page.goto("/zh/privacy-policy");
  await expect(page.getByRole("heading", { name: "女娲.skill 隐私政策" })).toBeVisible();
  await expect(page.locator("body")).not.toContainText("EasyClaw");

  await page.goto("/zh/terms-of-service");
  await expect(page.getByRole("heading", { name: "女娲.skill 使用条款" })).toBeVisible();
  await expect(page.locator("body")).not.toContainText("support@easyclaw.pro");
});
