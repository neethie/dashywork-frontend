/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
    theme: {
        extend: {
            backgroundColor: {
                main: {
                    blue: "#3170a3",
                    gray: "#c0c0c0",
                },
            },
            textColor: {
                main: {
                    blue: "#3170a3",
                    gray: "#c0c0c0",
                },
            },
            borderColor: {
                main: {
                    blue: "#3170a3",
                    gray: "#c0c0c0",
                },
            },
            outlineColor: {
                main: {
                    blue: "#3170a3",
                    gray: "#c0c0c0",
                },
            },
        },
    },
    plugins: [],
};
