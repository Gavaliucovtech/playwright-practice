import { test, expect } from "@playwright/test";

test("Check if element is visible", async ({ page }) => {
  // Navigate to the target website
  await page.goto("https://selectors-practice.onrender.com/");

  // Type into the input field
  const inputField = page.locator("#username");
  await inputField.fill("testuser@qa.com");

  // Verify the value of the input field
  const inputValue = await inputField.inputValue();
  expect(inputValue).toBe("testuser@qa.com");
});
