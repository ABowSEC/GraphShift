# The Oversight Report

**Transparency-as-a-Service** platform for journalists, researchers, and civic technologists to file, manage, and share investigative documents (FOIA, public records, court filings) with ease.


---

## Scripts

* `npm run dev` - Launch Vite dev server with HMR
* `npm run build` - Create optimized production build
* `npm run preview` - Preview production build locally



---

## Features

* **Responsive Design**: Built with Chakra UI for mobile and desktop.
* **Dark/Light Mode**: Toggle with persistent settings.
* **Document Archive**: Browse FOIA and public records in a searchable grid.
* **Article Feed**: Present investigatory articles with source verification badges.
* **Submit Page**: Securely submit tips and upload documents.
* **Routing**: React Router for SPA navigation and dynamic article/detail routes.

---



##  License

MIT © \ABowSec 2025

---

##  ESLint Configuration

To ensure code quality and catch issues early, we've set up ESLint with TypeScript support. The configuration uses TypeScript-aware lint rules and React-specific plugins.

**Create an ESLint config at the project root:**

```js
// eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  extends: [
    // Type-checked recommended rules
    ...tseslint.configs.recommendedTypeChecked,
    // Stricter rules for larger codebases
    ...tseslint.configs.strictTypeChecked,
    // Stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  plugins: {
    // React-specific lint rules
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // Enable React X and React DOM recommended rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.app.json'],
    tsconfigRootDir: import.meta.url,
  },
});
```

**Install required dev dependencies:**

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  eslint-plugin-react-x eslint-plugin-react-dom
```

Once installed, run `npx eslint "src/**/*.{ts,tsx}"` to lint your code. You can also integrate ESLint into your editor for real-time feedback.
