import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mypayroll.in/request-demo.html');
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Awesome Image' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Company name' }).fill('Stuti ');
  
  await page.getByRole('textbox', { name: 'Company name' }).fill('Stuti Technologies pvt ltd');

  await page.getByRole('textbox', { name: 'First name' }).fill('ujjwal');

  await page.getByRole('textbox', { name: 'Last name' }).fill('Tyagi');

  await page.getByRole('textbox', { name: 'Your role with company' }).fill('MD');

  await page.getByRole('textbox', { name: 'Email address' }).fill('ujjwaltyagi9700@gmail.com');
});