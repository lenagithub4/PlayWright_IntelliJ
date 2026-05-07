import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('lenatest@aaro.com', 'LenaTest');

    await expect(page.locator('h4')).toHaveText('Dashboard');
});

test('click menu Testing Playground', async ({ page }) => {
    await page.getByTestId('nav-testing').click();

    await expect(page.locator('h4')).toHaveText('Testing Playground');

    //  assertion 'Now you see me' is hidden
    await expect(page.getByText('Now you see me')).toBeHidden();

    await page.getByText('Toggle Hidden Element').click();

    // assertion 'Now you see me' is visible
    await expect(page.getByText('Now you see me')).toBeVisible();
});