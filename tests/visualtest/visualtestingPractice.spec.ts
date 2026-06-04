import { test, expect } from '@playwright/test';

test('Verify the Visual Testing of Mypayroll login page', async ({ page }) => {

    test.setTimeout(60000);

    await page.goto("https://myschoolone.com/hisp");
    await page.waitForLoadState('networkidle');

    expect(await page.screenshot()).toMatchSnapshot("loginpage.png");

    // Use .first() to handle multiple matching elements
    const logoofmyschoolone = page.locator("img[alt='MySchoolOne']").first();
    await expect(logoofmyschoolone).toBeVisible();
    await expect(await logoofmyschoolone.screenshot()).toMatchSnapshot("logoofmyschoolone.png");

});