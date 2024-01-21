import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./core/router/router";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
