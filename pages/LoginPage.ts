import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private readonly page: Page) {}

    async goto() {
        await this.page.goto('http://135.125.159.228:8080/login/');
    }

    async login(username: string, password: string) {
        await this.page.fill('//input[@type="text"]', username);
        await this.page.fill('//input[@type="password"]', password);
        await this.page.getByTestId('login-button').click();
    }
}