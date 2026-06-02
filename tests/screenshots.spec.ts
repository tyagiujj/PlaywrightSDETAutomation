import { test, expect } from '@playwright/test'

test('screenshots demo', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/')

  const timestamp = Date.now()
  const screenshotDir = 'screenshots/'

  // Capture logo screenshot
  await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({
    path: `${screenshotDir}logo${timestamp}.png`
  })

  // Capture featured products screenshot
  await page.locator('.product-grid.home-page-product-grid').screenshot({
    path: `${screenshotDir}featuredproducts${timestamp}.png`
  })
})