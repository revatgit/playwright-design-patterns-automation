import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../browserSetup";
import { LoginPage } from "../page-objects/login-page.pom";

  let loginPage : LoginPage;

Given("the user is on the login page", async function () {
   loginPage = new LoginPage(page);
    await loginPage.goto();
});

When("the user enters valid username and password", async function () {
  await loginPage.emailInput.fill("test@example.com");
  await loginPage.passwordInput.fill("pass123");
});

Then(
  "the user should see their username and password in the url",
  async function () {
    await loginPage.signInButton.click();
    await expect(page).toHaveURL(/test%40example.com/);
    await expect(page).toHaveURL(/pass123/);
  },
);
