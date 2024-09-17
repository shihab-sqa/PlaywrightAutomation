# Playwright Browser Actions

This repository provides sample code for performing various browser actions using Playwright, a powerful tool for end-to-end testing and automation. The code examples cover actions such as interacting with checkboxes, dropdowns, handling keyboard events, double-clicking, hovering, right-clicking, handling child windows, uploading files, managing frames, and dealing with alerts.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Checkbox](#checkbox)
  - [Dropdown](#dropdown)
  - [Keyboard Action](#keyboard-action)
  - [Double Click](#double-click)
  - [Hover](#hover)
  - [Right Click](#right-click)
  - [Child Window Handling](#child-window-handling)
  - [File Upload](#file-upload)
  - [Frame Handling](#frame-handling)
  - [Alert Handling](#alert-handling)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js (>= 14.x)
- npm or yarn

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/playwright-browser-actions.git
    cd playwright-browser-actions
    ```

2. Install the required dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

### Checkbox

To interact with checkboxes:

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Check a checkbox
  await page.check('input[type="checkbox"]#checkbox-id');

  // Uncheck a checkbox
  await page.uncheck('input[type="checkbox"]#checkbox-id');

  await browser.close();
})();
Dropdown
To select options from a dropdown:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Select an option from a dropdown
  await page.selectOption('select#dropdown-id', 'option-value');

  await browser.close();
})();
Keyboard Action
To simulate keyboard actions:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Type text into an input field
  await page.fill('input#input-id', 'sample text');

  // Press a specific key
  await page.keyboard.press('Enter');

  await browser.close();
})();
Double Click
To perform a double-click:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Double click on an element
  await page.dblclick('button#button-id');

  await browser.close();
})();
Hover
To hover over an element:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Hover over an element
  await page.hover('button#button-id');

  await browser.close();
})();
Right Click
To perform a right-click:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Right click on an element
  await page.click('button#button-id', { button: 'right' });

  await browser.close();
})();
Child Window Handling
To handle child windows:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('popup', async (popupPage) => {
    await popupPage.waitForLoadState();
    console.log('Child window URL:', popupPage.url());
    await popupPage.close();
  });

  await page.goto('https://example.com');
  await page.click('a#link-to-open-child-window');

  await browser.close();
})();
File Upload
To upload files:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Upload a file
  await page.setInputFiles('input[type="file"]#file-input-id', 'path/to/file.txt');

  await browser.close();
})();
Frame Handling
To interact with frames:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Access and interact with a frame
  const frame = page.frame({ name: 'frame-name' });
  await frame.fill('input#input-id', 'text in frame');

  await browser.close();
})();
Alert Handling
To handle alerts:

javascript
Copy code
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    await dialog.dismiss(); // or dialog.accept();
  });

  await page.goto('https://example.com');
  await page.click('button#trigger-alert');

  await browser.close();
})();
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests with improvements or new features.
