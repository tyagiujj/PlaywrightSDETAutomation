import { test, expect, Locator } from "@playwright/test";

test("Verify Drag and Drop, Double Click and Hover", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Drag and Drop
    const drag: Locator = page.locator("#draggable");
    const drop: Locator = page.locator("#droppable");

    await drag.dragTo(drop);

    await expect(drop).toContainText("Dropped!");

    // Double Click
    const doubleClick: Locator = page.getByText("Copy Text");

    await doubleClick.dblclick();


    // Mouse Hover
    const hover: Locator = page.getByText("Point Me");

    await hover.hover();

   const mobile = page.getByRole('link', { name: 'Mobiles' });

await mobile.click();

    await page.waitForTimeout(5000);

});