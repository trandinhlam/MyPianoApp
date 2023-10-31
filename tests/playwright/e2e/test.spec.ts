import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/piano')
  await page.getByTestId('key-33').click()
  await page.getByTestId('key-42').click()
  await page.getByTestId('key-47').click()
  await page.getByTestId('key-56').click()
  await page.getByTestId('key-63').click()
  await page.getByText('Thank you and enjoy playing music on web browser!').click()

  expect(1)
});