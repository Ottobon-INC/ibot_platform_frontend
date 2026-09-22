/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-base': 'var(--color-surface-base)',
        'surface-gray-1': 'var(--color-surface-gray-1)',
        'surface-gray-2': 'var(--color-surface-gray-2)',
        'outline-gray-1': 'var(--color-outline-gray-1)',
        'outline-gray-2': 'var(--color-outline-gray-2)',
        'ink-gray-4': 'var(--color-ink-gray-4)',
        'ink-gray-5': 'var(--color-ink-gray-5)',
        'ink-gray-6': 'var(--color-ink-gray-6)',
        'ink-gray-7': 'var(--color-ink-gray-7)',
        'ink-gray-8': 'var(--color-ink-gray-8)',
        'ink-gray-9': 'var(--color-ink-gray-9)',
      }
    },
  },
  plugins: [],
}
