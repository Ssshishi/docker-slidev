import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    resolve: {
      extensions: ['.vue', '.js', '.json' ],
      alias: [
        { find: "@", replacement: path.resolve(__dirname, './src') },
      ],
    },
  },
})