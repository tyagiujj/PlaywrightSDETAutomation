import { test, expect } from '@playwright/test'

// Note: This is a generated test from Playwright Codegen
test('Fill demo request form', async ({ page }) => {
  // Navigate to the demo request page
  await page.goto('https://mypayroll.in/request-demo.html')
  
  // Verify the navigation logo is visible
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Awesome Image' })).toBeVisible()

  // Step 1: Fill company name field
  await page.getByRole('textbox', { name: 'Company name' }).fill('Stuti Technologies pvt ltd')

  // Step 2: Fill first name field
  await page.getByRole('textbox', { name: 'First name' }).fill('ujjwal')

  // Step 3: Fill last name field
  await page.getByRole('textbox', { name: 'Last name' }).fill('Tyagi')

  // Step 4: Fill role field
  await page.getByRole('textbox', { name: 'Your role with company' }).fill('MD')

  // Step 5: Fill email address field
  await page.getByRole('textbox', { name: 'Email address' }).fill('ujjwaltyagi9700@gmail.com')
})