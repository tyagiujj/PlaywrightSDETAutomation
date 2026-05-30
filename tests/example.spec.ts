import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
  test('should load the Playwright website', async ({ page }) => {
    await page.goto('https://playwright.dev');
    const title = await page.title();
    expect(title).toContain('Playwright');
  });

  test('should verify page heading', async ({ page }) => {
    await page.goto('https://playwright.dev');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('sample calculation test', async () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });
});
