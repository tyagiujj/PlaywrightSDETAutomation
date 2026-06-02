import { test, expect } from '@playwright/test'

// Test: Verify the page title
test('Verify page title', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://testautomationpractice.blogspot.com/')
  
  // Get the page title
  const pageTitle: string = await page.title()
  
  // Print the title in console for reference
  console.log('Page Title:', pageTitle)
  
  // Verify the page has the correct title
  await expect(page).toHaveTitle('Automation Testing Practice')
})