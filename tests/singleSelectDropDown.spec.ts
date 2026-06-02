import { test, expect, Locator } from '@playwright/test'

test('Single Select Drop down', async ({ page }) => {
  // Navigate to the test website
  await page.goto('https://testautomationpractice.blogspot.com/')

  // Method 1: Select by visible text
  // await page.locator('#country').selectOption('India')
  
  // Method 2: Select by value attribute
  // await page.locator('#country').selectOption({ value: 'uk' })
  
  // Method 3: Select by label
  // await page.locator('#country').selectOption({ label: 'India' })
  
  // Method 4: Select by index (position)
  // await page.locator('#country').selectOption({ index: 3 })

  // Step 1: Get all dropdown options
  const dropdownOptions: Locator = page.locator('#country>option')
  
  // Step 2: Verify total number of options in the dropdown
  await expect(dropdownOptions).toHaveCount(10)
  console.log('Total options in dropdown: 10')

  // Step 3: Get all option texts and trim whitespace
  const optionsText: string[] = (await dropdownOptions.allTextContents())
    .map(text => text.trim())
  
  console.log('All dropdown options:', optionsText)

  // Step 4: Verify Japan exists in the dropdown
  expect(optionsText).toContain('Japan')

  // Step 5: Print all dropdown options to console
  console.log('Dropdown options:')
  for (const option of optionsText) {
    console.log('  - ' + option)
  }

  // Wait for visibility
  await page.waitForTimeout(3000)
})