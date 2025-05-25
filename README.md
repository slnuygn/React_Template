# React Template Project

This project is a template that demonstrates the folder structure, component organization, and code layout used in React applications for interns and beginner developers.

## Folder Structure

```
src/
  ├── components/       # Reusable components
  ├── layouts/          # Page layouts
  ├── pages/            # Pages
  ├── hooks/            # Custom React hooks
  ├── services/         # API requests, data operations
  ├── utils/            # Helper functions
  ├── assets/           # Images, fonts, etc.
  ├── context/          # React contexts
  ├── App.js            # Main application component
  └── index.js          # Entry point
```

## Features

- Modern React structure (Functional Components and Hooks)
- Page management with React Router
- Modular CSS approach
- Organized folder structure
- Reusable components
- Custom hook examples

## Installation

To install the project:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

## Development Guide

### Creating Components

Components should be created in the `src/components` folder. For each component:

1. A JS file with the component name (e.g., `Button.js`)
2. A component-specific CSS file (e.g., `Button.css`)

### Adding Pages

To add a new page:

1. Create a page component in the `src/pages` folder
2. Add the route definition in the `App.js` file

### Style Management

- General styles are defined in `src/index.css`
- Component-specific styles are kept in the related CSS file
- CSS variables are defined in `:root`

## Best Practices

- Keep components small and follow the single responsibility principle
- Document props and perform type checking
- Extract repetitive code into custom hooks
- Manage page layouts in layout components
- Collect API requests in the service layer 