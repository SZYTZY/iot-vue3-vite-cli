import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    base: env.VITE_BASE_URL,
    css: {
      // css预处理
      preprocessorOptions: {
        scss: {
          // 引入var.scss全局预定义变量
          additionalData:
            '@import "./src/assets/css/var.scss";'
        }
      }
    },
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname
      }
    },
    server: {
      port: 3030,
      open: true, // 运行自动打开浏览器
      // https: false, // 关闭https
      strictPort: true, // 若3000端口被占用,直接结束项目
      proxy: {
        '/puppeteer': {
          target: 'http://localhost:3300',
          changeOrigin: true,
          secure: false
        },
        '/apikaifa': {
          target: 'https://stp.haier.net/mock/290',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/apikaifa/, '')
        },
        '/apidev': {
          target: 'http://39.107.247.209',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/apidev/, '')
        },
        '/apitest': {
          target: 'http://123.57.31.57',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/apitest/, '')
        },
        '/apiprod': {
          target: 'https://www.haigeek.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/apiprod/, ''),
          headers: {
            host: 'https://www.haigeek.com',
            origin: 'https://www.haigeek.com',
            referer: 'https://www.haigeek.com'
          }
        },
        '/fotacenter': {
          target: 'https://www.haigeek.com',
          changeOrigin: true,
          secure: false,
          headers: {
            host: 'https://www.haigeek.com',
            origin: 'https://www.haigeek.com',
            referer: 'https://www.haigeek.com'
          }
        },
        '/developercenter-api': {
          target: 'https://www.haigeek.com',
          changeOrigin: true,
          secure: false,
          headers: {
            host: 'https://www.haigeek.com',
            origin: 'https://www.haigeek.com',
            referer: 'https://www.haigeek.com'
          }
        },
        '/fota': {
          target: 'https://www.haigeek.com',
          changeOrigin: true,
          secure: false,
          headers: {
            host: 'https://www.haigeek.com',
            origin: 'https://www.haigeek.com',
            referer: 'https://www.haigeek.com'
          }
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]'
        }
      }
    }
  };
});
