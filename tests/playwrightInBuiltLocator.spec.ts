import { test, expect, Locator } from '@playwright/test'

test('Practice of Playwright inbuilt Locator', async ({ page }) => {
  // Navigate to the test website
  await page.goto('https://testautomationpractice.blogspot.com/')

  // Wait for page to fully load
  await page.waitForTimeout(5000)

  // Step 1: Verify heading text using getByText()
  const headingText: Locator = page.getByText('Automation Testing Practice')
  await expect(headingText).toBeVisible()

  // Step 2: Find and fill name field using getByPlaceholder()
  const nameField: Locator = page.getByPlaceholder('Enter Name')
  await expect(nameField).toBeVisible()
  await expect(nameField).toBeEnabled()
  await nameField.fill('Ujjwal Tyagi')

  // Step 3: Click Home link using getByRole()
  const homeLink: Locator = page.getByRole('link', { name: 'Home' }).first()
  await expect(homeLink).toBeVisible()
  await homeLink.click()

  // Step 4: Get page title
  const pageTitle: string = await page.title()
  console.log('Page Title:', pageTitle)
  await expect(page).toHaveTitle('Automation Testing Practice')

  // Step 5: Get page URL
  const pageUrl: string = page.url()
  console.log('Page URL:', pageUrl)
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

  // Wait for visibility
  await page.waitForTimeout(5000)
})