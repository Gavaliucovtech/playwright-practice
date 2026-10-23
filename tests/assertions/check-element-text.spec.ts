import { test, expect } from "@playwright/test";

test("Check if element is visible", async ({ page }) => {
  // Navigate to the target website
  await page.goto("https://selectors-practice.onrender.com/");

  // verify the text content of the paragraph in the Text Section
  const textSectionParagraph = await page
    .locator("#textParagraph")
    .textContent();
  expect(textSectionParagraph).toContain("sample text");
});
