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


### Route

The `Route` component renders its children or a specified functional component based on the current URL path. It throws an error if neither children nor a component is provided. Strict TypeScript typings are added.

#### Usage with Children

```jsx
import Route from "./Route";

// Usage within your component
<Route path="/path">
  <!-- Content to render when the path matches -->
</Route>
```

#### Usage with Component

```jsx
import Route from "./Route";

// Usage within your component
<Route path="/path" component={MyComponent} />
```

When using the `component` prop, the `Route` component will render the specified functional component (`MyComponent` in the example) if the `path` matches the current URL. This provides flexibility in how you structure and reuse your route components.

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
