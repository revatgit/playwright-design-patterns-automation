import {test , expect} from '@playwright/test';
import loginData from '../data/loginData.json';

loginData.forEach (({email,password}) => {

test(`Should log in with valid credentials ${email}`, async ({page}) => {
    await page.goto('https://binaryville.com/account/');
    const emailInput = page.getByRole("textbox", { name: "Email" });
    await emailInput.fill(email);
    const passwordInput = page.getByRole("textbox", { name: "Password" });
    await passwordInput.fill(password);
    const signInButton = page.getByRole("button", { name: "Sign in" });
    await signInButton.click();

     await expect(page).toHaveURL(new RegExp(password))
}); 
})