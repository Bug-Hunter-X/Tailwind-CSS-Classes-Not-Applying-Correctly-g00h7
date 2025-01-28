```javascript
// Check Tailwind Configuration (tailwind.config.js)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "../index.html",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

//Import in the main CSS file (main.css)
@tailwind base;
@tailwind components;
@tailwind utilities;

//Ensure the classes are in the correct HTML element
<div class="bg-red-500 hover:bg-blue-700">
  <p>This text should have a red background, and turn blue on hover.</p>
</div>
```