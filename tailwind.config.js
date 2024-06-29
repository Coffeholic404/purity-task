/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "teall": "#4FD1C5",
        "text": "#A0AEC0",
        "text-active": "#2D3748",
        "text-gray": "#718096",
        "text-gr-700" : "#1f2733",
        "white": "#FFFFFF",
        "gray" : '#CBD5E0'
    },
  },
  plugins: [],
}
}
