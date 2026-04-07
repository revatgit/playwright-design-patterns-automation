import {test , expect } from '@playwright/test';

test('Sign in button is visible', async ({page}) => {
   
  await page.goto('https://binaryville.com/account');

  const signInButton = page.getByRole('button', { name: 'Sign in' });
  await expect(signInButton).toBeVisible();
});