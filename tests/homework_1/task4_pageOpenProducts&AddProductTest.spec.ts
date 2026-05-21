import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('lenatest@aaro.com', 'LenaTest');

    await expect(page.locator('h4')).toHaveText('Dashboard');
});





test('click menu Products & add new product', async ({ page }) => {
    await page.getByTestId('nav-products').click();
    await expect(page.locator('h4')).toHaveText('Products');

    const productName = 'Apple';

    // Fill product name
    await page.getByLabel('Product Name').fill(productName);

    // Click ADD button
    await page.getByRole('button', { name: 'ADD' }).click();

    // Verify product appears in the list
    await expect(page.locator('li')).toContainText([productName]);

});

