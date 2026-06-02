import { test, expect, Locator } from '@playwright/test'

test('Verify Drag and Drop, Double Click and Hover', async ({ page }) => {
  // Navigate to the test website
  await page.goto('https://testautomationpractice.blogspot.com/')

  // Test 1: Drag and Drop functionality
  const dragElement: Locator = page.locator('#draggable')
  const dropElement: Locator = page.locator('#droppable')
  
  // Drag the element to the drop area
  await dragElement.dragTo(dropElement)
  
  // Verify the drop element shows "Dropped!" message
  await expect(dropElement).toContainText('Dropped!')

  // Test 2: Double Click functionality
  const doubleClickElement: Locator = page.getByText('Copy Text')
  
  // Double click the element
  await doubleClickElement.dblclick()

  // Test 3: Mouse Hover functionality
  const hoverElement: Locator = page.getByText('Point Me')
  
  // Hover over the element
  await hoverElement.hover()

  // Test 4: Click on Mobiles link
  const mobilesLink = page.getByRole('link', { name: 'Mobiles' })
  await mobilesLink.click()

  // Wait for the page to load
  await page.waitForTimeout(5000)
})