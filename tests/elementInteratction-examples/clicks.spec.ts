import { test } from "@playwright/test";

test(`clicks`, async ({ page }) => {
  const cupLocator = (drinkName: string) =>
    page.locator(`.cup-body[aria-label='${drinkName}']`);
  const titleLocator = (drinkName: string) =>
    page.locator(`//li/h4[text() = '${drinkName}']`);
  const navigationTabs = (title: string) =>
    page.locator(`//a[contains(text(), "${title}")]`);

  await page.goto("https://coffee-cart.app/");

  await navigationTabs("cart").click();

  await navigationTabs("menu").click();

  await cupLocator("Espresso").click();

  await titleLocator("Espresso ").dblclick();

  await cupLocator("Mocha").click({ button: "right" });

  await cupLocator("Mocha").click({ modifiers: ["Shift"] });

  await cupLocator("Flat White").click({ position: { x: 0, y: 0 } });

  await cupLocator("Flat White").hover();
});
