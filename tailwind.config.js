import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {},
    },
    darkMode: 'class',
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        'node_modules/preline/dist/*.js',
    ],
    plugins: [
        typography,
        forms,
        aspectRatio,
        require('preline/plugin'),
    ],
    safelist: [
        {
            pattern: /grid-cols-+/,
        },
        {
            pattern: /gap-+/,
        },
        {
            pattern: /p+/, // This is for padding like p- pl- there must be a better way same for margin below
        },
        {
            pattern: /m+/,
        },
    ],
}
