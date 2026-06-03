import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log("this is Before Each....");
    await page.goto("https://www.saucedemo.com/");
});

test('Verify the title of the page', async ({ page }) => {
    const title: string = await page.title();
    await expect(title).toBe("Swag Labs");
});

test('Verify the url of the page', async ({ page }) => {
    const currentUrl: string = page.url();
    await expect(currentUrl).toBe("https://www.saucedemo.com/");
});

test.afterEach(async ({ page }) => {
    console.log("this is After Each....");
    await page.close();
});