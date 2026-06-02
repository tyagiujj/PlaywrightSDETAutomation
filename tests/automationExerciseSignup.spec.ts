import { test, expect, Locator } from '@playwright/test'

test('Verify the Sign up functionality of Automation Exercise', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://automationexercise.com/login')

  // Step 1: Verify page URL
  const pageUrl: string = page.url()
  console.log('Page URL:', pageUrl)
  await expect(page).toHaveURL('https://automationexercise.com/login')

  // Step 2: Verify page title
  const pageTitle: string = await page.title()
  console.log('Page Title:', pageTitle)
  await expect(page).toHaveTitle('Automation Exercise - Signup / Login')

  // Step 3: Verify signup heading is visible
  const newSignupHeading: Locator = page.getByText('New User Signup!')
  await expect(newSignupHeading).toBeVisible()

  // Step 4: Fill in name field
  const nameField: Locator = page.getByPlaceholder('Name')
  await expect(nameField).toBeEnabled()
  await nameField.fill('Ujjwal Tyagi')

  // Step 5: Generate random email and fill email field
  const randomEmail = `ujjwal${Date.now()}@gmail.com`
  const emailField: Locator = page.locator('[data-qa="signup-email"]')
  await expect(emailField).toBeEnabled()
  await emailField.fill(randomEmail)
  console.log('Generated Email:', randomEmail)

  // Step 6: Click signup button
  const signupButton: Locator = page.locator('[data-qa="signup-button"]')
  await expect(signupButton).toBeVisible()
  await expect(signupButton).toBeEnabled()
  await signupButton.click()

  // Wait for the page to load after signup
  await page.waitForTimeout(5000)
})