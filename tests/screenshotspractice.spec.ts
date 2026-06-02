import { expect, test } from '@playwright/test'

test('Verify the screenshots functionality', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://myschoolone.com/hisp')

  // Create a unique timestamp for each screenshot
  const timestamp = Date.now()
  
  // Capture full page screenshot and save it
  await page.screenshot({
    path: `screenshots/school${timestamp}.png`
  })
  
  console.log(`Screenshot saved: school${timestamp}.png`)
})