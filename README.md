# The Black Store

A premium React-based e-commerce web application for purchasing black garments. Featuring an elegant black, white, and gold theme.

## Features

### Home Page
- **Title Card**: Elegant "TheBlackStore" branding
- **Navigation Bar**: Horizontal navigation with Men/Women sections and category dropdowns
- **Premium Cards**: Showcase cards displaying models in black dresses
- **Footer**: Contact information, help section, and copyright

### Browsing Page
- **Product Grid**: Display products in elegant card layout
- **Filters Sidebar**: Filter by sizes, fabrics, and colors
- **Sort Options**: Sort by price (low to high, high to low) and name (A-Z, Z-A)
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── TitleCard/
│   ├── Navigation/
│   ├── PremiumCards/
│   ├── Footer/
│   ├── Filters/
│   ├── SortBar/
│   └── ProductCard/
├── pages/
│   ├── Home.js
│   └── Browsing.js
├── data/
│   └── products.js
├── App.js
└── index.js
```

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 with custom properties
- Google Fonts (Playfair Display, Montserrat)

## Color Palette

- **Black Primary**: #0a0a0a
- **Black Secondary**: #1a1a1a
- **White Primary**: #ffffff
- **Gold Primary**: #d4af37
- **Gold Accent**: #ffd700

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner in watch mode
- `npm test -- --coverage` - Runs tests with coverage report
- `npm test -- --watchAll=false` - Runs tests once without watch mode
- `npm run lint` - Runs ESLint to check for code issues
- `npm run lint:fix` - Automatically fixes ESLint errors where possible
- `npm run format` - Formats code using Prettier
- `npm run format:check` - Checks if code is formatted correctly

## Testing

This project uses Jest and React Testing Library for testing.

### Test Files

Test files are located alongside their components with the `.test.js` extension:

- `src/App.test.js` - Main App component tests
- `src/pages/Home.test.js` - Home page tests
- `src/pages/Browsing.test.js` - Browsing page tests
- `src/components/TitleCard/TitleCard.test.js` - TitleCard component tests
- `src/components/Navigation/Navigation.test.js` - Navigation component tests
- `src/components/ProductCard/ProductCard.test.js` - ProductCard component tests
- `src/components/Filters/Filters.test.js` - Filters component tests
- `src/components/SortBar/SortBar.test.js` - SortBar component tests
- `src/components/Footer/Footer.test.js` - Footer component tests
- `src/data/products.test.js` - Products data validation tests

### Running Tests

```bash
# Run tests in watch mode (default)
npm test

# Run tests once
npm test -- --watchAll=false

# Run tests with coverage
npm test -- --coverage

# Run a specific test file
npm test -- TitleCard.test.js
```

### Test Coverage

The test suite covers:
- Component rendering and user interactions
- Navigation and routing
- Filter and sort functionality
- Data validation
- UI component behavior

## Linting & Code Quality

This project uses ESLint for code linting and Prettier for code formatting.

### ESLint Configuration

- Configuration file: `.eslintrc.json`
- Extends: `react-app` and `react-app/jest`
- Custom rules for code quality and consistency
- Automatically runs during development with `react-scripts`

### Prettier Configuration

- Configuration file: `.prettierrc`
- Ensures consistent code formatting across the project
- Run `npm run format` to format all files

### EditorConfig

- Configuration file: `.editorconfig`
- Ensures consistent coding styles across different editors and IDEs

## License

This project is private and proprietary. 

**Educational Use Allowed**: You may download, study, and modify this code for learning and educational purposes.

**Commercial Use Requires License**: Any enterprise, commercial, or monetization use requires a commercial license and payment of royalties. Please contact the copyright holder for licensing terms.

See [LICENSE](LICENSE) file for full terms and conditions.

