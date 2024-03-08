/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            openSans: [
                "Open Sans",
                "sans-serif",
                ...defaultTheme.fontFamily.sans,
            ],
            sans: ["Urbanist", "sans-serif", ...defaultTheme.fontFamily.sans],
        },
        colors: {
            mainGrey: "#12181b",
            lightGrey: "#6c7983",
            white: "#f8f8f8",
            blue: "#7266ff",
            red: "#ff6666",
            green: "#69ff66",
        },
    },
    plugins: [],
};
