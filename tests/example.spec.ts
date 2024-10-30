import { test } from "@playwright/test";

test.describe("A: Runs children in parallel", () => {
  test.describe.configure({ mode: "parallel" });
  test("A1", async ({ page }) => {
    await page.waitForTimeout(3000);
    console.log("A1");
  });

  test("A2", async ({ page }) => {
    await page.waitForTimeout(3000);
    console.log("A2");
  });
});

test("B: Should run after 'A' but runs in parallel with 'A'", async ({
  page,
}) => {
  await page.waitForTimeout(3000);
  console.log("B");
});

test("C: Runs after 'B' as expected", async ({ page }) => {
  await page.waitForTimeout(3000);
  console.log("C");
});
