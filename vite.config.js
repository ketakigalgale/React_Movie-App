// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React_Movie_App/',  // <-- important for GitHub Pages
  plugins: [react()]
})

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/React_Movie-App/", // use your repo name here
  plugins: [react()],
})
