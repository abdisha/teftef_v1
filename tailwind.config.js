/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: "#3DA1FF",
        secondary: "#FBBF24",
        accent: "#8EC8FF",
        neutral: "#374151",
        base100: "#F9FAFB",
        base200: "#F3F4F6",
        textPrimary: "#7D7D7D",
        textSecondary: "#585858",
      }
    },
  },
  plugins: [],
}

