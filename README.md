# Playwright SDET Automation Testing

This repository contains my learning journey and practice projects for **Playwright Automation Testing** with a focus on building a complete **Selenium/SDET Framework**.

## About

I'm learning Playwright and building a comprehensive automation testing framework from scratch. This repository includes hands-on examples, automation scripts, and framework implementations using **Playwright** with **TypeScript**.

## Technologies Used

- **Playwright** - Web automation testing
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment
- **Git & GitHub** - Version control
- **Playwright Reports** - Test reporting

## Project Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tyagiujj/PlaywrightSDETAutomation.git
cd PlaywrightSDETAutomation

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Available Scripts

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests on specific browser
npm run test:chrome       # Chromium only
npm run test:firefox      # Firefox only
npm run test:webkit       # WebKit only
```

## Project Structure

```
PlaywrightSDETAutomation/
├── tests/                      # Test files
│   └── example.spec.ts        # Sample test cases
├── .env.example               # Environment variables template
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Learning Topics

- ✅ Playwright Installation & Setup
- ✅ Browser Handling
- ⏳ Locators & Element Interaction
- ⏳ Assertions & Waits
- ⏳ Input Handling & Form Submission
- ⏳ Dropdowns & Select Elements
- ⏳ Frames & Iframes
- ⏳ Alerts & Popups
- ⏳ Multiple Windows/Tabs Handling
- ⏳ API Testing
- ⏳ Fixtures & Hooks
- ⏳ Page Object Model (POM)
- ⏳ Data-Driven Testing
- ⏳ Parallel Execution
- ⏳ Playwright Reports
- ⏳ CI/CD Integration
- ⏳ Cross-Browser Testing

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and update values as needed:

```bash
cp .env.example .env
```

### Playwright Config

The `playwright.config.ts` file includes:
- Multi-browser testing (Chrome, Firefox, WebKit)
- Parallel execution
- HTML reporting
- CI/CD optimizations
- Retry logic for flaky tests

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests with UI
```bash
npm run test:ui
```

### Run Tests in Debug Mode
```bash
npm run test:debug
```

### Run Specific Browser
```bash
npm run test:chrome
```

### View Test Report
```bash
npx playwright show-report
```

## Project Goals

The goal of this repository is to:
1. ✅ Learn Playwright fundamentals
2. 🎯 Build a production-ready automation framework
3. 🎯 Implement best practices (POM, fixtures, etc.)
4. 🎯 Master advanced features (API testing, visual testing)
5. 🎯 Integrate with CI/CD pipelines

## Contributing

This is a personal learning project. Contributions and suggestions are welcome! Feel free to open issues or pull requests.

## Author

**Ujjwal Tyagi**  
QA Engineer | Manual & Automation Testing  
[GitHub](https://github.com/tyagiujj)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

**Last Updated:** May 30, 2026  
**Status:** 🚀 Active Development
