/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#2e8d80',
            },
        },
    },
    plugins: [],
};
