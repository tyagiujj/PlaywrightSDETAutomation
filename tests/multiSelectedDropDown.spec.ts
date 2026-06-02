import { test, expect, Locator } from '@playwright/test'

test('Multi Select Drop down', async ({ page }) => {
  // Navigate to the test website
  await page.goto('https://testautomationpractice.blogspot.com/')

  // Step 1: Select multiple options from dropdown
  // Method 1: Select by visible text (most common)
  await page.locator('#colors').selectOption(['Red', 'Blue', 'Green'])
  
  // Method 2: Select by value attribute
  // await page.locator('#colors').selectOption(['red', 'green', 'white'])
  
  // Method 3: Select by label
  // await page.locator('#colors').selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Yellow' }])
  
  // Method 4: Select by index (position)
  // await page.locator('#colors').selectOption([{ index: 0 }, { index: 2 }, { index: 4 }])

  // Step 2: Get all dropdown options
  const dropdownOptions: Locator = page.locator('#colors>option')
  
  // Step 3: Verify total number of options in the dropdown
  await expect(dropdownOptions).toHaveCount(7)
  console.log('Total options in dropdown: 7')

  // Step 4: Get all option texts and trim whitespace
  const optionsText: string[] = (await dropdownOptions.allTextContents())
    .map(text => text.trim())
  
  console.log('All dropdown options:', optionsText)

  // Step 5: Verify Green exists in the dropdown
  expect(optionsText).toContain('Green')

  // Step 6: Print all dropdown options to console
  console.log('Dropdown options:')
  for (const option of optionsText) {
    console.log('  - ' + option)
  }

  // Wait for visibility
  await page.waitForTimeout(5000)
})