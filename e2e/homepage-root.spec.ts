import { expect, test } from "@playwright/test";

test("root path resolves to the localized homepage", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBeTruthy();
  await expect(page).toHaveURL(/\/zh$/);
  await expect(
    page.getByRole("heading", {
      name: /把任何人的\s*思维方式蒸馏成可调用的 Skill/,
    })
  ).toBeVisible();
});
