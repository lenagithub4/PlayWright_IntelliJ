import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('lenatest@aaro.com', 'LenaTest');

    await expect(page.locator('h4')).toHaveText('Dashboard');
});




test('click menu Users', async ({ page }) => {
    await page.getByTestId('nav-users').click();
    await expect(page.locator('h4')).toHaveText('Users');
});

test('click menu Products', async ({ page }) => {
    await page.getByTestId('nav-products').click();
    await expect(page.locator('h4')).toHaveText('Products');
});

test('click menu Form Elements', async ({ page }) => {
    await page.getByTestId('nav-form-elements').click();
    await expect(page.locator('h4')).toHaveText('Form Elements');
});