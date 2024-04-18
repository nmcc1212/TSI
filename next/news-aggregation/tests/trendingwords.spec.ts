import { test, expect } from '@playwright/test';

test('trending words technews', async ({ page }) => {
    await page.goto('http://100.88.40.21:3000/');
    await page.waitForSelector('[data-testid="trending-words"]');
    const trendingWordsText = await page.$eval('[data-testid="trending-words"]', (element) => element.textContent);
    const trendingTopicsRegex = /Trending\sTopics:\s(?:[\w\s.,']+,\s?){4}[\w\s.,']+/
    expect(trendingWordsText).toMatch(trendingTopicsRegex);
});
test('trending words UKNews', async ({ page }) => {
    await page.goto('http://100.88.40.21:3000/UKNews');
    await page.waitForSelector('[data-testid="trending-words"]');
    const trendingWordsText = await page.$eval('[data-testid="trending-words"]', (element) => element.textContent);
    const trendingTopicsRegex = /Trending\sTopics:\s(?:[\w\s.,']+,\s?){4}[\w\s.,']+/
    expect(trendingWordsText).toMatch(trendingTopicsRegex);
});

test('trending words WorldNews', async ({ page }) => {
    await page.goto('http://100.88.40.21:3000/WorldNews');
    await page.waitForSelector('[data-testid="trending-words"]');
    const trendingWordsText = await page.$eval('[data-testid="trending-words"]', (element) => element.textContent);
    const trendingTopicsRegex = /Trending\sTopics:\s(?:[\w\s.,']+,\s?){4}[\w\s.,']+/
    expect(trendingWordsText).toMatch(trendingTopicsRegex);
});

test('trending words Defence', async ({ page }) => {
    await page.goto('http://100.88.40.21:3000/DefenceNews');
    await page.waitForSelector('[data-testid="trending-words"]');
    const trendingWordsText = await page.$eval('[data-testid="trending-words"]', (element) => element.textContent);
    const trendingTopicsRegex = /Trending\sTopics:\s(?:[\w\s.,']+,\s?){4}[\w\s.,']+/
    expect(trendingWordsText).toMatch(trendingTopicsRegex);
});
