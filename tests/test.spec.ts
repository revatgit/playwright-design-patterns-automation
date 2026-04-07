import { test, expect } from '../page-objects/fixtures';

test('Should log in with valid credentials', async ({page, loginPage}) => {
  
  await loginPage.goto();
  await loginPage.login('test@example.com', 'pass123');

  const url = page.url();
  await(expect(url).toContain('pass123'));
});