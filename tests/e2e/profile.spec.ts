import { expect, test } from "@playwright/test";

test("the page shows who I am and every project", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByTestId("title").locator(".line")).toHaveCount(2);
  await expect(page.getByText("Dynamics 365 CE / Power Platform Developer")).toBeVisible();
  await expect(page.getByTestId("dir-count")).toHaveText("9");
  await expect(page.getByTestId("project-row")).toHaveCount(9);
});

test("the filters narrow the register", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Fintech" }).click();
  await expect(page.getByTestId("dir-count")).toHaveText("2");
  await page.getByRole("button", { name: "Business apps" }).click();
  await expect(page.getByTestId("project-row")).toHaveCount(2);
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.getByTestId("dir-count")).toHaveText("9");
});

test("a row opens to show the engineering decisions", async ({ page }) => {
  await page.goto("/");
  const row = page.getByTestId("project-row").filter({ hasText: "Authly" });
  await row.locator("summary").click();
  await expect(row.getByText("Engineering decisions")).toBeVisible();
});

test("the company is never named and no country sits beside an employer", async ({ page }) => {
  await page.goto("/");
  const text = await page.locator("body").innerText();
  expect(text).not.toMatch(/crud\s*savvy/i);
  for (const org of await page.locator(".org").allInnerTexts()) expect(org).not.toMatch(/UK|Nigeria|·/);
});

test("the open-to-roles badge and the CV button stay hidden until switched on", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByTestId("open-to-roles")).toHaveCount(0);
  await expect(page.getByTestId("cv-download")).toHaveCount(0);
});

test("the page fits a phone", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
