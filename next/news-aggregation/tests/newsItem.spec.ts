import { test, expect } from '@playwright/test';

test('click on news', async ({ page }) => {
    await page.goto('http://100.88.40.21:3000/UKNews');
    const pagePromise = page.context().waitForEvent('page');
    await page.getByTestId('news-item-2').click();
    const newPage = await pagePromise;
    await expect(newPage).toHaveURL(/^(?!http:\/\/localhost:3000\/).*$/);
});