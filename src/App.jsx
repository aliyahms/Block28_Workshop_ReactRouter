import { Provider } from "react-redux";
import store from "./store";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import "./App.css";

export default function App() {
  return (
    // The Redux Provider has to provide the store to the RouterProvider
    // The order here does matter.
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
