// @ts-check
import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.describe('Calendly', () => {
  test('book the next available timeslot', async ({ page }) => {
    await page.goto('https://calendly.com/adrianosaadeh/60min')

    await ai('Verify that a calendar is displayed', { page, test })
    await ai('Dismiss the privacy modal', { page, test })
    await ai('Click on the first day in the month with times available', { page, test })
    await ai('Click on the first available time in the sidebar', { page, test })
    await ai('Click the Next button', { page, test })
    await ai('Fill out the form with realistic values', { page, test })
    await ai('Submit the form', { page, test })

    const element = await page.getByText('You are scheduled')
    expect(element).toBeDefined()
  })
})

