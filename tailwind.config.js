/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import {nextui} from '@nextui-org/react'



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    
  ],
}

