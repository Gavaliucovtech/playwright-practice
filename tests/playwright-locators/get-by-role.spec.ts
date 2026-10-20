import { test } from "@playwright/test";

test("getByRole()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("checkbox", { name: "Option 1" }).check();
  await page.getByRole("radio", { name: "Choice A" }).check();
  await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");

  //

  await page.getByRole("textbox", { name: "Username" }).fill("Alex");
  await page.getByRole("textbox", { name: "Search" }).fill("Grape");

  //

  await page.getByRole("heading", { name: "Welcom" }).isVisible();
  await page.getByRole("listitem", { name: "Laptop" }).isVisible();
  await page.getByRole("link", { name: "Example Website" }).click();
});
