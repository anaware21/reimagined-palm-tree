/** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
        "./app/**/*.{js,ts,jsx,tsx}",   // Next.js 13+ App Router
        "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
        "./components/**/*.{js,ts,jsx,tsx}", // Components folder
        ],
        theme: {
        extend: {},
        },
        plugins: [],
    };