import React from "react";
import { RouterComponent } from "./router";
import { OrganizationProvider } from "./core";

export const App = () => {
  return (
    <OrganizationProvider>
      <RouterComponent />
    </OrganizationProvider>
  );
};
