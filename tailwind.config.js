/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                "bg1": "#E854E8FF",
                "bg2": "#C336C3FF",
                "accent": "#B40EF6FF",
                "primary": "#8C17D8FF",
                "primary2": "#F363EDFF"
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
};