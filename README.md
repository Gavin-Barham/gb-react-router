# React Router Components

A collection of React components for building a simple router in your React application. These components provide client-side routing functionality.

## Components

### Link

The `Link` component is used for creating hyperlinks that navigate within the application without a full page refresh. It is enhanced with strict TypeScript typings.

#### Usage

```jsx
import Link from "./Link";

// Usage within your component
<Link to="/path">Link Text</Link>
```


Here's the updated documentation for the `Route` functional component in Markdown format:

### Route

The `Route` component renders its children, a specified functional component, or an element based on the current URL path. It throws an error if multiple rendering options are provided simultaneously.

#### Props

- `path` (required): A string representing the URL path to match for rendering.
- `children` (optional): Content to render when the `path` matches the current URL.
- `component` (optional): A function that returns content to render when the `path` matches the current URL.
- `element` (optional): An element to render when the `path` matches the current URL.

#### Usage

The `Route` component allows you to define different rendering options based on the URL path.

- Usage with `children`:

```jsx
import Route from "./Route";

// Usage within your component
<Route path="/path">
  {/* Content to render when the path matches */}
</Route>
```

- Usage with `component`:

```jsx
import Route from "./Route";

// Define a functional component to render
const MyComponent = () => {
  // Your component logic here
  return <div>Component Content</div>;
};

// Usage within your component
<Route path="/path" component={MyComponent} />
```

- Usage with `element`:

```jsx
import Route from "./Route";

// Define an element to render
const myElement = <div>Element Content</div>;

// Usage within your component
<Route path="/path" element={myElement} />
```

The `Route` component ensures that only one of the rendering options (`children`, `component`, or `element`) is provided. If multiple options are specified, it will throw an error to prevent ambiguity.

Exported Types:

- `RouteProps`: The type definition for the `Route` component's props, including `path`, `children`, `component`, and `element`.

You can import the `Route` component and its associated type like this:

```jsx
import Route, { RouteProps } from "./Route";
```

This allows you to use the `Route` component and `RouteProps` type in other parts of your application while maintaining clarity and type safety.

### BrowserRouter

The `BrowserRouter` component combines the `RouterProvider`, `Router`, and your application components for easy setup. It is the top-level component that should wrap your entire application. Strict TypeScript typings are added.

#### Usage

```jsx
import { BrowserRouter } from "./BrowserRouter";

// Usage at the root of your application
<BrowserRouter>
  <!-- Your application components -->
</BrowserRouter>
```

## Installation

You can install these components using npm or yarn:

```bash
npm i gb-react-router
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# gb-react-router
# gb-react-router
