import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/Brown/",
  // build:{
  //   // minify: false, 
  //   // sourcemap: true,
  //   rollupOptions:{
  //     output:{
  //       manualChunks(id){
  //         if(id.includes("node_modules")){
  //           if (id.includes("react-dom/server")) return "react-dom-server";
  //           if (id.includes("react-dom/client")) return "react-dom-client";
  //           if (id.includes("react-dom")) return "react-dom";
  //           return "vendor";
  //         }
  //       }
  //     }
  //   }
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
