// Optional fixture QA. Requires Playwright; the skill itself has no dependency.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = dirname(fileURLToPath(import.meta.url));
const evidence = join(root, 'evidence');
await mkdir(evidence, { recursive: true });
const browser = await chromium.launch({ headless: true,
  ...(process.env.EXAMPLE_BROWSER_PATH ? { executablePath: process.env.EXAMPLE_BROWSER_PATH } : {}) });
const report = { generatedAt: new Date().toISOString(), browser: browser.version(),
  kind: 'Fictional fixtures; automated browser checks, not user research', cases: [] };
try {
  for (const [name, file, destination] of [
    ['clearfile-before', 'clearfile/before.html', '#request'],
    ['clearfile-after', 'clearfile/after.html', '#request'],
    ['northline-new', 'northline/index.html', '#contact'],
  ]) {
    for (const [size, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
      const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      const errors = [];
      const remoteRequests = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('request', request => { if (/^https?:/.test(request.url())) remoteRequests.push(request.url()); });
      const checks = [];
      const check = (label, actual, expected = true) => {
        assert.deepEqual(actual, expected, `${name}/${size}: ${label}`);
        checks.push(label);
      };
      await page.goto(pathToFileURL(join(root, file)).href);
      check('no horizontal overflow', await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      check('primary destination matches contract', await page.locator('[data-primary]').getAttribute('href'), destination);
      check('all local links resolve', await page.locator('a[href^="#"]').evaluateAll(links =>
        links.every(link => document.getElementById(link.hash.slice(1)))));
      if (name.startsWith('clearfile')) {
        check('login destination preserved', await page.getByRole('link', { name: /^Log in/ }).getAttribute('href'), '#account');
      }
      await page.keyboard.press('Tab');
      check('keyboard link focus visible', await page.evaluate(() =>
        document.activeElement.tagName === 'A' && getComputedStyle(document.activeElement).outlineStyle !== 'none'));
      await page.evaluate(() => document.activeElement.blur());
      await page.screenshot({ path: join(evidence, `${name}-${size}.png`), fullPage: true });
      await page.locator('[data-primary]').click();
      check('primary link reaches section', new URL(page.url()).hash, destination);
      const button = page.locator('button[type="submit"]');
      const input = page.locator('input[type="email"]');
      const status = page.getByRole('status');
      await button.click();
      check('empty form rejected', await input.evaluate(el => !el.checkValidity()));
      check('invalid submission stays idle', await status.textContent(), '');
      await input.fill('not-an-email');
      check('invalid email rejected', await input.evaluate(el => !el.checkValidity()));
      await input.fill('practice@example.com');
      await page.locator('select').selectOption('error');
      await button.click();
      check('pending prevents duplicate click', await button.isDisabled());
      await page.waitForFunction(() => document.querySelector('[role="status"]').textContent.includes('Practice error'));
      check('safe input retained on failure', await input.inputValue(), 'practice@example.com');
      check('retry available after failure', await button.isEnabled());
      await page.locator('select').selectOption('success');
      await button.click();
      await page.waitForFunction(() => document.querySelector('[role="status"]').textContent.includes('Practice complete'));
      check('success is explicitly a simulation', (await status.textContent()).includes('No request was sent'));
      check('no remote requests', remoteRequests, []);
      check('no JavaScript errors', errors, []);
      report.cases.push({ fixture: file, viewport: { width, height }, screenshot: `${name}-${size}.png`, checks, result: 'passed' });
      await context.close();
    }
  }
  report.totalChecks = report.cases.reduce((sum, entry) => sum + entry.checks.length, 0);
  await writeFile(join(evidence, 'results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(`${report.totalChecks} checks passed across ${report.cases.length} fixture/viewport cases.`);
} finally {
  await browser.close();
}
