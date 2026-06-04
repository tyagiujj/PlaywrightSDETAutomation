import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {

    test.setTimeout(60000);

    await page.goto("https://demowebshop.tricentis.com/");
    // await page.goto("https://demowebshop.tricentis.com/register");

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // compare snapshot of the page

    // approach 1
    // expect(await page.screenshot()).toMatchSnapshot("homepage.png");

    // approach 2
    await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });

    // compare snapshot of the element

    const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
    await expect(await logo.screenshot()).toMatchSnapshot("logo.png");

});