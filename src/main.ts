import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'; // 中文
import App from './App.vue';
import router from './router/index';
import store from './store';
import 'element-plus/dist/index.css';
import Components from './components/base';
import '@/assets/css/base.css';
import 'default-passive-events';

const selfwindow: any = window;
selfwindow.loginDateCallback = function loginDateCallback() {
  if (self !== top) {
    window.parent.window.location.href = '/developercenter/static/develop.html#/system/login';
  } else {
    window.location.href = '/developercenter/static/develop.html#/system/login';
  }
};
const app = createApp(App);
app.use(store);
app.use(ElementPlus, { locale });
app.use(Components);
app.use(router);
app.mount('#mainApp');
