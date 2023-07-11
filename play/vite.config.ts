/*
 * @Author: liyafei
 * @Date: 2022-12-20 11:16:32
 * @Description: 
 */
import path from 'path'
import { defineConfig } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import autoprefixer from 'autoprefixer'
import px2vw from '@yuo/postcss-px2vw';

import { viteVConsole } from 'vite-plugin-vconsole'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),

      Components({
        dts: true,
        resolvers: [VantResolver()],
        types: []
      }),

      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue$/,
        ],
        imports: [
          'vue',
          'vue-router',
          'vitest'
        ],
        dts: true
      }),

      viteVConsole({
        entry: [path.resolve('src/main.ts')],
        localEnabled: command === 'serve',
        enabled: false,
        config: {
          maxLogNumber: 1000,
          theme: 'Light'
        }
      })
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          px2vw({
            viewportWidth: 375
          })
        ]
      }
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, './src')
      }
    },
    server:{
      host:true,
      port:8000,
    }
  }
})
