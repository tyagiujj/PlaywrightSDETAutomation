import { test, expect, Locator } from '@playwright/test'

test('Practice of Basic Concepts of Playwright', async ({ page }) => {
  // Navigate to the test website
  await page.goto('https://testautomationpractice.blogspot.com/')

  // Step 1: Verify page title
  const title: string = await page.title()
  console.log('Page Title:', title)
  await expect(page).toHaveTitle('Automation Testing Practice')

  // Step 2: Verify page URL
  const url: string = await page.url()
  console.log('Page URL:', url)
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

  // Step 3: Verify heading text is visible
  const headingText: Locator = page.getByText('Automation Testing Practice')
  await expect(headingText).toBeVisible()

  // Step 4: Fill name field
  const nameField: Locator = page.getByPlaceholder('Enter Name')
  await expect(nameField).toBeEnabled()
  await nameField.fill('Ujjwal Tyagi')

  // Step 5: Fill email field
  const emailField: Locator = page.getByPlaceholder('Enter EMail')
  await expect(emailField).toBeEnabled()
  await emailField.fill('ujjwaltyagi9700@gmail.com')

  // Step 6: Fill phone field
  const phoneField: Locator = page.locator('#phone')
  await expect(phoneField).toBeEnabled()
  await phoneField.fill('9756360213')

  // Step 7: Select Male radio button
  const maleRadioButton: Locator = page.locator('#male')
  await expect(maleRadioButton).toBeEnabled()
  await maleRadioButton.click()
  await expect(maleRadioButton).toBeChecked()

  // Step 8: Check Sunday checkbox
  const sundayCheckBox: Locator = page.locator('#sunday')
  await expect(sundayCheckBox).toBeEnabled()
  await sundayCheckBox.click()
  await expect(sundayCheckBox).toBeChecked()

  // Step 9: Select country from dropdown
  await page.locator('#country').selectOption({ value: 'germany' })

  // Step 10: Handle alert dialog
  page.on('dialog', async dialog => {
    console.log('Alert Message:', dialog.message())
    // Accept the alert
    await dialog.accept()
  })

  // Click the alert button to trigger the dialog
  await page.locator('#alertBtn').click()
})