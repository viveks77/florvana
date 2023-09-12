/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "white",
                foreground: "black",
                primary: "#55E6C1",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                bricolage: ["Bricolage Grotesque", "sans-serif"],
                playfair: ["Playfair Display", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
