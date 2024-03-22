/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
        },
        screens: {
          'xs': '320px', // Define your custom "extra small" breakpoint here
          '2xl': '1536px',
        },
        fontFamily: {
          inter: ['Inter', 'sans'],
        },
      },
    },
    plugins: [
      require('tailwindcss'), // Add Tailwind CSS as a plugin
      require('autoprefixer'), // Add Autoprefixer as a plugin
      require('flowbite/plugin'),
    ],
  };
  