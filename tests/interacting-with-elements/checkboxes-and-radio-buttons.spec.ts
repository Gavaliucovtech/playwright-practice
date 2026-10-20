import { expect, test } from "@playwright/test";

test("Checkboxes and radio buttons", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  const checkbox = page.getByRole("checkbox", { name: "Option 1" });
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();

  const radio = page.getByRole("radio", { name: "Choice A" });
  await radio.check();
  await expect(radio).toBeChecked();
});
