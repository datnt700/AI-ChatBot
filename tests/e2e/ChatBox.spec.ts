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

test.describe('ChatBox component', () => {
  test('should display some response text in <p> tag with id="response-text" after input', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000');

    const input = page.getByPlaceholder('Ask simple chat.ai anything');
    await input.fill('Hello AI');
    await input.press('Enter');
    await page.waitForTimeout(3000);
    await expect(page.locator('#response-text')).toHaveText(/.+/); // Kiểm tra <p> chứa bất kỳ văn bản nào
  });
});
