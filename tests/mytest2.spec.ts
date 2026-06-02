import { test, expect } from '@playwright/test'

// Test: Verify the page URL
test('Verify page URL', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://testautomationpractice.blogspot.com/')
  
  // Get the current page URL
  const pageUrl: string = page.url()
  
  // Print the URL in console for reference
  console.log('Page URL:', pageUrl)
  
  // Verify the page URL is correct
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
})