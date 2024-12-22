module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your source files
    './public/index.html', // Add your HTML files here if they use Tailwind
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#61a85c',
      }
    },
  },
  plugins: [],
};
