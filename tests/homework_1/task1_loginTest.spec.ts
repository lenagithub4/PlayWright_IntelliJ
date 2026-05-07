import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../utils/testData';

test('login to Dashboard', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await expect(page.locator('h4')).toHaveText('Dashboard');
});

