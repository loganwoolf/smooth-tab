import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'smoothTabbing',
      formats: ['es', 'umd'],
    },
  },
  plugins: [
    dts({ include: ['lib']})
  ],
})
