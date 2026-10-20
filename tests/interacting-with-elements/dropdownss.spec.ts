import { test } from "@playwright/test";

test("Dropdowns", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Scroll to Dropdown section
  await page.locator("#dropdownMenu").scrollIntoViewIfNeeded();

  //Select Blue from Dropdown
  await page.selectOption("#dropdownMenu", "Blue");

  // Wait for 2 seconds to observe the change

  await page.waitForTimeout(2000);

  //Select Blue from Dropdown
  await page.selectOption("#dropdownMenu", "Red");

  // Wait for 2 seconds to observe the change

  await page.waitForTimeout(2000);

  //Select Blue from Dropdown
  await page.selectOption("#dropdownMenu", "Green");

  // Wait for 2 seconds to observe the change

  await page.waitForTimeout(2000);
});
