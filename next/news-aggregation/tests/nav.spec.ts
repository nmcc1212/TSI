import { test, expect } from '@playwright/test';

test('nav to ukraine', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.locator('#navbar-default :text("Ukraine News")').click();
    await expect(page).toHaveURL(/.*\/Ukraine/);
});
test('nav to UK', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.locator('#navbar-default :text("UK News")').click();
    await expect(page).toHaveURL(/.*\/UKNews/);
});
test('nav to World News', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.locator('#navbar-default :text("World News")').click();
    await expect(page).toHaveURL(/.*\/WorldNews/);
});
test('nav to Hacker News', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.locator('#navbar-default :text("Hacker News")').click();
    await expect(page).toHaveURL(/.*\/HackerNews/);
});
test('nav to Defence News', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.locator('#navbar-default :text("Defence News")').click();
    await expect(page).toHaveURL(/.*\/DefenceNews/);
});