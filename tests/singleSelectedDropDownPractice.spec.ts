import { test, expect, Locator } from '@playwright/test'

test('Verify the functionality of single selected dropdown', async ({ page }) => {
  // Navigate to the dropdown practice page
  await page.goto('https://practice.expandtesting.com/dropdown')

  // Step 1: Select option from first dropdown by visible text
  await page.locator('#dropdown').selectOption('Option 1')
  console.log('Selected: Option 1')

  // Step 2: Select option from country dropdown by index (position)
  await page.locator('#country').selectOption({ index: 6 })
  console.log('Selected country at index: 6')

  // Step 3: Get all dropdown options
  const dropdownOption: Locator = page.locator('#country > option')

  // Step 4: Verify total number of options in the dropdown
  await expect(dropdownOption).toHaveCount(252)
  console.log('Total options in country dropdown: 252')

  // Step 5: Get all option texts and trim whitespace
  const optionsText: string[] = (await dropdownOption.allTextContents())
    .map(text => text.trim())

  console.log('Sample options:', optionsText.slice(0, 5))

  // Step 6: Verify Madagascar exists in the dropdown
  expect(optionsText).toContain('Madagascar')
  console.log('Madagascar found in dropdown')

  // Step 7: Print all dropdown options to console
  console.log('All dropdown options:')
  for (const option of optionsText) {
    console.log('  - ' + option)
  }

  // Wait for visibility
  await page.waitForTimeout(6000)
})