import { test, expect, Locator } from '@playwright/test'

test('Verify Playwright Locators', async ({ page }) => {
  // Navigate to the test website
  await page.goto('https://demo.nopcommerce.com/')

  // Locator 1: getByAltText() - Find elements by their alt attribute (images, etc.)
  // Use this for images and similar elements with alt text
  const logo: Locator = page.getByAltText('nopCommerce demo store')
  await expect(logo).toBeVisible()
  console.log('✓ Logo found using alt text')

  // Locator 2: getByText() - Find elements by their text content
  // Use for non-interactive elements like div, span, p, etc.
  // You can match exact text, substring, or regular expressions
  
  // Full text match
  // await expect(page.getByText('Welcome to our store')).toBeVisible()
  
  // Partial text match (substring)
  // await expect(page.getByText('Welcome to')).toBeVisible()
  
  // Regular expression match
  await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible()
  console.log('✓ Welcome text found using regex')

  // Navigate to register page
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

  // Locator 3: getByRole() - Find elements by their ARIA role
  // Use for interactive elements like buttons, links, headings, etc.
  // Follow W3C accessibility standards
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible()
  console.log('✓ Register heading found using role')

  // Locator 4: getByLabel() - Find form fields by their associated label text
  // Best for form controls with visible labels
  await page.getByLabel('First name:').fill('John')
  await page.getByLabel('Last name:').fill('Kenedy')
  await page.getByLabel('Email:').fill('abc@gmail.com')
  console.log('✓ Form fields filled using labels')

  // Locator 5: getByPlaceholder() - Find inputs by their placeholder text
  // Best for inputs without labels but having placeholder text
  await page.getByPlaceholder('Search store').fill('Apple MacBook Pro')
  console.log('✓ Search field filled using placeholder')

  // Locator 6: getByTitle() - Find elements by their title attribute
  // Use when elements have meaningful title attributes
  await page.goto('http://127.0.0.1:5500/tests/app.html')
  
  await expect(page.getByTitle('Home page link')).toHaveText('Home')
  await expect(page.getByTitle('HyperText Markup Language')).toHaveText('HTML')
  console.log('✓ Elements found using title attribute')

  // Locator 7: getByTestId() - Find elements by their data-testid attribute
  // Use when other locators are unstable or not suitable
  // This is useful for test automation as it's not tied to styling or text
  await expect(page.getByTestId('profile-email')).toHaveText('john.doe@example.com')
  await expect(page.getByTestId('profile-name')).toHaveText('John Doe')
  console.log('✓ Elements found using test ID')
})

