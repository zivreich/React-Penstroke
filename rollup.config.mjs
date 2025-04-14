import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ 
      tsconfig: './tsconfig.json',
      exclude: ['**/*.test.tsx', '**/*.test.ts'],
      compilerOptions: {
        declaration: false, // Disable declarations in rollup build
      }
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
}; 