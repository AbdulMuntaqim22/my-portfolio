import { test, expect } from '@playwright/test';

test('portfolio loads and key sections are visible', async ({ page }) => {
  await page.goto('/');

  const emailLinks = page.locator('a:has-text("Send Email")');

  await expect(page.locator('h1')).toContainText('Engineering reliable software');
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Expertise' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Experience' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  expect(await emailLinks.count()).toBeGreaterThanOrEqual(2);
  await expect(emailLinks.first()).toBeVisible();
});
