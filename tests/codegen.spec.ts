import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://myschoolone.com/hisp');
  await page.locator('#user_names').fill('AIS2798@25');
  await page.locator('#password').fill('BPM360');
  await expect(page.locator('#togglePassword')).toBeVisible();
  await page.getByRole('checkbox', { name: 'I\'m not a robot' }).check();
  await page.getByRole('link', { name: 'Sign In' }).click();
});