

import LoginPage from '../Pages/LoginPage';
import { test, expect } from '../Fixture/TestSetup';
import { attachStepScreenshot } from '../utilities/screenshot';
import AssertionData from '../testdata/AssertionData.json';
import { AppConfig } from '../testdata/AppConfig.js';

test('Login Test Case with ValidUser', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Navigate and Login', async () => {
        await loginPage.gotoUrl(AppConfig.loginUrl);
        await loginPage.login(AppConfig.username, AppConfig.password);
    });

    await test.step('Verify Login Success', async () => {
        await expect(page).toHaveURL(AssertionData.assertions[0].login_url);
        await attachStepScreenshot(page, 'LoginPage Successful');
    });
});
