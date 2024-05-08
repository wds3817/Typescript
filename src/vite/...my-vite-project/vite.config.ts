import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((args) => {
  const {command, mode} = args;
  if (command === "serve") {
    return {
      plugins: [react()],
      base: "production.url"
    }
  } else {
    return {
       plugins: [react()]
    }
  }

});
