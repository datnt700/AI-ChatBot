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

test('should handle a long response from API', async ({ page }) => {
  await page.route(
    'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
    (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          {
            generated_text:
              'This is a very long response from the bot that should be handled properly on the UI without breaking the layout or overflowing...',
          },
        ]),
      });
    }
  );

  await page.goto('http://localhost:3000');
  const input = page.getByPlaceholder('Ask simple chat.ai anything');
  await input.fill('Test long response');
  await input.press('Enter');

  // Kiểm tra xem phản hồi dài có hiển thị đúng không
  await expect(
    page.locator('text=This is a very long response from the bot')
  ).toBeVisible();
});
