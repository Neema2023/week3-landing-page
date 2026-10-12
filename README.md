# DevPulse Landing Page — Tailwind CSS

## Project Overview

DevPulse is a technology blog landing page that shares learning resources about web development, programming, responsive design, backend development, and databases.

This project rebuilds a previously created landing page using Tailwind CSS utility classes.

## Project Structure

- `plain-css/` — Original landing page built with HTML and plain CSS.
- `tailwind-version/` — Redesigned landing page built with HTML, Tailwind CSS v4, and Vite.

## Technologies Used

- HTML5
- CSS3
- Tailwind CSS v4
- Vite
- Git and GitHub

## Design Features

- Responsive navigation bar
- Hero section with a call to action
- Technology article cards
- Responsive grid layout
- Hover effects and transitions
- About section and footer
- Responsive spacing, colors, and typography using Tailwind utilities

## How to Run the Tailwind Version

1. Install [Node.js](https://nodejs.org/).
2. Open a terminal in the `tailwind-version/` directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

To check the production build, run:

```bash
npm run build
```

## Workflow Note

I started with the original DevPulse landing page built using HTML and plain CSS. I preserved that version in the `plain-css/` directory and created a separate version using Tailwind CSS v4.

I used Tailwind utility classes to style the layout, typography, colors, spacing, article cards, responsive grid, and hover effects. Vite provides the local development server and production build.

Keeping both versions in one repository makes it possible to compare the original CSS approach with the Tailwind CSS approach.

## Learning Reflection

This project helped me practise utility-first styling, responsive design, reusable layout patterns, and the use of Tailwind CSS with Vite.
