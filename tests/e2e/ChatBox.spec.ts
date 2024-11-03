import { test, expect } from '@playwright/test';

test.describe('SideBar component', () => {
  test('should add new Chat', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const input = await page.getByPlaceholder('New Chat');
    await input.fill('Hello');
    await input.press('Enter');

    const result = await page.locator('text=Hello');
    await expect(result).toBeVisible();
  });
});
