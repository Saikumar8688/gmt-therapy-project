import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { forest: '#274b43', cream: '#f7f4ed', clay: '#c77960' }, fontFamily: { sans: ['Arial', 'sans-serif'] } } }, plugins: [] }
export default config
