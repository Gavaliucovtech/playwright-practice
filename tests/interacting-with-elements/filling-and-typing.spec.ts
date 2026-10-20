import { test } from "@playwright/test";

test("Filling & Typing", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Filling Input Field
  await page.fill("#username", "myUsername");

  //line 7 and 11 are the same!

  // await page.locator("username").fill("myUsername");

  // Typing Input Field

  await page
    .locator("#email")
    .pressSequentially("qa@tester.com", { delay: 300 });
});
