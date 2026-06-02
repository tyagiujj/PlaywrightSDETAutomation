import { test, expect } from '@playwright/test'

test.describe('Example Test Suite', () => {
  // Test 1: Load website and verify title
  test('should load the Playwright website', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://playwright.dev')
    
    // Get the page title
    const title = await page.title()
    
    // Verify title contains 'Playwright'
    expect(title).toContain('Playwright')
  })

  // Test 2: Verify page heading is visible
  test('should verify page heading', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://playwright.dev')
    
    // Find the main heading element
    const heading = page.locator('h1')
    
    // Verify heading is visible on the page
    await expect(heading).toBeVisible()
  })

  // Test 3: Simple math calculation
  test('sample calculation test', async () => {
    // Perform calculation
    const result = 2 + 2
    
    // Verify result is 4
    expect(result).toBe(4)
  })
})
