import { test, expect, Locator } from '@playwright/test'

test('Concepts of Hard Assertion and Soft Assertion', async ({ page }) => {
  // Part 1: Hard Assertions
  // Hard assertions stop the test if they fail
  
  await page.goto('https://myschoolone.com/hisp')
  
  // These assertions will stop the test if they fail
  await expect(page).toHaveURL('https://myschoolone.com/hisp')
  await expect(page).toHaveTitle('MySchoolOne')
  
  const signInButton: Locator = page.getByText('Sign In')
  await expect(signInButton).toBeVisible()
  
  console.log('Hard Assertions Passed - Test continues')

  // Part 2: Soft Assertions
  // Soft assertions do NOT stop the test if they fail
  
  await page.goto('https://testautomationpractice.blogspot.com/')
  
  // These soft assertions will NOT stop the test even if they fail
  await expect.soft(page).toHaveURL('https://testautomationpractice.blogspot.com/')
  await expect.soft(page).toHaveTitle('Automation Testing Practice')
  
  console.log('Soft Assertions completed - Test continues even after failures')
})