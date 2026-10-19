# React Product Dashboard

## Project Description
This project is a simple React dashboard that displays a static list of products. Users can show or hide the product list and enter their name to display a greeting.

## File Organization
- `src/App.jsx`: The main component. It manages the application state, toggle button, and controlled input.
- `src/components/Card.jsx`: A reusable layout component that accepts and renders `children`.
- `src/components/Product.jsx`: Displays a product title and price using props.
- `src/components/ProductList.jsx`: Defines the static product array and renders products using `map()` with unique keys.
- `src/main.jsx`: The entry point that renders the React application.

## Challenges Faced
- Understanding how `useState` updates the interface.
- Implementing a controlled input for the user's name.
- Passing data between components using props.
- Rendering a list with `map()` and unique keys.
- Using `children` to create a reusable layout component.
- Setting up Git and GitHub to submit the project.

## How to Run
1. Install Node.js.
2. Open a terminal in the project directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Restrictions
The project uses functional components, `useState`, props, conditional rendering, and a controlled input. It does not use `useEffect`, API calls, Context, reducers, or external component libraries.