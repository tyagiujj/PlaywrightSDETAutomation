import { test, expect } from '@playwright/test'

test('Handle all alerts one by one', async ({ page }) => {
  // Navigate to the test website
  await page.goto('https://testautomationpractice.blogspot.com/')

  // Test 1: Simple Alert
  // Set up listener for the dialog
  page.once('dialog', async dialog => {
    // Print the alert message
    console.log('Simple Alert:', dialog.message())
    // Accept the alert (click OK button)
    await dialog.accept()
  })
  
  // Click the button that triggers the alert
  await page.locator('#alertBtn').click()

  // Test 2: Confirmation Alert
  // Set up listener for the dialog
  page.once('dialog', async dialog => {
    // Print the confirmation message
    console.log('Confirmation Alert:', dialog.message())
    // Accept the confirmation (click OK)
    // Use dialog.dismiss() to click Cancel instead
    await dialog.accept()
  })
  
  // Click the button that triggers the confirmation
  await page.locator('#confirmBtn').click()

  // Test 3: Prompt Alert
  // Set up listener for the dialog
  page.once('dialog', async dialog => {
    // Print the prompt message
    console.log('Prompt Alert:', dialog.message())
    // Accept the prompt and provide the answer
    await dialog.accept('Ujjwal Tyagi')
  })
  
  // Click the button that triggers the prompt
  await page.locator('#promptBtn').click()
})