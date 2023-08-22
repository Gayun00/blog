/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "gray-primary": "#2C2E30",
      },
      backgroundColor: {
        "slate-primary": "#E9EDF0",
      },
      borderRadius: {
        primary: "1.875rem",
      },
      boxShadow: {
        "new-morph":
          "5px 5px 10px 0px #D3DBE6, -5px -5px 20px 0px #FFF, -1px -1px 1px 0px rgba(255, 255, 255, 0.60);",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
