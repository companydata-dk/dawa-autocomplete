// rollup.config.js: UMD + ES builds, minified and not, with and without
// polyfills for old browsers (same matrix as upstream dawa-autocomplete2).
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';

const configs = [];
for (const polyfilled of [true, false]) {
  for (const minified of [true, false]) {
    for (const output of [{
      file: `dist/js${polyfilled ? '' : '/unfilled'}/dawa-autocomplete2.${minified ? 'min.' : ''}js`,
      format: 'umd',
      name: 'dawaAutocomplete',
    }, {
      file: `dist/js${polyfilled ? '' : '/unfilled'}/dawa-autocomplete2.es.${minified ? 'min.' : ''}js`,
      format: 'es',
    }]) {
      configs.push({
        input: 'src/dawa-autocomplete2.js',
        plugins: [
          resolve(),
          replace({ 'process.env.NODE_ENV': JSON.stringify('production'), preventAssignment: true }),
          commonjs({}),
          babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: [[
              '@babel/preset-env',
              polyfilled
                ? { useBuiltIns: 'usage', corejs: '3', targets: { ie: '11' } }
                : { useBuiltIns: false, targets: { ie: '11' } },
            ]],
          }),
          ...(minified ? [terser()] : []),
        ],
        output,
      });
    }
  }
}

export default configs;
