import { test, expect } from '@playwright/test';

test('Verify dashboard URL among five tabs', async ({ context }) => {

    const urls = [
        'https://example.com/',
        'https://www.wikipedia.org/',
        'https://playwright.dev/',
        'https://example.org/',
        'https://the-internet.herokuapp.com/'
    ];

    // Open five tabs
    for (const url of urls) {
        const tab = await context.newPage();
        await tab.goto(url);
    }

    // Open a dashboard URL in the fifth tab
    const dashboardTab = await context.newPage();
    await dashboardTab.goto('https://the-internet.herokuapp.com/');

    // Get all open tabs
    const pages = context.pages();

    // Find the tab containing /dashboard
    const matchingTab = pages.find(tab =>
        tab.url().includes('/dashboard')
    );

    // Validate
    expect(matchingTab).toBeTruthy();
});