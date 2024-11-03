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

test('should send message when Enter key is pressed', async ({ page }) => {
  await page.route(
    'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
    (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{ generated_text: 'Response from bot' }]),
      });
    }
  );

  await page.goto('http://localhost:3000');

  const textArea = page.getByPlaceholder('Ask simple chat.ai anything');
  await textArea.fill('Hello');
  await textArea.press('Enter');

  await expect(page.locator('#response-text')).toHaveText(/.+/);
});
