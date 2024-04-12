/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // Import the package

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,rsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use the imported package
}

