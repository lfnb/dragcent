/*
 * @Author: liyafei
 * @Date: 2022-12-20 11:16:32
 * @Description: 
 */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import type { ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  return {
    build: {
      target: 'modules',
      outDir: 'es',
      minify: false,
      // cssCodeSplit: true,
      rollupOptions: {
        external: ['vue', /\.less/],
        // external: ['vue'],
        input: ['src/index.ts'],
        preserveEntrySignatures: 'strict',
        output: [{
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true, //保持目录对应
          dir: '../market-ui/es',  //配置打包根目录
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true, //保持目录对应
          dir: '../market-ui/lib',  //配置打包根目录
          preserveModulesRoot: 'src',
        }],
      },
      lib: {
        entry: './index.ts',
        formats: ['es', 'cjs'],
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      dts({
        outputDir: '../market-ui/es',
      }),
      dts({
        outputDir: '../market-ui/lib',
      }),
      {
        name: 'style',
        generateBundle(config, bundle) {
          //这里可以获取打包后的文件目录以及代码code
          const keys = Object.keys(bundle);
          for (const key of keys) {
            const bundler: any = bundle[key as any];
            //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
            this.emitFile({
              type: 'asset',
              fileName: key,//文件名名不变
              source: bundler.code.replace(/\.\/packages\/components\/src\/*.*\/style\//, '/style/').replace(/\.less/g, '.css'),
            });
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  };
});
