import { test, expect } from '@playwright/test'

// Note: This is a generated test from Playwright Codegen
test('Login test for MySchoolOne', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://myschoolone.com/hisp')
  
  // Step 1: Fill in username field
  await page.locator('#user_names').fill('AIS2798@25')
  
  // Step 2: Fill in password field
  await page.locator('#password').fill('BPM360')
  
  // Step 3: Verify password toggle button is visible
  await expect(page.locator('#togglePassword')).toBeVisible()
  
  // Step 4: Check the "I'm not a robot" checkbox
  await page.getByRole('checkbox', { name: 'I\'m not a robot' }).check()
  
  // Step 5: Click the Sign In button
  await page.getByRole('link', { name: 'Sign In' }).click()
})